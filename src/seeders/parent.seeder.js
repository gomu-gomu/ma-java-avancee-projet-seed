import { faker } from '@faker-js/faker/locale/ar';

import { UserType } from '../enums/user-type.enum.js';

import { User } from '../models/user.model.js';
import { Student } from '../models/student.model.js';
import { Parenthood } from '../models/parenthood.model.js';

import { Parent } from '../models/parent.model.js';
import { createStudent } from './student.seeder.js';
import { createUser } from '../seeders/user.seeder.js';



const MAX_PARENTS = 25;

export async function seedParents() {
  for (let _ of new Array(MAX_PARENTS).fill(0)) {
    const parentUser = createUser(UserType.Parent);
    await User.create(parentUser);
    
    const parent = createParent(parentUser.id);
    await Parent.create(parent);

    const studentUser = createUser(UserType.Student);
    await User.create(studentUser);

    const student = createStudent(studentUser.id);
    await Student.create(student);

    const parenthood = createParenthood(parent.id, student.id);
    await Parenthood.create(parenthood);
  }
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