import { faker } from '@faker-js/faker/locale/ar';



/**
 * @description
 * Creates a fake student
 *
 * @param {String} userId The student's user UUID
 */
export function createStudent(userId) {
  return {
    userId,
    id: faker.string.uuid(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    phone: faker.phone.number('06 ## ## ## ##'),
    cne: `${faker.string.alpha(1).toUpperCase()}${100000000 + faker.number.int(100000000)}`,
    cin: `${faker.string.alpha(Math.floor(Math.random() * 2) + 1).toUpperCase()}${100000 + faker.number.int(100000)}`
  };
}