import { faker } from '@faker-js/faker/locale/ar';
import { Parent } from '../models/parent.model.js';
import { seedUser } from '../seeders/user.seeder.js';
import { UserType } from '../enums/user-type.enum.js';
import { Parenthood } from '../models/parenthood.model.js';



/**
 * Seeds fake parents
 *
 * @param {Array<Object>} students The students to associate with the parents
 */
export async function seedParents(students) {
  const parents = [];

  for (const student of students) {
    const parentUser = await seedUser(UserType.Parent);
    const parent = await seedParent(parentUser.id);

    await seedParenthood(parent.id, student.id);
    parents.push(parent);
  }

  return parents;
}

/**
 * @description
 * Seeds a fake parent
 *
 * @param {String} userId The parent's user UUID
 */
async function seedParent(userId) {
  const createdParent = createParent(userId);
  await Parent.create(createdParent);

  return createdParent;
}

/**
 * @description
 * Seeds a fake parenthood
 *
 * @param {String} parentId The parent's UUID
 * @param {String} studentId The student's UUID
 */
async function seedParenthood(parentId, studentId) {
  const createdParenthood = createParenthood(parentId, studentId);
  await Parenthood.create(createdParenthood);

  return createdParenthood;
}

/**
 * @description
 * Creates a fake parent
 *
 * @param {String} userId The parent's user UUID
 */
function createParent(userId) {
  return {
    userId,
    id: faker.string.uuid(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    phone: faker.phone.number('06 ## ## ## ##'),
    cin: `${faker.string.alpha(Math.floor(Math.random() * 2) + 1).toUpperCase()}${100000 + faker.number.int(100000)}`
  };
}

/**
 * @description
 * Associates a student and a parent
 *
 * @param {String} parentId The uuid of the parent
 * @param {String} studentId The uuid of the student
 */
function createParenthood(parentId, studentId) {
  return {
    parentId,
    studentId
  };
}