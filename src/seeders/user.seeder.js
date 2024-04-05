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
    phone: faker.phone.number(),
    email: faker.internet.email(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    password: faker.internet.password(),
  };
}