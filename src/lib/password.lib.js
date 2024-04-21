import { hashSync, genSaltSync } from 'bcrypt';

export function hashPassword(password) {
  const salt = genSaltSync(0);
  return hashSync(password, salt);
}