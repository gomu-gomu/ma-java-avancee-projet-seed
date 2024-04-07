import { faker } from '@faker-js/faker';
import { Sector } from '../models/sector.model.js';
import { seedSubjects } from '../seeders/subject.seeder.js';



export async function seedSectors() {
  await seedSubjects();

  // Common
  await seedSector('Générale');

  // Tronc Commun
  await seedSector('Sciences');
  await seedSector('Technologies');
  await seedSector('Lettres et Sciences Humaines'); // 1ére Bac
  
  // 1ére Bac
  await seedSector('Sciences Mathématiques');
  await seedSector('Sciences Expérimentales');
  await seedSector('Sciences Économiques et Gestion');
  await seedSector('Sciences et Technologies Mécaniques'); // 2ére Bac
  await seedSector('Sciences et Technologies Électriques'); // 2ére Bac
  
  // 2ére Bac
  await seedSector('Lettres');
  await seedSector('Sciences Humaines');
  await seedSector('Sciences Physiques');
  await seedSector('Sciences Économiques');
  await seedSector('Sciences Agronomiques');
  await seedSector('Sciences Mathématiques A');
  await seedSector('Sciences Mathématiques B');
  await seedSector('Sciences de Gestion Comptable (SGC)');
  await seedSector('Sciences de la Vie et de la Terre (SVT)');
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