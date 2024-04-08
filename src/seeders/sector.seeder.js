import { faker } from '@faker-js/faker';
import { Sector } from '../models/sector.model.js';



/**
 * @description
 * Seeds fake sectors
 */
export async function seedSectors() {
  const sectors = {};

  // Common
  sectors.generateSector = await seedSector('Générale');

  // Tronc Commun
  sectors.scienceSector = await seedSector('Sciences');
  sectors.technologySector = await seedSector('Technologies');
  sectors.enseignementOriginelSector = await seedSector('Enseignement Originel');
  sectors.letterAndHumanitarySector = await seedSector('Lettres et Sciences Humaines');
  
  // 1ére Bac
  sectors.arabeSector = await seedSector('Langue Arabe');
  sectors.chariaaSector = await seedSector('Sciences Chariaa');
  sectors.mathsector = await seedSector('Sciences Mathématiques');
  sectors.experimentalSector = await seedSector('Sciences Expérimentales');
  sectors.economicalGestionSector = await seedSector('Sciences Économiques et Gestion');
  sectors.electricTechnologySector = await seedSector('Sciences et Technologies Électriques');
  sectors.mechanicalTechnologySector = await seedSector('Sciences et Technologies Mécaniques');

  // 2ére Bac
  sectors.lettersSector = await seedSector('Lettres');
  sectors.physicsSector = await seedSector('Sciences Physiques');
  sectors.humanitarySector = await seedSector('Sciences Humaines');
  sectors.mathASector = await seedSector('Sciences Mathématiques A');
  sectors.mathBSector = await seedSector('Sciences Mathématiques B');
  sectors.economicalSector = await seedSector('Sciences Économiques');
  sectors.agronomicalSector = await seedSector('Sciences Agronomiques');
  sectors.sgcSector = await seedSector('Sciences de Gestion Comptable (SGC)');
  sectors.svtSector = await seedSector('Sciences de la Vie et de la Terre (SVT)');

  return sectors;
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