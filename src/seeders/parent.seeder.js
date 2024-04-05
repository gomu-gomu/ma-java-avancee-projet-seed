import { faker } from '@faker-js/faker';

import { UserType } from '../enums/user-type.enum.js';

import { User } from '../models/user.model.js';
import { Student } from '../models/student.model.js';
import { Parenthood } from '../models/parenthood.model.js';

import { createStudent } from './student.seeder.js';
import { createUser } from '../seeders/user.seeder.js';



const MAX_PARENTS = 25;

export async function seedParents() {
  for (let _ of new Array(MAX_PARENTS).fill(0)) {
    const parentUser = createUser(UserType.Parent);
    await User.create(parentUser);

    // Associate students
    const studentUser = createUser(UserType.Student);
    const student = createStudent(studentUser.id);
    const parenthood = createParenthood(parentUser.id, student.id);

    await User.create(studentUser);
    await Student.create(student);
    await Parenthood.create(parenthood);
  }
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
    studentId,
    id: faker.string.uuid()
  };
}