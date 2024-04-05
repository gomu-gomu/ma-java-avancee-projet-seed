import { seedAdmins } from './seeders/admin.seeder.js';
import { seedParents } from './seeders/parent.seeder.js';



function main() {
  console.info('Seeding Student Management database...');

  seedAdmins();
  seedParents();

  console.info('Databased seeded!');
}

if (import.meta.filename === process.argv[1]) {
  main();
}