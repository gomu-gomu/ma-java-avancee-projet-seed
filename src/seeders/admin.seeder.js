import { User } from '../models/user.model.js';
import { UserType } from '../enums/user-type.enum.js';
import { createUser } from '../seeders/user.seeder.js';



const MAX_ADMINS = 4;

/**
 * @description
 * Seeds fake admin accounts
 */
export async function seedAdmins() {
  const admins = [];

  for (let _ of new Array(MAX_ADMINS).fill(0)) {
    const adminUser = createUser(UserType.Admin);
    await User.create(adminUser);

    admins.push(adminUser);
  }

  return admins;
}