import { faker } from '@faker-js/faker';
import { Grade } from '../models/grade.model.js';
import { seedLevel } from './class.seeder.js';



/**
 * @description
 * Seeds a fake grade
 *
 * @param {String} sectorId The UUID of the sector that the grade belongs to
 * @param {String} name The name of the grade
 * @param {Number} level The level of the grade
 */
export async function seedGrade(sectorId, name, level) {
  const createdGrade = createGrade(sectorId, name, level);

  await Grade.create(createdGrade);
  await seedLevel(createdGrade.id, getLevelCount(createdGrade.level));
}

/**
 * @description
 * Creates a fake grade
 *
 * @param {String} sectorId The UUID of the sector that the grade belongs to
 * @param {String} name The name of the grade
 * @param {Number} level The level of the grade
 */
function createGrade(sectorId, name, level) {
  return {
    name,
    level,
    sectorId,
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
    default: return 2;
  }
}