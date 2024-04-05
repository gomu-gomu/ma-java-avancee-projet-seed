import { User } from '../models/user.model.js';
import { UserType } from '../enums/user-type.enum.js';
import { createUser } from '../seeders/user.seeder.js';



const MAX_ADMINS = 3;

export async function seedAdmins() {
  await User.sync();

  for (let _ of new Array(MAX_ADMINS).fill(0)) {
    const adminUser = createUser(UserType.Admin);
    await User.create(adminUser);
  }
}