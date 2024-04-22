import config from '../config.json' with { type: "json" };

import { faker } from '@faker-js/faker/locale/ar';

import { seedUser } from './user.seeder.js';
import { Student } from '../models/student.model.js';
import { UserType } from '../enums/user-type.enum.js';
import { StudentExam } from '../models/studentExams.model.js';
import { StudentCycle } from '../models/studentCycles.model.js';



/**
 * Seeds fake students
 *
 * @param {Array<Object>} cycles The cycles to be associated with the fake students
 * @param {Array<Object>} exams The exams to be associated with the fake students
 */
export async function seedStudents(cycles, exams) {
  const students = [];

  for (const cycle of cycles) {
    const gen = { min: config.MIN_STUDENT_PER_CLASS, max: config.MAX_STUDENT_PER_CLASS };
    const studentsPerClass = faker.number.int(gen);
    const range = new Array(studentsPerClass).fill(0);

    for (const _ of range) {
      const studentUser = await seedUser(UserType.Student);
      const student = await seedStudent(studentUser.id);
      await seedStudentCycle(student.id, cycle.id);

      for (const exam of exams.filter(e => e.cycleId === cycle.id)) {
        await seedStudentExam(student.id, exam.id);
      }

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
 * Seeds a fake student cycle association
 *
 * @param {String} studentId The student's UUID
 * @param {String} cycleId The cycle's UUID associated with the student
 */
async function seedStudentCycle(studentId, cycleId) {
  const createdStudentCycle = createStudentCycle(studentId, cycleId);
  await StudentCycle.create(createdStudentCycle);
}

/**
 * @description
 * Seeds a fake student exam association
 *
 * @param {String} studentId The student's UUID
 * @param {String} examId The exam's UUID
 */
async function seedStudentExam(studentId, examId) {
  const createdStudentExam = createStudentExam(studentId, examId);
  await StudentExam.create(createdStudentExam);
}

/**
 * @description
 * Creates a fake student
 *
 * @param {String} userId The student's user UUID
 */
function createStudent(userId) {
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

/**
 * @description
 * Creates a fake student cycle association
 *
 * @param {String} studentId The student's UUID
 * @param {String} cycleId The cycle's UUID associated with the student
 */
function createStudentCycle(studentId, cycleId) {
  return {
    cycleId,
    studentId
  };
}

/**
 * @description
 * Creates a fake student exam association
 *
 * @param {String} studentId The student's UUID
 * @param {String} examId The exam's UUID
 */
function createStudentExam(studentId, examId) {
  const gen = { min: 0, max: 20 };
  const score = faker.number.int(gen);

  return {
    score,
    examId,
    studentId
  };
}