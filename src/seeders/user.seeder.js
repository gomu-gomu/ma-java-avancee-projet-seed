import { faker } from '@faker-js/faker';
import { User } from '../models/user.model.js';



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
 * Creates a fake user
 *
 * @param {Number} type The type of the user
 */
function createUser(type) {
  return {
    type,
    id: faker.string.uuid(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}