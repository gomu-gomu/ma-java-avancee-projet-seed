import { faker } from '@faker-js/faker';
import { Class } from '../models/class.model.js';



/**
 * @description
 * Seeds fake classes
 *
 * @param {Object} grades The grades to seed the classes for
 */
export async function seedClasses(grades) {
  for (const grade of Object.values(grades)) {
    await seedLevel(grade.id, getLevelCount(grade.level));
  }
}

/**
 * @description
 * Seeds a collection of classes for a grade
 *
 * @param {String} gradeId The UUID of the grade that the class belongs to
 * @param {Number} count The number of classes to seed
 */
async function seedLevel(gradeId, count) {
  const start = 65;
  const range = new Array(count).fill(start);

  for (let i = 0; i < range.length; ++i) {
    const char = String.fromCharCode(start + i);
    await seedClass(gradeId, `Class ${char}`);
  }
}

/**
 * @description
 * Seeds a fake class
 *
 * @param {String} gradeId The UUID of the grade that the class belongs to
 * @param {String} name The name of the class
 */
async function seedClass(gradeId, name) {
  const createdClass = createClass(gradeId, name);
  await Class.create(createdClass);
}

/**
 * @description
 * Creates a fake class
 *
 * @param {String} gradeId The UUID of the grade that the class belongs to
 * @param {String} name The name of the class
 */
function createClass(gradeId, name) {
  return {
    name,
    gradeId,
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
    case 11:
    case 12: return 1;
    default: return 2;
  }
}