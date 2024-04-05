import { seedAdmins } from './lib/admin.lib.js';



function main() {
  console.info('Seeding Student Management database...');

  seedAdmins();

  console.info('Databased seeded!');
}

if (import.meta.filename === process.argv[1]) {
  main();
}