import { faker } from '@faker-js/faker';
import { Class } from '../models/class.model.js';



/**
 * @description
 * Seeds a collection of classes for a grade
 *
 * @param {String} gradeId The UUID of the grade that the class belongs to
 * @param {Number} count The number of classes to seed
 */
export async function seedLevel(gradeId, count) {
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