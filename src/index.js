import { seedAdmins } from './seeders/admin.seeder.js';
import { seedGrades } from './seeders/grade.seeder.js';
import { seedParents } from './seeders/parent.seeder.js';
import { seedSectors } from './seeders/sector.seeder.js';
import { seedSubjects } from './seeders/subject.seeder.js';



async function main() {
  console.info('Seeding Student Management database...');

  const sectors = await seedSectors();
  const grades = await seedGrades(sectors);
  await seedSubjects(grades);

  await seedAdmins();
  await seedParents();

  console.info('Databased seeded!');
}

if (import.meta.filename === process.argv[1]) {
  main();
}