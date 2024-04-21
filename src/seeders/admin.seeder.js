import { UserType } from '../enums/user-type.enum.js';
import { seedStaticUser, seedUser } from '../seeders/user.seeder.js';



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

  const user = { email: "admin@harvard.edu", password: "123", type: UserType.Admin };
  const admin = await seedStaticUser(user);
  admins.push(admin);

  return admins;
}