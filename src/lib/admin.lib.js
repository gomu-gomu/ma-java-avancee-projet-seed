import { faker } from '@faker-js/faker';
import { UserType } from './user-type.lib.js';
import { User } from './../models/user.model.js';



const MAX_ADMINS = 3;

export async function seedAdmins() {
  console.info(`Seeding ${MAX_ADMINS} admins(s)...`);
  await User.sync();

  for (let _ of new Array(MAX_ADMINS).fill(0)) {
    const admin = createAdmin();
    await User.create(admin);
  }
}


function createAdmin() {
  return {
    type: UserType.Admin,
    id: faker.string.uuid(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    password: faker.internet.password(),
  };
}