import { faker } from '@faker-js/faker';
import { Grade } from '../models/grade.model.js';



/**
 * @description
 * Seeds fake grades
 *
 * @param {Object} sectors An object of sectors
 */
export async function seedGrades(sectors) {
  const grades = {};

  // Common
  grades.middleFirst = await seedGrade(sectors.generateSector.id, '1ère Année Collège', 7);
  grades.middleSecond = await seedGrade(sectors.generateSector.id, '2ème Année Collège', 8);
  grades.middleThird = await seedGrade(sectors.generateSector.id, '3ème Année Collège', 9);

  // Tronc Commun
  grades.highFirstScience = await seedGrade(sectors.scienceSector.id, 'Tronc Commun', 10);
  grades.highFirstTechnology = await seedGrade(sectors.technologySector.id, 'Tronc Commun', 10);
  grades.highEnseignementOriginel = await seedGrade(sectors.enseignementOriginelSector.id, 'Tronc Commun', 10);
  grades.highFirstLetterAndHumanitary = await seedGrade(sectors.letterAndHumanitarySector.id, 'Tronc Commun', 10);

  // 1ére Bac
  grades.highSecondMath = await seedGrade(sectors.mathsector.id, '1ère Bac', 11);
  grades.highSecondArabe = await seedGrade(sectors.arabeSector.id, '1ère Bac', 11);
  grades.highSecondChariaa = await seedGrade(sectors.chariaaSector.id, '1ère Bac', 11);
  grades.highSecondExperimental = await seedGrade(sectors.experimentalSector.id, '1ère Bac', 11);
  grades.highSecondEconomical = await seedGrade(sectors.economicalGestionSector.id, '1ère Bac', 11);
  grades.highSecondElectricTechnology = await seedGrade(sectors.electricTechnologySector.id, '1ère Bac', 11);
  grades.highSecondLetterAndHumanitary = await seedGrade(sectors.letterAndHumanitarySector.id, '1ère Bac', 11);
  grades.highSecondMechanicalTechnology = await seedGrade(sectors.mechanicalTechnologySector.id, '1ère Bac', 11);

  // 2ére Bac
  grades.highThirdSGC = await seedGrade(sectors.sgcSector.id, '2ème Bac', 12);
  grades.highThirdSVT = await seedGrade(sectors.svtSector.id, '2ème Bac', 12);
  grades.highThirdMathA = await seedGrade(sectors.mathASector.id, '2ème Bac', 12);
  grades.highThirdMathB = await seedGrade(sectors.mathBSector.id, '2ème Bac', 12);
  grades.highThirdArabe = await seedGrade(sectors.arabeSector.id, '2ème Bac', 12);
  grades.highThirdChariaa = await seedGrade(sectors.chariaaSector.id, '2ème Bac', 12);
  grades.highThirdLetters = await seedGrade(sectors.lettersSector.id, '2ème Bac', 12);
  grades.highThirdPhysics = await seedGrade(sectors.physicsSector.id, '2ème Bac', 12);
  grades.highThirdEconomical = await seedGrade(sectors.economicalSector.id, '2ème Bac', 12);
  grades.highThirdHumanitary = await seedGrade(sectors.humanitarySector.id, '2ème Bac', 12);
  grades.highThirdAgronomical = await seedGrade(sectors.agronomicalSector.id, '2ème Bac', 12);
  grades.highThirdElectricTechnology = await seedGrade(sectors.electricTechnologySector.id, '2ème Bac', 12);
  grades.highThirdMechanicalTechnology = await seedGrade(sectors.mechanicalTechnologySector.id, '2ème Bac', 12);

  return grades;
}

/**
 * @description
 * Seeds a fake grade
 *
 * @param {String} sectorId The UUID of the sector that the grade belongs to
 * @param {String} name The name of the grade
 * @param {Number} level The level of the grade
 */
async function seedGrade(sectorId, name, level) {
  const createdGrade = createGrade(sectorId, name, level);
  await Grade.create(createdGrade);

  return createdGrade;
}

/**
 * @description
 * Creates a fake grade
 *
 * @param {String} sectorId The UUID of the sector that the grade belongs to
 * @param {String} name The name of the grade
 * @param {Number} level The level of the grade
 */
function createGrade(sectorId, name, level) {
  return {
    name,
    level,
    sectorId,
    id: faker.string.uuid()
  };
}