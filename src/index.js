import { seedAdmins } from './seeders/admin.seeder.js';
import { seedClasses } from './seeders/class.seeder.js';
import { seedParents } from './seeders/parent.seeder.js';
import { seedSubjects } from './seeders/subject.seeder.js';



async function main() {
  console.info('Seeding Student Management database...');

  await seedAdmins();
  await seedParents();
  await seedClasses();
  await seedSubjects();

  console.info('Databased seeded!');
}

if (import.meta.filename === process.argv[1]) {
  main();
}