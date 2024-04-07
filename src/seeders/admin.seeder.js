import { User } from '../models/user.model.js';
import { seedUser } from '../seeders/user.seeder.js';
import { UserType } from '../enums/user-type.enum.js';



const MAX_ADMINS = 4;

/**
 * @description
 * Seeds fake admin accounts
 */
export async function seedAdmins() {
  const admins = [];

  for (let _ of new Array(MAX_ADMINS).fill(0)) {
    const adminUser = await seedUser(UserType.Admin);
    admins.push(adminUser);
  }

  return admins;
}