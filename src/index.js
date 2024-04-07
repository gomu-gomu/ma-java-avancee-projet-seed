import { seedAdmins } from './seeders/admin.seeder.js';
import { seedParents } from './seeders/parent.seeder.js';
import { seedSectors } from './seeders/sector.seeder.js';



async function main() {
  console.info('Seeding Student Management database...');

  await seedSectors();

  await seedAdmins();
  await seedParents();

  console.info('Databased seeded!');
}

if (import.meta.filename === process.argv[1]) {
  main();
}