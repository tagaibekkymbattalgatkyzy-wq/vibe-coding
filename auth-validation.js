export function validateCredentials(email, password, mode) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return 'Введите корректный email.';
  if (mode === 'register' && password.length < 8) return 'Пароль должен содержать не менее 8 символов.';
  if (!password) return 'Введите пароль.';
  return null;
}

export function authErrorMessage(error) {
  const code = error?.code;
  const message = String(error?.message || '').toLowerCase();
  if (code === 'invalid_credentials' || message.includes('invalid login credentials')) return 'Неверный email или пароль.';
  if (code === 'email_not_confirmed') return 'Подтвердите email по ссылке в письме, затем войдите.';
  if (code === 'over_email_send_rate_limit' || code === 'over_request_rate_limit') return 'Слишком много попыток. Подождите и попробуйте снова.';
  if (code === 'weak_password') return 'Выберите более надёжный пароль: не менее 8 символов.';
  return 'Не удалось выполнить запрос. Проверьте соединение и попробуйте снова.';
}
