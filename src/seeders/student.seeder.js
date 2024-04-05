import { faker } from "@faker-js/faker";

/**
 * @description
 * Creates a fake student
 *
 * @param {String} userId The student's user UUID
 */
export function createStudent(userId) {
  const randChar = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);

  return {
    userId,
    id: faker.string.uuid(),
    cne: `${randChar()}${Math.floor(100000000 + Math.random() * 100000000)}`,
    cin: `${randChar()}${randChar()}${Math.floor(100000 + Math.random() * 100000)}`
  };
}