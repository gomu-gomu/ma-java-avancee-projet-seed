import { faker } from '@faker-js/faker/locale/ar';

import { createUser } from './user.seeder.js';
import { User } from './../models/user.model.js';
import { Teacher } from './../models/teacher.model.js';
import { UserType } from './../enums/user-type.enum.js';



/**
 * @description
 * Seeds fake teachers
 *
 * @param {Object} subjects The subjects to be associated with the teachers
 */
export async function seedTeachers(subjects) {
  for (const [_, subject] of Object.entries(subjects)) {
    const teacherCount = faker.number.int(2) + 1;
    const range = new Array(teacherCount).fill(0);

    for (const _ of range) {
      const teacherUser = createUser(UserType.Teacher);

      await User.create(teacherUser);
      await seedTeacher(teacherUser.id, subject.id);
    }
  }
}

/**
 * @description
 * Seeds a fake teacher
 *
 * @param {String} userId The teacher's user UUID
 * @param {String} userId The subject's UUID associated with the teacher
 */
async function seedTeacher(userId, subjectId) {
  const createdTeacher = createTeacher(userId, subjectId);
  await Teacher.create(createdTeacher);
}

/**
 * @description
 * Creates a fake teacher
 *
 * @param {String} userId The teacher's user UUID
 * @param {String} userId The subject's UUID associated with the teacher
 */
function createTeacher(userId, subjectId) {
  return {
    userId,
    subjectId,
    id: faker.string.uuid(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    phone: faker.phone.number('06 ## ## ## ##'),
    cin: `${faker.string.alpha(Math.floor(Math.random() * 2) + 1).toUpperCase()}${100000 + faker.number.int(100000)}`
  };
}