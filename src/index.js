import { seedAdmins } from './seeders/admin.seeder.js';
import { seedClasses } from './seeders/class.seeder.js';
import { seedCycles } from './seeders/cycle.seeder.js';
import { seedGrades } from './seeders/grade.seeder.js';
import { seedSectors } from './seeders/sector.seeder.js';
import { seedParents } from './seeders/parent.seeder.js';
import { seedStudents } from './seeders/student.seeder.js';
import { seedSubjects } from './seeders/subject.seeder.js';
import { seedTeachers } from './seeders/teacher.seeder.js';



async function main() {
  console.info('\n🔃 Seeding Database...\n');

  const sectors = await seedSectors();
  const grades = await seedGrades(sectors);
  const subjects = await seedSubjects(grades);
  const classes = await seedClasses(grades);
  const cycles = await seedCycles(classes);

  const admins = await seedAdmins();
  const students = await seedStudents(cycles);
  const teachers = await seedTeachers(subjects, cycles);
  const parents = await seedParents(students);

  console.info('\n✅ Databased seeded!\n');

  console.table({
    cycles: cycles.length,
    admins: admins.length,
    classes: classes.length,
    parents: parents.length,
    students: students.length,
    teachers: teachers.length,
    grades: Object.keys(grades).length,
    sectors: Object.keys(sectors).length,
    subjects: Object.keys(subjects).length
  });
}

if (import.meta.filename === process.argv[1]) {
  main();
}