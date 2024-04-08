import { faker } from '@faker-js/faker';
import { Exam } from '../models/exam.model.js';


const MIN_EXAMS_PER_SUBJECT = 1;
const MAX_EXAMS_PER_SUBJECT = 2;

/**
 * Seeds fake exams
 *
 * @param {Array<Object>} cycles The cycles to be associated with the fake exams
 * @param {Array<Object>} subjects The subjects to be associated with the fake exams
 */
export async function seedExams(cycles, subjects) {
  const exams = [];

  for (const cycle of cycles) {
    for (const subject of Object.values(subjects)) {
      const gen = { min: MIN_EXAMS_PER_SUBJECT, max: MAX_EXAMS_PER_SUBJECT };
      const examsPerSubject = faker.number.int(gen);
      const range = new Array(examsPerSubject).fill(0).map((_, index) => index + 1);

      for (const num of range) {
        const exam = await seedExam(cycle.id, subject.id, num);
        exams.push(exam);
      }
    }
  }

  return exams;
}

/**
 * @description
 * Seeds a fake exam
 *
 * @param {String} cycleId The cycle's UUID
 * @param {String} subjectId The subject's UUID
 * @param {Number} num The number of the exam
 */
async function seedExam(cycleId, subjectId, num) {
  const createdExam = createExam(cycleId, subjectId, num);
  await Exam.create(createdExam);

  return createdExam;
}

/**
 * @description
 * Creates a fake exam
 *
 * @param {String} cycleId The cycle's UUID
 * @param {String} subjectId The subject's UUID
 * @param {Number} num The number of the exam
 */
function createExam(cycleId, subjectId, num) {
  return {
    cycleId,
    subjectId,
    name: `Côntrole ${num}`,
    id: faker.string.uuid()
  };
}