import { faker } from '@faker-js/faker';
import { Class } from '../models/class.model.js';



export async function seedClasses() {

  // Middle-school
  await seedLevel(7, 8);
  await seedLevel(8, 6);
  await seedLevel(9, 5);
  
  // High-school
  await seedLevel(10, 4);
  await seedLevel(11, 4);
  await seedLevel(12, 4);
}

/**
 * @description
 * Seeds a collection of class levels
 *
 * @param {Number} level The class level to seed
 * @param {Number} count The number of classes to seed
 */
async function seedLevel(level, count) {
  const start = 65;
  const range = new Array(count).fill(start);

  for (let i = 0; i < range.length; ++i) {
    const char = String.fromCharCode(start + i);
    await seedClass(`Class ${char}`, level);
  }
}

/**
 * @description
 * Creates a fake class
 *
 * @param {String} name The name of the class
 * @param {Number} level The schooling level of the class
 */
async function seedClass(name, level) {
  const createdClass = createClass(name, level);
  await Class.create(createdClass);
}

/**
 * @description
 * Creates a fake class
 *
 * @param {String} name The name of the class
 * @param {Number} level The schooling level of the class
 */
function createClass(name, level) {
  return {
    name,
    level,
    id: faker.string.uuid()
  };
}