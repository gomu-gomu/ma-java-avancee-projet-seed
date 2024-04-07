import { faker } from '@faker-js/faker';
import { Grade } from '../models/grade.model.js';
import { seedLevel } from './class.seeder.js';



export async function seedGrades() {
  await seedGrade('1ère Année Collège', 7);
  await seedGrade('2ème Année Collège', 8);
  await seedGrade('3ème Année Collège', 9);
  await seedGrade('Tronc Commun', 10);
  await seedGrade('1ère Bac', 11);
  await seedGrade('2ème Bac', 12);
}

/**
 * @description
 * Seeds a fake grade
 *
 * @param {String} name The name of the grade
 * @param {Number} level The level of the grade
 */
async function seedGrade(name, level) {
  const createdGrade = createGrade(name, level);

  await Grade.create(createdGrade);
  await seedLevel(createdGrade.id, getLevelCount(createdGrade.level));
}

/**
 * @description
 * Creates a fake grade
 *
 * @param {String} name The name of the grade
 * @param {Number} level The level of the grade
 */
function createGrade(name, level) {
  return {
    name,
    level,
    id: faker.string.uuid()
  };
}

/**
 * @description
 * Returns the apprepriate number of classes to generate for a given grade
 *
 * @param {Number} level The level of the grade
 */
function getLevelCount(level) {
  switch (level) {
    case 7: return 8;
    case 8: return 6;
    case 9: return 5;
    default: return 4;
  }
}