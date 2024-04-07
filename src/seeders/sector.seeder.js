import { faker } from '@faker-js/faker';
import { seedGrade } from './grade.seeder.js';
import { Sector } from '../models/sector.model.js';
import { seedSubjects } from './subject.seeder.js';



export async function seedSectors() {
  let sector;

  // Common
  sector = await seedSector('Générale');
  await seedGrade(sector.id, '1ère Année Collège', 7);
  await seedGrade(sector.id, '2ème Année Collège', 8);
  await seedGrade(sector.id, '3ème Année Collège', 9);

  // Tronc Commun
  sector = await seedSector('Sciences');
  await seedGrade(sector.id, 'Tronc Commun', 10);
  sector = await seedSector('Technologies');
  await seedGrade(sector.id, 'Tronc Commun', 10);
  sector = await seedSector('Lettres et Sciences Humaines') // 1ére Bac
  await seedGrade(sector.id, 'Tronc Commun', 10);
  await seedGrade(sector.id, '1ère Bac', 11);

  // 1ére Bac
  sector = await seedSector('Sciences Mathématiques');
  await seedGrade(sector.id, '1ère Bac', 11);
  sector = await seedSector('Sciences Expérimentales');
  await seedGrade(sector.id, '1ère Bac', 11);
  sector = await seedSector('Sciences Économiques et Gestion');
  await seedGrade(sector.id, '1ère Bac', 11);
  sector = await seedSector('Sciences et Technologies Mécaniques');
  await seedGrade(sector.id, '1ère Bac', 11);
  await seedGrade(sector.id, '2ème Bac', 12);
  sector = await seedSector('Sciences et Technologies Électriques');
  await seedGrade(sector.id, '1ère Bac', 11);
  await seedGrade(sector.id, '2ème Bac', 12);

  // 2ére Bac
  sector = await seedSector('Lettres');
  await seedGrade(sector.id, '2ème Bac', 12);
  sector = await seedSector('Sciences Humaines');
  await seedGrade(sector.id, '2ème Bac', 12);
  sector = await seedSector('Sciences Physiques');
  await seedGrade(sector.id, '2ème Bac', 12);
  sector = await seedSector('Sciences Économiques');
  await seedGrade(sector.id, '2ème Bac', 12);
  sector = await seedSector('Sciences Agronomiques');
  await seedGrade(sector.id, '2ème Bac', 12);
  sector = await seedSector('Sciences Mathématiques A');
  await seedGrade(sector.id, '2ème Bac', 12);
  sector = await seedSector('Sciences Mathématiques B');
  await seedGrade(sector.id, '2ème Bac', 12);
  sector = await seedSector('Sciences de Gestion Comptable (SGC)');
  await seedGrade(sector.id, '2ème Bac', 12);
  sector = await seedSector('Sciences de la Vie et de la Terre (SVT)');
  await seedGrade(sector.id, '2ème Bac', 12);

  await seedSubjects(); // TODO: linkup subjects with grades
}

/**
 * @description
 * Seeds a fake sector
 *
 * @param {String} name The name of the sector
 */
async function seedSector(name) {
  const createdSector = createSector(name);
  await Sector.create(createdSector);

  return createdSector;
}

/**
 * @description
 * Creates a fake sector
 *
 * @param {String} name The name of the sector
 */
function createSector(name) {
  return {
    name,
    id: faker.string.uuid()
  };
}