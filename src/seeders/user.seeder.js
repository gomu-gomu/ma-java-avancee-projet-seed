import { faker } from '@faker-js/faker';

import { User } from '../models/user.model.js';
import { hashPassword } from '../lib/password.lib.js';



/**
 * @description
 * Seeds a fake user
 *
 * @param {Number} type The type of the user
 */
export async function seedUser(type) {
  const createdUser = createUser(type);
  await User.create(createdUser);

  return createdUser;
}

/**
 * @description
 * Seeds a controlled fake user
 *
 * @param {Object} user The fake user to create
 */
export async function seedStaticUser(user) {
  const createdUser = {
    type: user.type,
    email: user.email,
    id: faker.string.uuid(),
    password: hashPassword(user.password)
  };

  await User.create(createdUser);
  return createdUser;
}

/**
 * @description
 * Creates a fake user
 *
 * @param {Number} type The type of the user
 */
function createUser(type) {
  return {
    type,
    id: faker.string.uuid(),
    email: faker.internet.email(),
    password: hashPassword(faker.internet.password())
  };
}