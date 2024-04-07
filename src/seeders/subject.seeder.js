import { faker } from '@faker-js/faker';
import { Subject } from '../models/subject.model.js';
import { GradeSubject } from '../models/gradeSubject.model.js';



/**
 * @description
 * Seeds fake subjects
 *
 * @param {Object} grades The grades to associate with the subjects
 */
export async function seedSubjects(grades) {

  const lawSubject = await seedSubject('Droit');
  const arabicSubject = await seedSubject('Arabe');
  const englishSubject = await seedSubject('Anglais');
  const frenchSubject = await seedSubject('Français');
  const mathSubject = await seedSubject('Mathématiques');
  const philosophySubject = await seedSubject('Philosophie');
  const informatiqueSubject = await seedSubject('Informatique');
  const engineeringSubject = await seedSubject('Sciences de l\'ingénieur');
  const physicsAndChimiqueSubject = await seedSubject('Physique et Chimie');
  const geographicHistorySubject = await seedSubject('Histoire Géographie');
  const educationIslamiqueSubject = await seedSubject('Education Islamique');
  const industrialtechnology = await seedSubject('Technologie Industrielle');
  const svaSubject = await seedSubject('Sciences Végétales et Animales (SVA)');
  const svtSubject = await seedSubject('Sciences de la Vie et de la Terre (SVT)');
  const informatiqueGestionSubject = await seedSubject('Informatique de gestion');
  const economicalStatisticsSubject = await seedSubject('Économie générale et Statistiques');
  const accountingAndFinancialMathSubject = await seedSubject('Comptabilité et Mathématiques Financières');
  const enterpriseAndAdministrativeEconomySubject = await seedSubject('Économie et Organisation Administrative des Entreprises');

  // #region 1ère Année Collège
  await seedGradeSubject(grades.middleFirst.id, svtSubject.id, 1);
  await seedGradeSubject(grades.middleFirst.id, mathSubject.id, 1);
  await seedGradeSubject(grades.middleFirst.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.middleFirst.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.middleFirst.id, englishSubject.id, 1);
  await seedGradeSubject(grades.middleFirst.id, informatiqueSubject.id, 1);
  await seedGradeSubject(grades.middleFirst.id, physicsAndChimiqueSubject.id, 1);
  await seedGradeSubject(grades.middleFirst.id, geographicHistorySubject.id, 1);
  await seedGradeSubject(grades.middleFirst.id, educationIslamiqueSubject.id, 1);
  // #endregion

  // #region 2ème Année Collège
  await seedGradeSubject(grades.middleSecond.id, svtSubject.id, 1);
  await seedGradeSubject(grades.middleSecond.id, mathSubject.id, 1);
  await seedGradeSubject(grades.middleSecond.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.middleSecond.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.middleSecond.id, englishSubject.id, 1);
  await seedGradeSubject(grades.middleSecond.id, informatiqueSubject.id, 1);
  await seedGradeSubject(grades.middleSecond.id, industrialtechnology.id, 1);
  await seedGradeSubject(grades.middleSecond.id, physicsAndChimiqueSubject.id, 1);
  await seedGradeSubject(grades.middleSecond.id, geographicHistorySubject.id, 1);
  await seedGradeSubject(grades.middleSecond.id, educationIslamiqueSubject.id, 1);
  // #endregion

  // #region 3ème Année Collège
  await seedGradeSubject(grades.middleThird.id, svtSubject.id, 1);
  await seedGradeSubject(grades.middleThird.id, mathSubject.id, 1);
  await seedGradeSubject(grades.middleThird.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.middleThird.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.middleThird.id, englishSubject.id, 1);
  await seedGradeSubject(grades.middleThird.id, informatiqueSubject.id, 1);
  await seedGradeSubject(grades.middleThird.id, industrialtechnology.id, 1);
  await seedGradeSubject(grades.middleThird.id, physicsAndChimiqueSubject.id, 1);
  await seedGradeSubject(grades.middleThird.id, geographicHistorySubject.id, 1);
  await seedGradeSubject(grades.middleThird.id, educationIslamiqueSubject.id, 1);
  // #endregion

  // #region Tronc Commun
  await seedGradeSubject(grades.highFirstScience.id, svtSubject.id, 2);
  await seedGradeSubject(grades.highFirstScience.id, mathSubject.id, 2);
  await seedGradeSubject(grades.highFirstScience.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highFirstScience.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highFirstScience.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highFirstScience.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highFirstScience.id, informatiqueSubject.id, 1);
  await seedGradeSubject(grades.highFirstScience.id, geographicHistorySubject.id, 1);
  await seedGradeSubject(grades.highFirstScience.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highFirstScience.id, physicsAndChimiqueSubject.id, 2);
  
  await seedGradeSubject(grades.highFirstTechnology.id, mathSubject.id, 2);
  await seedGradeSubject(grades.highFirstTechnology.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highFirstTechnology.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highFirstTechnology.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highFirstTechnology.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highFirstTechnology.id, engineeringSubject.id, 2);
  await seedGradeSubject(grades.highFirstTechnology.id, informatiqueSubject.id, 1);
  await seedGradeSubject(grades.highFirstTechnology.id, geographicHistorySubject.id, 1);
  await seedGradeSubject(grades.highFirstTechnology.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highFirstTechnology.id, physicsAndChimiqueSubject.id, 2);
  
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, svtSubject.id, 1);
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, mathSubject.id, 1);
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, frenchSubject.id, 2);
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, arabicSubject.id, 2);
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, englishSubject.id, 2);
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, philosophySubject.id, 2);
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, geographicHistorySubject.id, 2);
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, educationIslamiqueSubject.id, 2);
  // #endregion

  // #region 1ére Bac
  await seedGradeSubject(grades.highSecondMath.id, svtSubject.id, 2);
  await seedGradeSubject(grades.highSecondMath.id, mathSubject.id, 3);
  await seedGradeSubject(grades.highSecondMath.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highSecondMath.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highSecondMath.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highSecondMath.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highSecondMath.id, geographicHistorySubject.id, 1);
  await seedGradeSubject(grades.highSecondMath.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highSecondMath.id, physicsAndChimiqueSubject.id, 2);
  
  await seedGradeSubject(grades.highSecondExperimental.id, svtSubject.id, 3);
  await seedGradeSubject(grades.highSecondExperimental.id, mathSubject.id, 2);
  await seedGradeSubject(grades.highSecondExperimental.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highSecondExperimental.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highSecondExperimental.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highSecondExperimental.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highSecondExperimental.id, geographicHistorySubject.id, 1);
  await seedGradeSubject(grades.highSecondExperimental.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highSecondExperimental.id, physicsAndChimiqueSubject.id, 2);

  await seedGradeSubject(grades.highSecondElectricTechnology.id, mathSubject.id, 2);
  await seedGradeSubject(grades.highSecondElectricTechnology.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highSecondElectricTechnology.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highSecondElectricTechnology.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highSecondElectricTechnology.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highSecondElectricTechnology.id, engineeringSubject.id, 3);
  await seedGradeSubject(grades.highSecondElectricTechnology.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highSecondElectricTechnology.id, physicsAndChimiqueSubject.id, 2);

  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, mathSubject.id, 2);
  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, engineeringSubject.id, 3);
  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, physicsAndChimiqueSubject.id, 2);

  await seedGradeSubject(grades.highSecondEconomical.id, lawSubject.id, 1);
  await seedGradeSubject(grades.highSecondEconomical.id, mathSubject.id, 2);
  await seedGradeSubject(grades.highSecondEconomical.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highSecondEconomical.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highSecondEconomical.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highSecondEconomical.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highSecondEconomical.id, geographicHistorySubject.id, 1);
  await seedGradeSubject(grades.highSecondEconomical.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highSecondEconomical.id, informatiqueGestionSubject.id, 1);
  await seedGradeSubject(grades.highSecondEconomical.id, economicalStatisticsSubject.id, 2);
  await seedGradeSubject(grades.highSecondEconomical.id, accountingAndFinancialMathSubject.id, 2);
  await seedGradeSubject(grades.highSecondEconomical.id, enterpriseAndAdministrativeEconomySubject.id, 2);

  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, svtSubject.id, 1);
  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, mathSubject.id, 1);
  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, arabicSubject.id, 3);
  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, frenchSubject.id, 3);
  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, englishSubject.id, 2);
  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, philosophySubject.id, 2);
  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, geographicHistorySubject.id, 2);
  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, educationIslamiqueSubject.id, 2);
  // #endregion

  // #region 2ére Bac
  await seedGradeSubject(grades.highThirdMathA.id, svtSubject.id, 2);
  await seedGradeSubject(grades.highThirdMathA.id, mathSubject.id, 4);
  await seedGradeSubject(grades.highThirdMathA.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highThirdMathA.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highThirdMathA.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highThirdMathA.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highThirdMathA.id, physicsAndChimiqueSubject.id, 2);
  await seedGradeSubject(grades.highThirdMathA.id, educationIslamiqueSubject.id, 1);

  await seedGradeSubject(grades.highThirdMathB.id, mathSubject.id, 3);
  await seedGradeSubject(grades.highThirdMathB.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highThirdMathB.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highThirdMathB.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highThirdMathB.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highThirdMathB.id, engineeringSubject.id, 4);
  await seedGradeSubject(grades.highThirdMathB.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highThirdMathB.id, physicsAndChimiqueSubject.id, 3);

  await seedGradeSubject(grades.highThirdPhysics.id, svtSubject.id, 2);
  await seedGradeSubject(grades.highThirdPhysics.id, mathSubject.id, 3);
  await seedGradeSubject(grades.highThirdPhysics.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highThirdPhysics.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highThirdPhysics.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highThirdPhysics.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highThirdPhysics.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highThirdPhysics.id, physicsAndChimiqueSubject.id, 4);
  
  await seedGradeSubject(grades.highThirdSVT.id, svtSubject.id, 4);
  await seedGradeSubject(grades.highThirdSVT.id, mathSubject.id, 2);
  await seedGradeSubject(grades.highThirdSVT.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highThirdSVT.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highThirdSVT.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highThirdSVT.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highThirdSVT.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highThirdSVT.id, physicsAndChimiqueSubject.id, 2);
  
  await seedGradeSubject(grades.highThirdAgronomical.id, svaSubject.id, 4);
  await seedGradeSubject(grades.highThirdAgronomical.id, svtSubject.id, 4);
  await seedGradeSubject(grades.highThirdAgronomical.id, mathSubject.id, 2);
  await seedGradeSubject(grades.highThirdAgronomical.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highThirdAgronomical.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highThirdAgronomical.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highThirdAgronomical.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highThirdAgronomical.id, geographicHistorySubject.id, 1);
  await seedGradeSubject(grades.highThirdAgronomical.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highThirdAgronomical.id, physicsAndChimiqueSubject.id, 2);

  await seedGradeSubject(grades.highThirdElectricTechnology.id, mathSubject.id, 3);
  await seedGradeSubject(grades.highThirdElectricTechnology.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highThirdElectricTechnology.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highThirdElectricTechnology.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highThirdElectricTechnology.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highThirdElectricTechnology.id, engineeringSubject.id, 4);
  await seedGradeSubject(grades.highThirdElectricTechnology.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highThirdElectricTechnology.id, physicsAndChimiqueSubject.id, 3);

  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, mathSubject.id, 3);
  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, engineeringSubject.id, 4);
  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, physicsAndChimiqueSubject.id, 3);

  await seedGradeSubject(grades.highThirdEconomical.id, lawSubject.id, 2);
  await seedGradeSubject(grades.highThirdEconomical.id, mathSubject.id, 2);
  await seedGradeSubject(grades.highThirdEconomical.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highThirdEconomical.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highThirdEconomical.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highThirdEconomical.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highThirdEconomical.id, geographicHistorySubject.id, 2);
  await seedGradeSubject(grades.highThirdEconomical.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highThirdEconomical.id, informatiqueGestionSubject.id, 1);
  await seedGradeSubject(grades.highThirdEconomical.id, economicalStatisticsSubject.id, 3);
  await seedGradeSubject(grades.highThirdEconomical.id, accountingAndFinancialMathSubject.id, 3);
  await seedGradeSubject(grades.highThirdEconomical.id, enterpriseAndAdministrativeEconomySubject.id, 4);
  
  await seedGradeSubject(grades.highThirdSGC.id, lawSubject.id, 2);
  await seedGradeSubject(grades.highThirdSGC.id, mathSubject.id, 2);
  await seedGradeSubject(grades.highThirdSGC.id, arabicSubject.id, 1);
  await seedGradeSubject(grades.highThirdSGC.id, frenchSubject.id, 1);
  await seedGradeSubject(grades.highThirdSGC.id, englishSubject.id, 1);
  await seedGradeSubject(grades.highThirdSGC.id, philosophySubject.id, 1);
  await seedGradeSubject(grades.highThirdSGC.id, geographicHistorySubject.id, 2);
  await seedGradeSubject(grades.highThirdSGC.id, educationIslamiqueSubject.id, 1);
  await seedGradeSubject(grades.highThirdSGC.id, informatiqueGestionSubject.id, 2);
  await seedGradeSubject(grades.highThirdSGC.id, economicalStatisticsSubject.id, 3);
  await seedGradeSubject(grades.highThirdSGC.id, accountingAndFinancialMathSubject.id, 4);
  await seedGradeSubject(grades.highThirdSGC.id, enterpriseAndAdministrativeEconomySubject.id, 3);
  
  await seedGradeSubject(grades.highThirdLetters.id, mathSubject.id, 1);
  await seedGradeSubject(grades.highThirdLetters.id, arabicSubject.id, 4);
  await seedGradeSubject(grades.highThirdLetters.id, frenchSubject.id, 4);
  await seedGradeSubject(grades.highThirdLetters.id, englishSubject.id, 3);
  await seedGradeSubject(grades.highThirdLetters.id, philosophySubject.id, 3);
  await seedGradeSubject(grades.highThirdLetters.id, geographicHistorySubject.id, 2);
  await seedGradeSubject(grades.highThirdLetters.id, educationIslamiqueSubject.id, 3);

  await seedGradeSubject(grades.highThirdHumanitary.id, mathSubject.id, 1);
  await seedGradeSubject(grades.highThirdHumanitary.id, arabicSubject.id, 4);
  await seedGradeSubject(grades.highThirdHumanitary.id, frenchSubject.id, 4);
  await seedGradeSubject(grades.highThirdHumanitary.id, englishSubject.id, 4);
  await seedGradeSubject(grades.highThirdHumanitary.id, philosophySubject.id, 4);
  await seedGradeSubject(grades.highThirdHumanitary.id, geographicHistorySubject.id, 2);
  await seedGradeSubject(grades.highThirdHumanitary.id, educationIslamiqueSubject.id, 3);
  // #endregion
}

/**
 * @description
 * Seeds a fake subject
 *
 * @param {String} name The name of the subject
 */
async function seedSubject(name) {
  const createdSubject = createSubject(name);
  await Subject.create(createdSubject);

  return createdSubject;
}

/**
 * @description
 * Seeds a fake grade-subject association
 *
 * @param {String} gradeId The UUID of the grade
 * @param {String} subjectId The UUID of the subject
 * @param {Number} coefficient The coefficient of the subject in a given grade
 */
async function seedGradeSubject(gradeId, subjectId, coefficient) {
  const createdGradeSubject = createGradeSubject(gradeId, subjectId, coefficient);
  await GradeSubject.create(createdGradeSubject);
}

/**
 * @description
 * Creates a fake subject
 *
 * @param {String} name The name of the subject
 */
function createSubject(name, level) {
  return {
    name,
    id: faker.string.uuid()
  };
}

/**
 * @description
 * Creates a fake grade-subject association
 *
 * @param {String} gradeId The UUID of the grade
 * @param {String} subjectId The UUID of the subject
 * @param {Number} coefficient The coefficient of the subject in a given grade
 */
function createGradeSubject(gradeId, subjectId, coefficient) {
  return {
    gradeId,
    subjectId,
    coefficient
  };
}