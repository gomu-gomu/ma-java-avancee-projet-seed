import config from '../config.json' with { type: "json" };

import { UserType } from '../enums/user-type.enum.js';
import { seedStaticUser, seedUser } from '../seeders/user.seeder.js';




/**
 * @description
 * Seeds fake admin accounts
 */
export async function seedAdmins() {
  const admins = [];

  for (let _ of new Array(config.MAX_ADMINS).fill(0)) {
    const adminUser = await seedUser(UserType.Admin);
    admins.push(adminUser);
  }

  const user = { email: "admin@harvard.edu", password: config.DEFAULT_PASSWORD, type: UserType.Admin };
  const admin = await seedStaticUser(user);
  admins.push(admin);

  return admins;
}