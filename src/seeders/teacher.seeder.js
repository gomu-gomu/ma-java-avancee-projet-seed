import { faker } from '@faker-js/faker/locale/ar';

import { seedUser } from './user.seeder.js';
import { Teacher } from './../models/teacher.model.js';
import { UserType } from './../enums/user-type.enum.js';
import { TeacherCycle } from './../models/teacherCycles.model.js';



/**
 * @description
 * Seeds fake teachers
 *
 * @param {Object} subjects The subjects to be associated with the teachers
 * @param {Array<Object>} cycles The cycles to be associated with the teachers
 */
export async function seedTeachers(subjects, cycles) {
  const teachers = [];

  for (const subject of Object.values(subjects)) {
    const teacherUser = await seedUser(UserType.Teacher);
    const teacher = await seedTeacher(teacherUser.id, subject.id);

    teachers.push(teacher);

    for (const cycle of cycles) {
      await seedTeacherCycle(teacher.id, cycle.id);
    }
  }

  return teachers;
}

/**
 * @description
 * Seeds a fake teacher
 *
 * @param {String} userId The teacher's user UUID
 * @param {String} subjectId The subject's UUID associated with the teacher
 */
async function seedTeacher(userId, subjectId) {
  const createdTeacher = createTeacher(userId, subjectId);
  await Teacher.create(createdTeacher);

  return createdTeacher;
}

/**
 * @description
 * Seeds a fake teacher cycle association
 *
 * @param {String} teacherId The teacher's UUID
 * @param {String} cycleId The cycle's UUID associated with the teacher
 */
async function seedTeacherCycle(teacherId, cycleId) {
  const createdTeacherCycle = createTeacherCycle(teacherId, cycleId);
  await TeacherCycle.create(createdTeacherCycle);
}

/**
 * @description
 * Creates a fake teacher
 *
 * @param {String} userId The teacher's user UUID
 * @param {String} subjectId The subject's UUID associated with the teacher
 */
function createTeacher(userId, subjectId) {
  return {
    userId,
    subjectId,
    id: faker.string.uuid(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    phone: faker.phone.number('06 ## ## ## ##'),
    cin: `${faker.string.alpha(Math.floor(Math.random() * 2) + 1).toUpperCase()}${1000000 + faker.number.int(1000000)}`
  };
}

/**
 * @description
 * Creates a fake teacher cycle association
 *
 * @param {String} teacherId The teacher's UUID
 * @param {String} cycleId The cycle's UUID associated with the teacher
 */
function createTeacherCycle(teacherId, cycleId) {
  return {
    cycleId,
    teacherId
  };
}