import test from 'node:test';
import assert from 'node:assert/strict';
import { validateCredentials, authErrorMessage } from '../auth-validation.js';

test('registration rejects malformed email and weak passwords', () => {
  assert.ok(validateCredentials('invalid', 'strong-password', 'register'));
  assert.ok(validateCredentials('person@example.com', 'short', 'register'));
  assert.equal(validateCredentials('person@example.com', 'strong-password', 'register'), null);
});

test('login preserves existing passwords without applying signup rules', () => {
  assert.equal(validateCredentials('person@example.com', 'old', 'login'), null);
  assert.ok(validateCredentials('person@example.com', '', 'login'));
});

test('credential errors are specific and unknown server details stay private', () => {
  assert.match(authErrorMessage({code:'invalid_credentials'}), /Неверный email/);
  assert.match(authErrorMessage({code:'email_not_confirmed'}), /Подтвердите email/);
  assert.match(authErrorMessage({code:'over_request_rate_limit'}), /Слишком много/);
  assert.ok(!authErrorMessage({message:'private database detail'}).includes('private'));
});
