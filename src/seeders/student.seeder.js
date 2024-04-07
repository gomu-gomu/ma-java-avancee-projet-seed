import { faker } from '@faker-js/faker/locale/ar';

import { seedUser } from './user.seeder.js';
import { Student } from '../models/student.model.js';
import { UserType } from '../enums/user-type.enum.js';



/**
 * Seeds fake students
 *
 * @param {Array<Object>} cycles The cycle's to be associated with the fake students
 */
export async function seedStudents(cycles) {
  const students = [];

  for (const cycle of cycles) {
    const studentUser = await seedUser(UserType.Student);
    const student = await seedStudent(studentUser.id);

    students.push(student);
  }

  return students;
}

/**
 * @description
 * Seeds a fake student
 *
 * @param {String} userId The student's user UUID
 */
async function seedStudent(userId) {
  const createdStudent = createStudent(userId);
  await Student.create(createdStudent);

  return createdStudent;
}

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