import { faker } from '@faker-js/faker';
import { Cycle } from '../models/cycle.model.js';



const MAX_YEARS = 2;
const START_YEAR = 2020;

/**
 * @description
 * Seeds fake cycles
 *
 * @param {Object} classes The classes to be associated with the cycles
 */
export async function seedCycles(classes) {
  const cycles = [];
  const endYear = START_YEAR + MAX_YEARS;

  let year = START_YEAR;
  while (year < endYear) {
    for (const _class of Object.values(classes)) {
      const cycle = await seedCycle(_class.id, year);
      cycles.push(cycle);
    }

    ++year;
  }

  return cycles;
}

/**
 * @description
 * Seeds a fake teacher
 *
*  @param {String} classId The class's user UUID
 * @param {Number} year The year of the cycle
 */
async function seedCycle(classId, year) {
  const createdCycle = createCycle(classId, year);
  await Cycle.create(createdCycle);

  return createdCycle;
}

/**
 * @description
 * Creates a fake teacher
 *
 * @param {String} classId The class's user UUID
 * @param {Number} year The year of the cycle
 */
function createCycle(classId, year) {
  return {
    year,
    classId,
    id: faker.string.uuid()
  };
}