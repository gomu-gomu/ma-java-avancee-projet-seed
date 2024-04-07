import { seedAdmins } from './seeders/admin.seeder.js';
import { seedClasses } from './seeders/class.seeder.js';
import { seedCycles } from './seeders/cycle.seeder.js';
import { seedGrades } from './seeders/grade.seeder.js';
import { seedParents } from './seeders/parent.seeder.js';
import { seedSectors } from './seeders/sector.seeder.js';
import { seedSubjects } from './seeders/subject.seeder.js';
import { seedTeachers } from './seeders/teacher.seeder.js';



async function main() {
  console.info('Seeding Student Management database...');

  const sectors = await seedSectors();
  const grades = await seedGrades(sectors);
  const subjects = await seedSubjects(grades);
  const classes = await seedClasses(grades);
  const cycles = await seedCycles(classes);

  const admins = await seedAdmins();
  await seedParents();
  const teachers = await seedTeachers(subjects, cycles);

  console.info('Databased seeded!');

  console.table({
    cycles: cycles.length,
    admins: admins.length,
    classes: classes.length,
    teachers: teachers.length,
    grades: Object.keys(grades).length,
    sectors: Object.keys(sectors).length,
    subjects: Object.keys(subjects).length
  });
}

if (import.meta.filename === process.argv[1]) {
  main();
}