import { faker } from '@faker-js/faker';



/**
 * @description
 * Creates a fake user
 *
 * @param {Number} type The type of the user
 */
export function createUser(type) {
  return {
    type,
    id: faker.string.uuid(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}