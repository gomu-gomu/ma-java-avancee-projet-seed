import { faker } from '@faker-js/faker';
import { Subject } from '../models/subject.model.js';



export async function seedSubjects() {
  // 7
  await seedSubject('Arabe');
  await seedSubject('Anglais');
  await seedSubject('Français');
  await seedSubject('Informatique');
  await seedSubject('Mathématiques');
  await seedSubject('Physique et Chimie');
  await seedSubject('Histoire Géographie');
  await seedSubject('Education Islamique');
  await seedSubject('Sciences de la Vie et de la Terre (SVT)');
  
  // 8
  await seedSubject('Technologie Industrielle');

  // 10
  // 11
  // 12
}

/**
 * @description
 * Seeds a fake subect
 *
 * @param {String} name The name of the subject
 */
async function seedSubject(name) {
  const createdSubject = createSubject(name);
  await Subject.create(createdSubject);
}

/**
 * @description
 * Creates a fake subject
 *
 * @param {String} name The name of the subject
 */
function createSubject(name, level) {
  return {
    name,
    id: faker.string.uuid()
  };
}