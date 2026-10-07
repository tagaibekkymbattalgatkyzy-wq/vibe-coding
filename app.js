const institutes = [
  { id: 'management', title: 'Институт управления', short: 'Управление', icon: '▥', illustration: '▥' },
  { id: 'diplomacy', title: 'Институт дипломатии', short: 'Дипломатия', icon: '◎', illustration: '◎' },
  { id: 'policy', title: 'Национальная школа госполитики', short: 'Госполитика', icon: '⚖', illustration: '⚖' }
];
const courses = [
  { id: 'strategy', institute: 'management', title: 'Стратегическое управление', description: 'От постановки целей до решений, которые дают измеримый результат.', duration: '45 мин',
    topics: [
      ['Цели и приоритеты', 'Цель описывает желаемое изменение, а задача — конкретное действие для его достижения. Измеримый результат помогает отличить полезную работу от формального выполнения мероприятий.', 'Вместо «провести пять совещаний» команда ставит цель «сократить среднее время рассмотрения обращения с 10 до 7 дней за три месяца». Совещания могут быть одним из действий, но их количество не доказывает результат.', 'Запишите одну рабочую цель. Укажите исходное значение, целевое значение и срок. Проверьте, относится ли показатель к результату, а не только к количеству действий.'],
      ['Анализ среды', 'Перед выбором стратегии изучают внутренние возможности и внешние условия. SWOT помогает разделить сильные и слабые стороны организации, возможности и угрозы среды. Это начало обсуждения, а не готовое решение.', 'Внутренняя сильная сторона — опытная команда. Внешняя угроза — изменение требований. Команда может использовать опыт для быстрого пересмотра процесса и снижения риска.', 'Составьте четыре коротких списка для своей команды. Выберите одну комбинацию сильной стороны и внешней возможности и предложите практическое действие.'],
      ['Контроль результатов', 'Показатель должен иметь понятное определение, источник данных и период измерения. При отклонении от цели нужно проверить причины и качество данных, а затем скорректировать действия.', 'Если срок рассмотрения обращений не снизился, сначала проверяют, одинаково ли считается начало и конец обработки. Затем выясняют, где возникает очередь: при регистрации, согласовании или ответе.', 'Выберите показатель своей цели. Опишите способ расчёта, ответственного за данные и частоту проверки. Предложите действие при ухудшении результата.']
    ],
    quiz: [
      ['Какая формулировка описывает измеримый результат?', ['Провести больше совещаний', 'Сократить срок ответа с 10 до 7 дней за три месяца', 'Повысить эффективность'], 1, 'Указаны исходное значение, целевое значение и срок.'],
      ['Что относится к внешней угрозе в SWOT?', ['Недостаток навыков команды', 'Удобный внутренний регламент', 'Изменение внешних требований'], 2, 'Угроза относится к внешней среде; недостаток навыков — внутренняя слабая сторона.'],
      ['С чего начать при неожиданном ухудшении показателя?', ['Проверить данные и причины изменения', 'Сразу заменить показатель', 'Перестать собирать данные'], 0, 'Нужна диагностика данных и процесса, чтобы корректировка отвечала реальной причине.']
    ] },
  { id: 'projects', institute: 'management', title: 'Управление проектами', description: 'Планируйте задачи, распределяйте ответственность и работайте с рисками.', duration: '40 мин',
    topics: [
      ['Результат и границы проекта', 'Проект — временная работа с определённым результатом. Границы описывают, что входит в работу и что остаётся за её пределами. Критерии приёмки позволяют заранее согласовать, как будет оцениваться готовность.', 'Проект запуска учебного сайта включает каталог, уроки и тесты. Мобильное приложение можно явно исключить из первой версии. Проверка готовности: слушатель открывает урок и получает обратную связь по тесту.', 'Опишите результат небольшого проекта, три критерия приёмки и два пункта, которые не входят в первую версию.'],
      ['План и ответственность', 'Большую работу разбивают на задачи с конкретным результатом. Зависимости показывают порядок выполнения. Для каждой задачи нужен ответственный; несколько участников не должны означать отсутствие единого владельца результата.', 'Тестирование формы зависит от её разработки. Ответственный за разработку сообщает о готовности, после чего тестировщик проверяет критерии. У каждой задачи есть срок и понятный выход.', 'Разбейте проект на пять задач. Для каждой укажите результат, ответственного и предшествующую задачу, если она есть.'],
      ['Работа с рисками', 'Риск — неопределённое событие, которое может повлиять на проект. Проблема уже произошла. В реестре риска фиксируют событие, вероятность, последствия, владельца и способ реагирования.', 'Риск: согласование содержания затянется. Реакция: назначить раннюю промежуточную проверку и резерв времени. Если согласование уже просрочено, это проблема, которой требуется текущий план действий.', 'Запишите два риска. Определите ранний сигнал каждого и действие, которое можно выполнить до наступления события.']
    ],
    quiz: [
      ['Для чего нужны критерии приёмки?', ['Чтобы увеличить число задач', 'Чтобы определить, как проверить готовность результата', 'Чтобы исключить проверку'], 1, 'Критерии делают готовность результата проверяемой.'],
      ['Что означает зависимость задач?', ['Одну задачу нужно завершить до начала другой', 'Все задачи имеют одинаковый срок', 'У проекта нет ответственного'], 0, 'Зависимость задаёт порядок выполнения связанных работ.'],
      ['Чем риск отличается от проблемы?', ['Риск всегда безвреден', 'Проблема ещё не произошла', 'Риск может произойти, проблема уже произошла'], 2, 'Для риска планируют предупреждение или реакцию; проблема требует текущего решения.']
    ] },
  { id: 'negotiations', institute: 'diplomacy', title: 'Основы переговоров', description: 'Находите общие интересы и готовьте аргументы для конструктивного диалога.', duration: '45 мин',
    topics: [
      ['Позиции и интересы', 'Позиция — заявленное требование. Интерес — причина, по которой оно важно. Если обсуждать только позиции, стороны могут упустить решения, удовлетворяющие их реальные потребности.', 'Одна сторона требует встречи утром, другая — вечером. За первой позицией стоит возможность участия эксперта, за второй — разница часовых поясов. Короткая промежуточная встреча и письменное заключение эксперта могут оказаться подходящим вариантом.', 'Выберите небольшое разногласие. Разделите заявленные позиции и возможные интересы. Сформулируйте вопросы для проверки ваших предположений.'],
      ['Подготовка и альтернативы', 'До переговоров определяют цели, ограничения и доступную альтернативу, если соглашение не будет достигнуто. BATNA — лучшая альтернатива обсуждаемому соглашению. Она не равна первоначальному требованию.', 'Если условия совместного мероприятия не подходят, организация может провести собственный семинар. Оценка затрат и результата этой альтернативы помогает понять, какие условия соглашения приемлемы.', 'Опишите цель переговоров, минимально приемлемые условия и одну реальную альтернативу. Укажите, какие сведения об альтернативе нужно проверить.'],
      ['Фиксация договорённостей', 'В конце обсуждения сверяют понимание результата. Договорённость включает действия, сроки и ответственных. Неясные формулировки полезно заменить конкретными, а неподтверждённые вопросы записать отдельно.', 'Вместо «обменяемся материалами позже» стороны фиксируют: координатор первой команды направляет проект программы до пятницы, вторая команда даёт комментарии до вторника.', 'Подготовьте короткое резюме встречи: договорились, ответственные, сроки и открытые вопросы. Проверьте, сможет ли отсутствовавший участник понять следующие шаги.']
    ],
    quiz: [
      ['Что такое интерес в переговорах?', ['Причина, по которой требование важно', 'Любая уступка', 'Только публично заявленная позиция'], 0, 'Интерес объясняет потребность, лежащую за позицией.'],
      ['Что обозначает BATNA?', ['Итоговый протокол', 'Лучшую альтернативу соглашению', 'Первую предложенную цену'], 1, 'Альтернатива помогает оценить приемлемость предлагаемого соглашения.'],
      ['Какая запись лучше фиксирует действие?', ['Обсудить позднее', 'Подумать над материалами', 'Координатор отправляет проект программы до пятницы'], 2, 'У записи есть конкретное действие, ответственный и срок.']
    ] },
  { id: 'protocol', institute: 'diplomacy', title: 'Деловой протокол и коммуникация', description: 'Подготовка встреч, официальная переписка и межкультурное взаимодействие.', duration: '35 мин',
    topics: [
      ['Подготовка официальной встречи', 'Организатор согласует цель, состав участников, формат, время и повестку. Имена, должности и предпочтительный язык проверяют по подтверждённым сведениям. Требования конкретной организации уточняют заранее.', 'Перед встречей координатор сверяет написание имён и порядок выступлений, подтверждает время и направляет повестку. Если нужен перевод, его организацию проверяют отдельно.', 'Составьте проверочный список встречи. Отметьте сведения, которые нужно подтвердить у принимающей стороны, а не определять самостоятельно.'],
      ['Ясная деловая переписка', 'Полезное письмо имеет конкретную тему, понятную цель и ожидаемое действие. Даты и сроки указывают однозначно. Вложения называют в тексте и проверяют перед отправкой.', 'Тема «Согласование программы встречи 12 ноября» яснее, чем «Вопрос». В письме можно попросить прислать замечания к приложенной программе до определённой даты.', 'Напишите приглашение из пяти предложений. Укажите цель, время, место или формат, ожидаемый ответ и контакт для уточнений.'],
      ['Межкультурная внимательность', 'Межкультурное взаимодействие требует проверки предпочтений вместо предположений по национальности. Важно уточнить язык общения, формат обращения и организационные ограничения. Непонимание лучше прояснять нейтральными вопросами.', 'Если участник не реагирует на предложение, это не доказывает согласие или отказ. Можно уточнить: «Правильно ли я понимаю, что вам нужно время для обсуждения с командой?»', 'Подготовьте три нейтральных вопроса, которые помогут уточнить предпочтения и проверить понимание договорённостей.']
    ],
    quiz: [
      ['Как проверить написание имени участника?', ['Угадать по произношению', 'Использовать подтверждённые сведения', 'Заменить имя должностью'], 1, 'Имена и должности нужно сверять, а не угадывать.'],
      ['Что полезно указать в теме письма?', ['Конкретный предмет и дату встречи', 'Только слово «Срочно»', 'Любое приветствие'], 0, 'Конкретная тема помогает понять цель письма.'],
      ['Как лучше разрешить межкультурное непонимание?', ['Сделать вывод по национальности', 'Считать молчание согласием', 'Задать нейтральный уточняющий вопрос'], 2, 'Уточнение проверяет понимание без стереотипов.']
    ] },
  { id: 'public-policy', institute: 'policy', title: 'Разработка государственной политики', description: 'Исследуйте общественные проблемы и сравнивайте варианты решений.', duration: '50 мин',
    topics: [
      ['Определение общественной проблемы', 'Описание проблемы должно показывать нежелательное состояние, затронутые группы и подтверждающие данные. Заранее выбранное решение не следует выдавать за саму проблему. Причины и проявления важно различать.', '«Нужен новый портал» — предложение решения. «Жители тратят много времени на получение услуги» — описание проблемы, которое ещё требует данных о сроках, причинах и группах пользователей.', 'Опишите проблему без упоминания желаемого инструмента. Перечислите данные, которыми нужно подтвердить масштаб, и группы, на которых она влияет.'],
      ['Сравнение вариантов', 'Обычно рассматривают несколько вариантов, включая сохранение текущего подхода. Их сравнивают по результативности, затратам, реализуемости и влиянию на разные группы. Оценки и допущения записывают явно.', 'Для сокращения очередей можно менять график, упрощать процесс или вводить запись. Каждый вариант имеет разные затраты и ограничения доступности. Цифровой вариант требует учёта людей без доступа к интернету.', 'Составьте таблицу из трёх вариантов и четырёх критериев. Не придумывайте суммы: для неизвестных значений укажите необходимый источник данных.'],
      ['Мониторинг и обратная связь', 'После запуска решения отслеживают выполнение и результаты. Количество мероприятий показывает деятельность, но не обязательно улучшение ситуации. Обратная связь помогает находить непредвиденные последствия.', 'Число открытых окон обслуживания не показывает, уменьшилось ли время ожидания. Для этого отдельно измеряют ожидание и проверяют, одинаково ли доступна услуга разным группам.', 'Определите показатель результата и возможное нежелательное последствие. Укажите, как часто получать данные и как учитывать обратную связь пользователей.']
    ],
    quiz: [
      ['Что лучше описывает проблему?', ['Нужно купить новую систему', 'Жители долго ожидают получения услуги', 'Нужно провести презентацию'], 1, 'Проблема описывает нежелательное состояние, а не заранее выбранное решение.'],
      ['Зачем сравнивать несколько вариантов?', ['Чтобы скрыть затраты', 'Чтобы избежать критериев', 'Чтобы выбрать решение с учётом результатов и ограничений'], 2, 'Сравнение делает выбор обоснованным и показывает компромиссы.'],
      ['Какой показатель отражает результат?', ['Время ожидания услуги', 'Число проведённых совещаний', 'Число подготовленных презентаций'], 0, 'Время ожидания напрямую связано с описанной проблемой.']
    ] },
  { id: 'public-services', institute: 'policy', title: 'Качество государственных услуг', description: 'Потребности граждан, доступность услуг и улучшение процессов.', duration: '40 мин',
    topics: [
      ['Путь пользователя', 'Путь пользователя описывает шаги человека от возникновения потребности до получения результата. Изучают не только внутреннюю обработку, но и поиск информации, подготовку документов и получение ответа.', 'Житель ищет описание услуги, выясняет требования, подаёт заявление и ждёт ответ. Повторное предоставление одних и тех же сведений может быть неудобством, которое не видно во внутреннем отчёте.', 'Опишите пять шагов одной услуги. У каждого шага запишите возможную трудность и вопрос, который можно задать пользователю для проверки.'],
      ['Доступность и понятность', 'Доступность включает физические, языковые и цифровые условия. Инструкции должны ясно объяснять, кто может получить услугу, что понадобится и как узнать результат. Проверять понятность полезно с реальными пользователями.', 'Если услуга доступна только через сложную веб-форму, часть граждан может столкнуться с барьером. Организация проверяет альтернативные каналы и возможность помощи при заполнении.', 'Перепишите длинную инструкцию простыми словами. Проверьте, ясно ли из неё, какое действие нужно выполнить первым и где можно получить помощь.'],
      ['Улучшение на основе данных', 'Для улучшения процесса объединяют количественные показатели и качественную обратную связь. Данные о сроках дополняют сведениями о причинах повторных обращений. При работе с данными защищают персональную информацию.', 'Рост повторных обращений может указывать на непонятный ответ, а не только на высокий спрос. Сопоставление обезличенных причин обращений помогает определить, где нужна более ясная инструкция.', 'Выберите одну гипотезу улучшения. Опишите, как проверить её на обезличенных данных и какой результат будет основанием сохранить изменение.']
    ],
    quiz: [
      ['Что включает путь пользователя?', ['Только внутреннюю обработку заявления', 'Только выдачу результата', 'Шаги от поиска информации до получения результата'], 2, 'Путь рассматривается с точки зрения человека на всех этапах.'],
      ['Как проверить понятность инструкции?', ['Попросить пользователей выполнить действие по ней', 'Добавить больше сложных терминов', 'Измерить только длину текста'], 0, 'Наблюдение за выполнением показывает реальные затруднения.'],
      ['Как обращаться с персональными данными при анализе?', ['Публиковать исходные списки', 'Использовать необходимый минимум и обезличивание', 'Отправлять любые данные сторонним сервисам'], 1, 'Нужно защищать данные и не собирать лишние сведения.']
    ] }
];
const storageKey = 'orleu-learning-user-' + window.portalUser.id;
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon = (type = 'book') => {
  const paths = {book:'M3 5h6a4 4 0 0 1 3 2 4 4 0 0 1 3-2h6v14h-6a4 4 0 0 0-3 2 4 4 0 0 0-3-2H3V5Zm9 2v14',building:'M3 10h18L12 3 3 10Zm2 0v10m5-10v10m4-10v10m5-10v10M3 21h18',globe:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-9 9h18M12 3c-5 5-5 13 0 18 5-5 5-13 0-18Z',check:'m5 12 4 4L19 6',arrow:'M4 12h16m-6-6 6 6-6 6',clock:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2',search:'M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm5 12 6 6',target:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z'};
  return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="${paths[type] || paths.book}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
};
const instituteInfo = {
 management:{number:'01',icon:'building',summary:'Практические подходы к стратегии, проектам и организации работы.',color:'blue'},
 diplomacy:{number:'02',icon:'globe',summary:'Переговоры, деловой протокол и международная коммуникация.',color:'teal'},
 policy:{number:'03',icon:'target',summary:'Разработка решений для общества и повышение качества услуг.',color:'amber'}
};
let progress = {}, persistent = true, search = '', route = {}, quizResult = null;
try { progress = window.portalInitialProgress || JSON.parse(localStorage.getItem(storageKey) || '{}'); if(!progress || typeof progress !== 'object' || Array.isArray(progress)) progress = {}; }
catch { progress = window.portalInitialProgress || {}; persistent = false; }
function getState(c) {
 if(!progress[c.id] || typeof progress[c.id] !== 'object' || Array.isArray(progress[c.id])) progress[c.id] = {};
 const s = progress[c.id];
 s.done = [...new Set((Array.isArray(s.done) ? s.done : []).filter(n => Number.isInteger(n) && n >= 0 && n < c.topics.length))];
 s.best = Number.isInteger(s.best) && s.best >= 0 && s.best <= c.quiz.length ? s.best : 0;
 if(!s.answers || typeof s.answers !== 'object' || Array.isArray(s.answers)) s.answers = {};
 return s;
}
function percent(c) { const s = getState(c); return Math.round((s.done.length + (s.best === c.quiz.length ? 1 : 0)) / (c.topics.length + 1) * 100); }
function save() { try{ localStorage.setItem(storageKey,JSON.stringify(progress)); persistent = true; }catch{ persistent = false; }window.portalSaveProgress(progress);updateHeader(); }
function updateHeader() {
 document.getElementById('learning-count').textContent = courses.filter(c => getState(c).started).length;
 document.getElementById('catalog-nav').classList.toggle('active',route.view !== 'learning');
 document.getElementById('learning-nav').classList.toggle('active',route.view === 'learning');
 document.getElementById('storage-status').textContent = persistent ? 'Личная копия прогресса доступна на этом устройстве.' : 'Локальное хранилище недоступно. Прогресс сохраняется в аккаунте при подключении к интернету.';
 document.body.dataset.view = route.view;
 document.getElementById('institute-nav').innerHTML = institutes.map(i=>`<a href="#institute/${i.id}" class="rail-institute ${route.institute === i.id ? 'active' : ''}"><span class="rail-icon">${icon(instituteInfo[i.id].icon)}</span><span>${i.title}<small>2 курса · 6 тем</small></span></a>`).join('');
}
function parseRoute() {
 const parts = location.hash.slice(1).split('/');
 if(parts[0] === 'course') {
  const course = courses.find(c=>c.id === parts[1]);
  if(course) {
   const topic = parts[2] === 'test' ? course.topics.length : Number(parts[2] || 0);
   const page = Number(parts[3] || 0);
   return {view:'course',course,institute:course.institute,topic:Number.isInteger(topic) && topic >= 0 && topic <= course.topics.length ? topic : 0,page:Number.isInteger(page) && page >= 0 && page < 3 ? page : 0};
  }
 }
 if(parts[0] === 'learning') return {view:'learning',institute:'all'};
 const institute = institutes.some(i=>i.id === parts[1]) ? parts[1] : 'management';
 return {view:'catalog',institute};
}
function go(hash) { if(location.hash === hash)render(); else location.hash = hash; }
function startCourse(id) {
 const c = courses.find(c=>c.id === id), s = getState(c); s.started = true;
 let topic = s.last && Number.isInteger(s.last.topic) && s.last.topic >= 0 && s.last.topic <= c.topics.length ? s.last.topic : c.topics.findIndex((_,i)=>!s.done.includes(i));
 if(topic < 0)topic = c.topics.length;
 const page = s.last && Number.isInteger(s.last.page) && s.last.page >= 0 && s.last.page < 3 ? s.last.page : 0;
 save();go(`#course/${id}/${topic === c.topics.length ? 'test' : topic}/${page}`);
}
function card(c,index) {
 const s=getState(c),info=instituteInfo[c.institute], p=percent(c);
 return `<article class="course-card ${info.color}"><div class="course-art"><span class="card-index">КУРС ${String(index+1).padStart(2,'0')}</span><div class="art-shape shape-one"></div><div class="art-shape shape-two"></div><div class="art-icon">${icon(c.id === 'projects' ? 'target' : info.icon)}</div><span class="art-caption">ПРАКТИКА И ЗНАНИЯ</span></div><div class="card-body"><div class="course-level">Базовый уровень <span>Открытый доступ</span></div><h3>${c.title}</h3><p>${c.description}</p><div class="course-details"><span>${icon('book')} 3 темы</span><span>${icon('clock')} ${c.duration}</span><span>${icon('check')} Тесты</span></div><div class="card-progress-label"><span>${s.started ? p === 100 ? 'Курс пройден' : 'Ваш прогресс' : 'Ещё не начат'}</span><strong>${p}%</strong></div><div class="progress-track"><div style="width:${p}%"></div></div><button class="course-open" data-course="${c.id}">${s.started ? p === 100 ? 'Повторить курс' : 'Продолжить обучение' : 'Открыть курс'}${icon('arrow')}</button></div></article>`;
}
function renderCatalog(focusSearch=false) {
 const learning=route.view === 'learning', i=institutes.find(x=>x.id === route.institute), info=i ? instituteInfo[i.id] : null;
 const started=courses.filter(c=>getState(c).started);
 const shown=courses.filter(c=>(learning ? getState(c).started : c.institute === route.institute) && `${c.title} ${c.description}`.toLowerCase().includes(search.toLowerCase()));
 document.getElementById('main').innerHTML=`<div class="breadcrumbs"><a href="#catalog">Учебный портал</a><span>/</span><span>${learning ? 'Моё обучение' : 'Курсы'}</span></div><div class="page-heading"><span class="overline">${learning ? 'ЛИЧНЫЙ ПРОГРЕСС' : 'ВАШ СЛЕДУЮЩИЙ ШАГ'}</span><h1>${learning ? 'Моё обучение' : 'Знания для профессионального роста'}</h1><p>${learning ? 'Продолжайте начатые курсы и следите за результатами.' : 'Выберите институт, изучайте темы и проверяйте себя в тестах.'}</p></div>${learning ? `<div class="learning-stats"><div><strong>${started.length}</strong><span>Курсов начато</span></div><div><strong>${started.filter(c=>percent(c)===100).length}</strong><span>Курсов пройдено</span></div><div><strong>${started.reduce((n,c)=>n+getState(c).done.length,0)}</strong><span>Тем отмечено</span></div></div>` : `<nav class="institute-tabs" aria-label="Вкладки институтов">${institutes.map(x=>`<a href="#institute/${x.id}" data-filter="${x.id}" class="institute-tab ${x.id===route.institute ? 'active' : ''}" ${x.id===route.institute ? 'aria-current="page"' : ''}><span>${icon(instituteInfo[x.id].icon)}</span>${x.title}</a>`).join('')}</nav><section class="institute-banner ${info.color}"><div class="banner-copy"><span class="overline">НАПРАВЛЕНИЕ ${info.number} / 03</span><h2>${i.title}</h2><p>${info.summary}</p><div class="banner-meta"><span>2 курса</span><span>6 тем</span><span>Учитесь в своём темпе</span></div></div><div class="banner-illustration" aria-hidden="true"><div class="illustration-orbit"></div><div class="illustration-orbit second"></div>${icon(info.icon)}<span class="illustration-number">${info.number}</span></div></section>`}<div class="catalog-toolbar"><div><h2>${learning ? 'Ваши курсы' : 'Курсы института'}</h2><span>${shown.length} из ${learning ? started.length : 2}</span></div><label class="search-field">${icon('search')}<input id="course-search" type="search" aria-label="Поиск курсов" placeholder="Поиск по курсам" value="${escapeHtml(search)}"></label></div><div class="course-grid">${shown.length ? shown.map(card).join('') : `<section class="empty-state">${icon('book')}<h2>${learning && !started.length ? 'Первый курс ещё впереди' : 'Ничего не найдено'}</h2><p>${learning && !started.length ? 'Выберите институт и начните обучение. Здесь появятся ваши курсы.' : 'Попробуйте другое название курса.'}</p>${learning && !started.length ? '<a href="#catalog" class="primary">Выбрать курс</a>' : ''}</section>`}</div><section class="how-it-works"><span class="overline">ПРОСТОЙ ПУТЬ К НОВЫМ ЗНАНИЯМ</span><div><p><b>01</b><span><strong>Выберите курс</strong><small>По вашему направлению</small></span></p><p><b>02</b><span><strong>Изучите темы</strong><small>Три страницы в каждой</small></span></p><p><b>03</b><span><strong>Проверьте знания</strong><small>Тесты с объяснениями</small></span></p></div></section>`;
 if(focusSearch)document.getElementById('course-search').focus();
}
function topicNav(c) {
 const s=getState(c);
 return `<aside class="topic-panel"><a class="back-to-courses" href="#institute/${c.institute}">← К курсам института</a><div class="topic-panel-title"><span class="overline">СОДЕРЖАНИЕ КУРСА</span><h2>${c.title}</h2></div><div class="topic-list">${c.topics.map((t,index)=>`<div class="topic-item ${route.topic===index ? 'active' : ''}"><a href="#course/${c.id}/${index}/0" class="topic-link"><span class="topic-number">${String(index+1).padStart(2,'0')}</span><span>${t[0]}<small>3 страницы · тест к теме</small></span></a><label class="topic-status"><input type="checkbox" data-completion="${index}" ${s.done.includes(index)?'checked':''} aria-label="Тема ${index+1}: пройдено"><span>${s.done.includes(index)?'Пройдено':'Не пройдено'}</span></label></div>`).join('')}<a class="final-test-link ${route.topic===c.topics.length ? 'active' : ''}" href="#course/${c.id}/test/0">${icon('check')}<span>Итоговый тест<small>${s.best ? `Лучший результат: ${s.best} из ${c.quiz.length}` : `${c.quiz.length} вопроса`}</small></span></a></div><div class="topic-progress"><span>Общий прогресс<strong>${percent(c)}%</strong></span><div class="progress-track"><div style="width:${percent(c)}%"></div></div><p>${s.done.length} из ${c.topics.length} тем отмечено</p></div><div class="study-tip">${icon('book')}<p>Выбирайте любую тему.<br>Отметки можно изменить.</p></div></aside>`;
}
function questionHtml(q,index,prefix,answer=null,graded=false) {
 return `<fieldset class="question"><legend>${prefix==='final' ? `<span>${index+1} / 3</span>` : ''}${q[0]}</legend>${q[1].map((text,n)=>`<label class="answer-option ${graded ? n===q[2] ? 'correct' : answer===n ? 'wrong' : '' : ''}"><input type="radio" name="${prefix}${index}" value="${n}" ${answer===n?'checked':''}><span class="answer-letter">${String.fromCharCode(65+n)}</span><span>${text}</span>${graded && n===q[2] ? `<b>${icon('check')}</b>` : ''}</label>`).join('')}${graded ? `<div class="answer-explanation ${answer===q[2] ? 'right' : 'incorrect'}" role="status"><strong>${answer===q[2]?'Правильно':'Неправильно'}</strong><p>${q[3]}</p></div>` : ''}</fieldset>`;
}
function renderLesson(c) {
 const t=c.topics[route.topic], s=getState(c), titles=['Основная идея','Пример и разбор','Практика и тест'];
 const lessonAnswer=s.answers[route.topic], hasAnswer=Number.isInteger(lessonAnswer) && lessonAnswer>=0 && lessonAnswer<3;
 const pages=[
  `<p class="lead-paragraph">${t[1]}</p><h3>Зачем это нужно</h3><p>Этот подход помогает рассматривать рабочую ситуацию последовательно: сначала выяснить цель и доступные сведения, затем выбрать действие и определить, как проверить его результат.</p><p>Знание термина само по себе не показывает, что вы умеете применять подход. Во время чтения попробуйте связать основную идею с ситуацией в своей организации.</p><div class="lesson-note"><span>КЛЮЧЕВОЙ ВОПРОС</span><p>Как объяснить «${t[0].toLowerCase()}» коллеге и показать применение на конкретном примере?</p></div><h3>Что вы сделаете в этой теме</h3><ul><li>Разберётесь с основной идеей.</li><li>Рассмотрите практический пример.</li><li>Выполните упражнение и ответите на вопрос к теме.</li></ul>`,
  `<h3>Рабочая ситуация</h3><p class="lead-paragraph">${t[2]}</p><h3>Как разобрать пример</h3><ol class="reading-list"><li><strong>Определите цель.</strong> Какое изменение или решение требуется в описанной ситуации?</li><li><strong>Отделите факты от предположений.</strong> Какие сведения уже есть, а какие нужно уточнить?</li><li><strong>Проверьте действие.</strong> Как предложенный шаг связан с целью и чем подтвердить результат?</li></ol><div class="lesson-note"><span>ПРИМЕНИТЕ К СВОЕЙ РАБОТЕ</span><p>Найдите похожую ситуацию. Какие ограничения есть у вас? Что из примера можно использовать, а что потребует адаптации?</p></div><p>Пример иллюстрирует подход и не заменяет действующие правила вашей организации.</p>`,
  `<h3>Самостоятельное упражнение</h3><p class="lead-paragraph">${t[3]}</p><div class="practice-checklist"><strong>Проверьте свой ответ</strong><p>□ Описана конкретная ситуация.<br>□ Проверенные факты отделены от предположений.<br>□ Предложено действие и способ проверить результат.</p></div><section class="topic-quiz"><span class="overline">КОРОТКАЯ ПРОВЕРКА</span><h3>Тест к теме</h3><form id="topic-quiz-form">${questionHtml(c.quiz[route.topic],route.topic,'topic',hasAnswer?lessonAnswer:null,hasAnswer)}<p class="form-error" id="topic-error" role="alert"></p><button class="secondary" type="submit">${hasAnswer ? 'Проверить ещё раз' : 'Проверить ответ'}</button></form></section>`
 ];
 return `<article class="lesson-paper"><div class="lesson-topline"><span>ТЕМА ${String(route.topic+1).padStart(2,'0')} / 03</span><span class="lesson-badge ${s.done.includes(route.topic)?'done':''}">${s.done.includes(route.topic)?'✓ Пройдено':'Не пройдено'}</span></div><h1>${t[0]}</h1><nav class="page-tabs" aria-label="Страницы темы">${titles.map((title,n)=>`<a href="#course/${c.id}/${route.topic}/${n}" class="${route.page===n?'active':''}" ${route.page===n?'aria-current="page"':''}><span>${n+1}</span>${title}</a>`).join('')}</nav><div class="reading-content"><h2>${titles[route.page]}</h2>${pages[route.page]}</div><div class="page-controls"><a class="secondary ${route.page===0?'disabled':''}" ${route.page===0?'aria-disabled="true"':`href="#course/${c.id}/${route.topic}/${route.page-1}"`}>← Назад</a><span>Страница ${route.page+1} из 3</span>${route.page<2?`<a class="primary" href="#course/${c.id}/${route.topic}/${route.page+1}">Следующая страница →</a>`:`<button class="primary" id="complete-topic">${s.done.includes(route.topic)?'Перейти дальше →':'Тема пройдена ✓'}</button>`}</div></article>`;
}
function renderFinal(c) {
 const s=getState(c),result=quizResult;
 return `<article class="lesson-paper final-paper"><div class="lesson-topline"><span>ЗАВЕРШЕНИЕ КУРСА</span><span class="lesson-badge ${s.best===3?'done':''}">${s.best===3?'✓ Тест пройден':'3 вопроса'}</span></div><h1>Итоговый тест</h1><p class="test-description">По одному вопросу из каждой темы. Выберите один ответ в каждом вопросе. Попытки не ограничены.</p>${result ? `<section class="quiz-result ${result.score===3?'passed':'retry'}" role="status"><div class="result-score">${result.score}<span>/ 3</span></div><div><h2>${result.score===3?'Все ответы верны':'Есть вопросы для повторения'}</h2><p>${result.score===3 ? s.done.length===3?'Все темы отмечены. Курс пройден!':`Тест пройден. Для завершения отметьте оставшиеся темы (${3-s.done.length}).`:'Прочитайте объяснения и вернитесь к нужным темам.'}</p></div></section>`:''}<form id="final-quiz-form">${c.quiz.map((q,n)=>questionHtml(q,n,'final',result?result.answers[n]:null,!!result)).join('')}<p class="form-error" id="final-error" role="alert"></p><div class="test-actions"><button class="primary" type="submit">${result?'Проверить новые ответы':'Проверить ответы'} ${icon('arrow')}</button>${result?'<button class="secondary" id="retry-final" type="button">Начать заново</button>':''}</div></form></article>`;
}
function renderCourse() {
 const c=route.course,s=getState(c);s.started=true;s.last={topic:route.topic,page:route.page};save();
 const i=institutes.find(x=>x.id===c.institute);
 document.getElementById('main').innerHTML=`<div class="breadcrumbs"><a href="#catalog">Курсы</a><span>/</span><a href="#institute/${i.id}">${i.title}</a><span>/</span><span>${c.title}</span></div><div class="reader-layout">${topicNav(c)}<div class="lesson-area">${route.topic===c.topics.length?renderFinal(c):renderLesson(c)}<p class="lesson-disclaimer">Учебные примеры. Адаптируйте материал к требованиям вашей организации.</p></div></div>`;
}
function render() { route=parseRoute();document.title=(route.view==='course' ? route.course.title : route.view==='learning' ? 'Моё обучение' : 'Курсы институтов')+' — Учебный портал';updateHeader();if(route.view==='course')renderCourse();else renderCatalog(); }
window.addEventListener('hashchange',()=>{search='';quizResult=null;render();document.getElementById('main').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});});
const main=document.getElementById('main');
main.addEventListener('input',e=>{if(e.target.id==='course-search'){search=e.target.value;renderCatalog(true);}});
main.addEventListener('change',e=>{if(e.target.matches('[data-completion]')){const s=getState(route.course),n=Number(e.target.dataset.completion);s.done=e.target.checked?[...new Set([...s.done,n])]:s.done.filter(x=>x!==n);save();renderCourse();}});
main.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.course)startCourse(b.dataset.course);else if(b.id==='complete-topic'){const c=route.course,s=getState(c);s.done=[...new Set([...s.done,route.topic])];save();go(`#course/${c.id}/${route.topic+1===c.topics.length?'test':route.topic+1}/0`);}else if(b.id==='retry-final'){quizResult=null;renderCourse();}});
main.addEventListener('submit',e=>{
 if(e.target.id!=='topic-quiz-form' && e.target.id!=='final-quiz-form')return;e.preventDefault();
 const data=new FormData(e.target),c=route.course,s=getState(c);
 if(e.target.id==='topic-quiz-form'){
  const answer=data.get(`topic${route.topic}`);
  if(answer===null){document.getElementById('topic-error').textContent='Выберите один ответ.';return;}
  s.answers[route.topic]=Number(answer);save();renderCourse();document.querySelector('.topic-quiz').scrollIntoView({block:'nearest'});
 }else{
  const answers=c.quiz.map((_,n)=>data.get(`final${n}`));
  if(answers.some(a=>a===null)){document.getElementById('final-error').textContent='Ответьте на все три вопроса.';return;}
  const values=answers.map(Number),score=values.reduce((n,a,index)=>n+(a===c.quiz[index][2]?1:0),0);
  s.best=Math.max(s.best,score);quizResult={score,answers:values};save();renderCourse();document.querySelector('.quiz-result').scrollIntoView({block:'nearest'});
 }
});
const dialog=document.getElementById('help-dialog');
document.getElementById('help-button').addEventListener('click',()=>dialog.showModal());
for(const id of ['close-help','help-done'])document.getElementById(id).addEventListener('click',()=>dialog.close());
render();
