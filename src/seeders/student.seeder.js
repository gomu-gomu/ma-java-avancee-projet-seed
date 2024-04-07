import { faker } from '@faker-js/faker/locale/ar';

import { seedUser } from './user.seeder.js';
import { Student } from '../models/student.model.js';
import { UserType } from '../enums/user-type.enum.js';


const MIN_STUDENT_PER_CLASS = 10;
const MAX_STUDENT_PER_CLASS = 15;

/**
 * Seeds fake students
 *
 * @param {Array<Object>} cycles The cycle's to be associated with the fake students
 */
export async function seedStudents(cycles) {
  const students = [];

  for (const _ of cycles) {
    const gen = { min: MIN_STUDENT_PER_CLASS, max: MAX_STUDENT_PER_CLASS };
    const studentsPerClass = faker.number.int(gen);
    const range = new Array(studentsPerClass).fill(0);

    for (const _ of range) {
      const studentUser = await seedUser(UserType.Student);
      const student = await seedStudent(studentUser.id);

      students.push(student);
    }
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
    cin: `${faker.string.alpha(Math.floor(Math.random() * 2) + 1).toUpperCase()}${1000000 + faker.number.int(1000000)}`
  };
}