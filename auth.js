import { createClient } from '@supabase/supabase-js';
import { validateCredentials, authErrorMessage } from './auth-validation.js';

const root = document.getElementById('auth-root');
const portal = document.getElementById('portal');
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
let client, mode = 'login', busy = false, mounted = false, recovery = false, currentUser = null;
let saveQueue = Promise.resolve();
const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const redirect = () => window.location.origin + window.location.pathname;

function form(message = '', success = false) {
  root.hidden = false;
  const titles = {login:'Добро пожаловать',register:'Начните своё обучение',forgot:'Восстановление доступа',update:'Новый пароль'};
  const captions = {login:'Войдите, чтобы продолжить курсы и сохранить прогресс.',register:'Создайте аккаунт для обучения в институтах.',forgot:'Отправим на ваш email ссылку для смены пароля.',update:'Установите новый пароль для своего аккаунта.'};
  root.innerHTML = `<div class="auth-intro"><a class="auth-brand" href="/">Учебный портал</a><span class="overline">ЗНАНИЯ ДЛЯ ВАШЕГО БУДУЩЕГО</span><h1>Три направления.<br>Ваш путь развития.</h1><p>Управление, дипломатия и государственная политика. Учитесь, проверяйте знания и продолжайте с того места, где остановились.</p><div class="auth-institutes"><span>01 &nbsp; Институт управления</span><span>02 &nbsp; Институт дипломатии</span><span>03 &nbsp; Национальная школа госполитики</span></div></div><div class="auth-form-side"><div class="auth-card"><span class="overline">ЛИЧНЫЙ УЧЕБНЫЙ КАБИНЕТ</span><h2>${titles[mode]}</h2><p>${captions[mode]}</p>${['login','register'].includes(mode) ? `<div class="auth-tabs"><button data-mode="login" class="${mode==='login'?'active':''}">Вход</button><button data-mode="register" class="${mode==='register'?'active':''}">Регистрация</button></div>`:''}<form id="auth-form" novalidate>${mode!=='update' ? '<label class="auth-label">Email<input type="email" name="email" autocomplete="email" placeholder="name@example.com" required></label>' : ''}${mode!=='forgot' ? `<label class="auth-label">${mode==='update'?'Новый пароль':'Пароль'}<input type="password" name="password" autocomplete="${mode==='login'?'current-password':'new-password'}" ${mode!=='login'?'minlength="8"':''} placeholder="${mode==='login'?'Ваш пароль':'Не менее 8 символов'}" required></label>`:''}${['register','update'].includes(mode) ? '<label class="auth-label">Повторите пароль<input type="password" name="confirmation" autocomplete="new-password" required></label>':''}<p id="auth-message" class="auth-message ${success?'success':''}" role="${success?'status':'alert'}">${escape(message)}</p><button class="primary auth-submit" type="submit">${{login:'Войти в кабинет',register:'Создать аккаунт',forgot:'Отправить ссылку',update:'Сохранить пароль'}[mode]}</button></form>${mode==='login'?'<button class="auth-text-button" data-mode="forgot">Забыли пароль?</button>':mode!=='update'?'<button class="auth-text-button" data-mode="login">← Вернуться ко входу</button>':''}<p class="auth-footnote">Ваш прогресс доступен только вашему аккаунту.<br>Учебные материалы — демонстрационные примеры.</p></div></div>`;
}
function message(text, success = false) {
  const el = document.getElementById('auth-message');
  if(el){el.textContent=text;el.classList.toggle('success',success);el.setAttribute('role',success?'status':'alert');}
}
function syncStatus(text, failed = false) {
  const el = document.getElementById('sync-status');
  el.textContent = text;el.classList.toggle('sync-error',failed);el.hidden=!failed;
}
async function openPortal(user) {
  if(mounted || busy || recovery)return;
  busy=true;
  const {data,error}=await client.from('learning_progress').select('progress').eq('user_id',user.id).maybeSingle();
  if(error){busy=false;form('Не удалось загрузить личный прогресс. Попробуйте войти снова. Если ошибка повторяется, обратитесь к администратору.');return;}
  currentUser=user;
  let cache={};try{cache=JSON.parse(localStorage.getItem('orleu-learning-user-'+user.id)||'{}');}catch{}
  window.portalUser=user;
  window.portalInitialProgress=data?.progress ?? cache;
  window.portalSaveProgress=progress=>{
    const snapshot=JSON.parse(JSON.stringify(progress));
    const userId=currentUser?.id;
    if(!userId)return;
    syncStatus('Сохраняем прогресс…');
    saveQueue=saveQueue.then(async()=>{
      if(currentUser?.id!==userId)return;
      const {error}=await client.from('learning_progress').upsert({user_id:userId,progress:snapshot,updated_at:new Date().toISOString()},{onConflict:'user_id'});
      syncStatus(error?'Не удалось синхронизировать. Копия сохранена на устройстве.':'Прогресс сохранён в аккаунте.',!!error);
    }).catch(()=>syncStatus('Нет соединения. Изменения сохранены на устройстве.',true));
  };
  document.getElementById('account-email').textContent=user.email || 'Слушатель';
  root.hidden=true;portal.hidden=false;mounted=true;busy=false;
  syncStatus('Личный прогресс загружен.');
  await import('./app.js');
}
root.addEventListener('click',event=>{
 const button=event.target.closest('[data-mode]');
 if(button && !busy){mode=button.dataset.mode;form();}
});
root.addEventListener('submit',async event=>{
 if(event.target.id!=='auth-form')return;event.preventDefault();if(busy)return;
 const data=new FormData(event.target), email=String(data.get('email')||'').trim(), password=String(data.get('password')||'');
 const invalid=mode==='forgot' ? validateCredentials(email,'x','login') : mode==='update' ? password.length<8?'Пароль должен содержать не менее 8 символов.':null : validateCredentials(email,password,mode);
 if(invalid){message(invalid);return;}
 if(['register','update'].includes(mode) && password!==data.get('confirmation')){message('Пароли не совпадают.');return;}
 busy=true;const submit=event.target.querySelector('[type=submit]');submit.disabled=true;message('Подождите…',true);
 try{
  if(mode==='login'){
   const {data,error}=await client.auth.signInWithPassword({email,password});
   if(error){message(authErrorMessage(error));return;}
   busy=false;await openPortal(data.user);
  }else if(mode==='register'){
   const {data,error}=await client.auth.signUp({email,password,options:{emailRedirectTo:redirect()}});
   if(error){message(authErrorMessage(error));return;}
   if(data.session){busy=false;await openPortal(data.user);}
   else{mode='login';form('Проверьте почту: если регистрация доступна для этого адреса, вы получите письмо для подтверждения.',true);}
  }else if(mode==='forgot'){
   const {error}=await client.auth.resetPasswordForEmail(email,{redirectTo:redirect()});
   if(error){message(authErrorMessage(error));return;}
   message('Если аккаунт с таким email существует, на него придёт ссылка для смены пароля.',true);
  }else{
   const {error}=await client.auth.updateUser({password});
   if(error){message(authErrorMessage(error));return;}
   recovery=false;await client.auth.signOut({scope:'local'});mode='login';form('Пароль обновлён. Войдите с новым паролем.',true);
  }
 }catch{message('Не удалось подключиться. Проверьте интернет и попробуйте снова.');}
 finally{busy=false;if(submit.isConnected)submit.disabled=false;}
});
document.getElementById('logout-button').addEventListener('click',async()=>{
 const button=document.getElementById('logout-button');button.disabled=true;
 await saveQueue;
 const {error}=await client.auth.signOut({scope:'local'});
 if(error){syncStatus('Не удалось выйти. Попробуйте ещё раз.',true);button.disabled=false;return;}
 currentUser=null;location.replace(location.pathname);
});
if(!url || !key || !/^https:\/\//.test(url)) {
 root.innerHTML='<div class="config-required"><span class="overline">УЧЕБНЫЙ ПОРТАЛ</span><h1>Личный кабинет готовится к запуску</h1><p>Авторизация ещё не подключена. Администратору нужно завершить настройку проекта.</p></div>';
} else {
 client=createClient(url,key);
 recovery=new URLSearchParams(location.hash.slice(1)).get('type')==='recovery';
 if(recovery)mode='update';
 form();
 client.auth.onAuthStateChange((event,session)=>{
  if(event==='PASSWORD_RECOVERY'){recovery=true;mode='update';form();return;}
  if(event==='SIGNED_OUT' && mounted){portal.hidden=true;currentUser=null;location.replace(location.pathname);return;}
  if(session?.user && !recovery && !mounted && !busy)setTimeout(()=>openPortal(session.user),0);
 });
 client.auth.getSession().then(({data,error})=>{
  if(error){message('Не удалось восстановить сессию. Войдите снова.');return;}
  if(data.session?.user && !recovery)openPortal(data.session.user);
 });
}
