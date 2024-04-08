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
  const subjects = {};

  subjects.lawSubject = await seedSubject('Droit');
  subjects.arabicSubject = await seedSubject('Arabe');
  subjects.englishSubject = await seedSubject('Anglais');
  subjects.frenchSubject = await seedSubject('Français');
  subjects.mathSubject = await seedSubject('Mathématiques');
  subjects.philosophySubject = await seedSubject('Philosophie');
  subjects.informatiqueSubject = await seedSubject('Informatique');
  subjects.engineeringSubject = await seedSubject('Sciences de l\'ingénieur');
  subjects.physicsAndChimiqueSubject = await seedSubject('Physique et Chimie');
  subjects.geographicHistorySubject = await seedSubject('Histoire Géographie');
  subjects.educationIslamiqueSubject = await seedSubject('Education Islamique');
  subjects.industrialtechnology = await seedSubject('Technologie Industrielle');
  subjects.svaSubject = await seedSubject('Sciences Végétales et Animales (SVA)');
  subjects.svtSubject = await seedSubject('Sciences de la Vie et de la Terre (SVT)');
  subjects.informatiqueGestionSubject = await seedSubject('Informatique de gestion');
  subjects.economicalStatisticsSubject = await seedSubject('Économie générale et Statistiques');
  subjects.accountingAndFinancialMathSubject = await seedSubject('Comptabilité et Mathématiques Financières');
  subjects.enterpriseAndAdministrativeEconomySubject = await seedSubject('Économie et Organisation Administrative des Entreprises');

  // #region 1ère Année Collège
  await seedGradeSubject(grades.middleFirst.id, subjects.svtSubject.id, 3);
  await seedGradeSubject(grades.middleFirst.id, subjects.mathSubject.id, 5);
  await seedGradeSubject(grades.middleFirst.id, subjects.frenchSubject.id, 5);
  await seedGradeSubject(grades.middleFirst.id, subjects.arabicSubject.id, 5);
  await seedGradeSubject(grades.middleFirst.id, subjects.englishSubject.id, 3);
  await seedGradeSubject(grades.middleFirst.id, subjects.informatiqueSubject.id, 2);
  await seedGradeSubject(grades.middleFirst.id, subjects.physicsAndChimiqueSubject.id, 2);
  await seedGradeSubject(grades.middleFirst.id, subjects.geographicHistorySubject.id, 3);
  await seedGradeSubject(grades.middleFirst.id, subjects.educationIslamiqueSubject.id, 2);
  // #endregion

  // #region 2ème Année Collège
  await seedGradeSubject(grades.middleSecond.id, subjects.svtSubject.id, 3);
  await seedGradeSubject(grades.middleSecond.id, subjects.mathSubject.id, 5);
  await seedGradeSubject(grades.middleSecond.id, subjects.frenchSubject.id, 5);
  await seedGradeSubject(grades.middleSecond.id, subjects.arabicSubject.id, 5);
  await seedGradeSubject(grades.middleSecond.id, subjects.englishSubject.id, 3);
  await seedGradeSubject(grades.middleSecond.id, subjects.informatiqueSubject.id, 2);
  await seedGradeSubject(grades.middleSecond.id, subjects.industrialtechnology.id, 3);
  await seedGradeSubject(grades.middleSecond.id, subjects.physicsAndChimiqueSubject.id, 2);
  await seedGradeSubject(grades.middleSecond.id, subjects.geographicHistorySubject.id, 3);
  await seedGradeSubject(grades.middleSecond.id, subjects.educationIslamiqueSubject.id, 2);
  // #endregion

  // #region 3ème Année Collège
  await seedGradeSubject(grades.middleThird.id, subjects.svtSubject.id, 3);
  await seedGradeSubject(grades.middleThird.id, subjects.mathSubject.id, 5);
  await seedGradeSubject(grades.middleThird.id, subjects.frenchSubject.id, 5);
  await seedGradeSubject(grades.middleThird.id, subjects.arabicSubject.id, 5);
  await seedGradeSubject(grades.middleThird.id, subjects.englishSubject.id, 3);
  await seedGradeSubject(grades.middleThird.id, subjects.informatiqueSubject.id, 2);
  await seedGradeSubject(grades.middleThird.id, subjects.industrialtechnology.id, 3);
  await seedGradeSubject(grades.middleThird.id, subjects.physicsAndChimiqueSubject.id, 2);
  await seedGradeSubject(grades.middleThird.id, subjects.geographicHistorySubject.id, 3);
  await seedGradeSubject(grades.middleThird.id, subjects.educationIslamiqueSubject.id, 2);
  // #endregion

  // #region Tronc Commun
  await seedGradeSubject(grades.highFirstScience.id, subjects.svtSubject.id, 4);
  await seedGradeSubject(grades.highFirstScience.id, subjects.mathSubject.id, 4);
  await seedGradeSubject(grades.highFirstScience.id, subjects.frenchSubject.id, 3);
  await seedGradeSubject(grades.highFirstScience.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highFirstScience.id, subjects.englishSubject.id, 3);
  await seedGradeSubject(grades.highFirstScience.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highFirstScience.id, subjects.informatiqueSubject.id, 2);
  await seedGradeSubject(grades.highFirstScience.id, subjects.geographicHistorySubject.id, 2);
  await seedGradeSubject(grades.highFirstScience.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highFirstScience.id, subjects.physicsAndChimiqueSubject.id, 4);
  
  await seedGradeSubject(grades.highFirstTechnology.id, subjects.mathSubject.id, 4);
  await seedGradeSubject(grades.highFirstTechnology.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highFirstTechnology.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highFirstTechnology.id, subjects.englishSubject.id, 3);
  await seedGradeSubject(grades.highFirstTechnology.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highFirstTechnology.id, subjects.engineeringSubject.id, 3);
  await seedGradeSubject(grades.highFirstTechnology.id, subjects.informatiqueSubject.id, 2);
  await seedGradeSubject(grades.highFirstTechnology.id, subjects.geographicHistorySubject.id, 2);
  await seedGradeSubject(grades.highFirstTechnology.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highFirstTechnology.id, subjects.physicsAndChimiqueSubject.id, 4);
  
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, subjects.svtSubject.id, 2);
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, subjects.mathSubject.id, 2);
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, subjects.arabicSubject.id, 4);
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, subjects.englishSubject.id, 4);
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, subjects.geographicHistorySubject.id, 4);
  await seedGradeSubject(grades.highFirstLetterAndHumanitary.id, subjects.educationIslamiqueSubject.id, 2);
  // #endregion

  // #region 1ére Bac
  await seedGradeSubject(grades.highSecondMath.id, subjects.svtSubject.id, 3);
  await seedGradeSubject(grades.highSecondMath.id, subjects.mathSubject.id, 9);
  await seedGradeSubject(grades.highSecondMath.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highSecondMath.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highSecondMath.id, subjects.englishSubject.id, 2);
  await seedGradeSubject(grades.highSecondMath.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highSecondMath.id, subjects.geographicHistorySubject.id, 2);
  await seedGradeSubject(grades.highSecondMath.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highSecondMath.id, subjects.physicsAndChimiqueSubject.id, 7);
  
  await seedGradeSubject(grades.highSecondExperimental.id, subjects.svtSubject.id, 7);
  await seedGradeSubject(grades.highSecondExperimental.id, subjects.mathSubject.id, 7);
  await seedGradeSubject(grades.highSecondExperimental.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highSecondExperimental.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highSecondExperimental.id, subjects.englishSubject.id, 2);
  await seedGradeSubject(grades.highSecondExperimental.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highSecondExperimental.id, subjects.geographicHistorySubject.id, 2);
  await seedGradeSubject(grades.highSecondExperimental.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highSecondExperimental.id, subjects.physicsAndChimiqueSubject.id, 7);

  await seedGradeSubject(grades.highSecondElectricTechnology.id, subjects.mathSubject.id, 6);
  await seedGradeSubject(grades.highSecondElectricTechnology.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highSecondElectricTechnology.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highSecondElectricTechnology.id, subjects.englishSubject.id, 2);
  await seedGradeSubject(grades.highSecondElectricTechnology.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highSecondElectricTechnology.id, subjects.engineeringSubject.id, 8);
  await seedGradeSubject(grades.highSecondElectricTechnology.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highSecondElectricTechnology.id, subjects.physicsAndChimiqueSubject.id, 6);

  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, subjects.mathSubject.id, 6);
  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, subjects.englishSubject.id, 2);
  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, subjects.engineeringSubject.id, 8);
  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highSecondMechanicalTechnology.id, subjects.physicsAndChimiqueSubject.id, 6);

  await seedGradeSubject(grades.highSecondEconomical.id, subjects.lawSubject.id, 1);
  await seedGradeSubject(grades.highSecondEconomical.id, subjects.mathSubject.id, 4);
  await seedGradeSubject(grades.highSecondEconomical.id, subjects.frenchSubject.id, 3);
  await seedGradeSubject(grades.highSecondEconomical.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highSecondEconomical.id, subjects.englishSubject.id, 2);
  await seedGradeSubject(grades.highSecondEconomical.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highSecondEconomical.id, subjects.geographicHistorySubject.id, 3);
  await seedGradeSubject(grades.highSecondEconomical.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highSecondEconomical.id, subjects.informatiqueGestionSubject.id, 2);
  await seedGradeSubject(grades.highSecondEconomical.id, subjects.economicalStatisticsSubject.id, 6);
  await seedGradeSubject(grades.highSecondEconomical.id, subjects.accountingAndFinancialMathSubject.id, 4);
  await seedGradeSubject(grades.highSecondEconomical.id, subjects.enterpriseAndAdministrativeEconomySubject.id, 3);

  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, subjects.svtSubject.id, 1);
  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, subjects.mathSubject.id, 1);
  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, subjects.arabicSubject.id, 4);
  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, subjects.englishSubject.id, 4);
  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, subjects.philosophySubject.id, 4);
  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, subjects.geographicHistorySubject.id, 4);
  await seedGradeSubject(grades.highSecondLetterAndHumanitary.id, subjects.educationIslamiqueSubject.id, 2);
  // #endregion

  // #region 2ére Bac
  await seedGradeSubject(grades.highThirdMathA.id, subjects.svtSubject.id, 3);
  await seedGradeSubject(grades.highThirdMathA.id, subjects.mathSubject.id, 9);
  await seedGradeSubject(grades.highThirdMathA.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highThirdMathA.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highThirdMathA.id, subjects.englishSubject.id, 2);
  await seedGradeSubject(grades.highThirdMathA.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highThirdMathA.id, subjects.physicsAndChimiqueSubject.id, 7);
  await seedGradeSubject(grades.highThirdMathA.id, subjects.educationIslamiqueSubject.id, 2);

  await seedGradeSubject(grades.highThirdMathB.id, subjects.mathSubject.id, 9);
  await seedGradeSubject(grades.highThirdMathB.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highThirdMathB.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highThirdMathB.id, subjects.englishSubject.id, 2);
  await seedGradeSubject(grades.highThirdMathB.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highThirdMathB.id, subjects.engineeringSubject.id, 3);
  await seedGradeSubject(grades.highThirdMathB.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highThirdMathB.id, subjects.physicsAndChimiqueSubject.id, 7);

  await seedGradeSubject(grades.highThirdPhysics.id, subjects.svtSubject.id, 5);
  await seedGradeSubject(grades.highThirdPhysics.id, subjects.mathSubject.id, 7);
  await seedGradeSubject(grades.highThirdPhysics.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highThirdPhysics.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highThirdPhysics.id, subjects.englishSubject.id, 2);
  await seedGradeSubject(grades.highThirdPhysics.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highThirdPhysics.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highThirdPhysics.id, subjects.physicsAndChimiqueSubject.id, 7);
  
  await seedGradeSubject(grades.highThirdSVT.id, subjects.svtSubject.id, 7);
  await seedGradeSubject(grades.highThirdSVT.id, subjects.mathSubject.id, 7);
  await seedGradeSubject(grades.highThirdSVT.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highThirdSVT.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highThirdSVT.id, subjects.englishSubject.id, 2);
  await seedGradeSubject(grades.highThirdSVT.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highThirdSVT.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highThirdSVT.id, subjects.physicsAndChimiqueSubject.id, 5);
  
  await seedGradeSubject(grades.highThirdAgronomical.id, subjects.svaSubject.id, 5);
  await seedGradeSubject(grades.highThirdAgronomical.id, subjects.svtSubject.id, 5);
  await seedGradeSubject(grades.highThirdAgronomical.id, subjects.mathSubject.id, 7);
  await seedGradeSubject(grades.highThirdAgronomical.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highThirdAgronomical.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highThirdAgronomical.id, subjects.englishSubject.id, 2);
  await seedGradeSubject(grades.highThirdAgronomical.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highThirdAgronomical.id, subjects.geographicHistorySubject.id, 2);
  await seedGradeSubject(grades.highThirdAgronomical.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highThirdAgronomical.id, subjects.physicsAndChimiqueSubject.id, 5);

  await seedGradeSubject(grades.highThirdElectricTechnology.id, subjects.mathSubject.id, 7);
  await seedGradeSubject(grades.highThirdElectricTechnology.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highThirdElectricTechnology.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highThirdElectricTechnology.id, subjects.englishSubject.id, 2);
  await seedGradeSubject(grades.highThirdElectricTechnology.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highThirdElectricTechnology.id, subjects.engineeringSubject.id, 8);
  await seedGradeSubject(grades.highThirdElectricTechnology.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highThirdElectricTechnology.id, subjects.physicsAndChimiqueSubject.id, 3);

  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, subjects.mathSubject.id, 7);
  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, subjects.englishSubject.id, 2);
  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, subjects.engineeringSubject.id, 8);
  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highThirdMechanicalTechnology.id, subjects.physicsAndChimiqueSubject.id, 5);

  await seedGradeSubject(grades.highThirdEconomical.id, subjects.lawSubject.id, 4);
  await seedGradeSubject(grades.highThirdEconomical.id, subjects.mathSubject.id, 4);
  await seedGradeSubject(grades.highThirdEconomical.id, subjects.frenchSubject.id, 2);
  await seedGradeSubject(grades.highThirdEconomical.id, subjects.arabicSubject.id, 3);
  await seedGradeSubject(grades.highThirdEconomical.id, subjects.englishSubject.id, 2);
  await seedGradeSubject(grades.highThirdEconomical.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highThirdEconomical.id, subjects.geographicHistorySubject.id, 3);
  await seedGradeSubject(grades.highThirdEconomical.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highThirdEconomical.id, subjects.informatiqueGestionSubject.id, 4);
  await seedGradeSubject(grades.highThirdEconomical.id, subjects.economicalStatisticsSubject.id, 6);
  await seedGradeSubject(grades.highThirdEconomical.id, subjects.accountingAndFinancialMathSubject.id, 4);
  await seedGradeSubject(grades.highThirdEconomical.id, subjects.enterpriseAndAdministrativeEconomySubject.id, 3);
  
  await seedGradeSubject(grades.highThirdSGC.id, subjects.lawSubject.id, 4);
  await seedGradeSubject(grades.highThirdSGC.id, subjects.mathSubject.id, 4);
  await seedGradeSubject(grades.highThirdSGC.id, subjects.arabicSubject.id, 2);
  await seedGradeSubject(grades.highThirdSGC.id, subjects.frenchSubject.id, 3);
  await seedGradeSubject(grades.highThirdSGC.id, subjects.englishSubject.id, 2);
  await seedGradeSubject(grades.highThirdSGC.id, subjects.philosophySubject.id, 2);
  await seedGradeSubject(grades.highThirdSGC.id, subjects.geographicHistorySubject.id, 2);
  await seedGradeSubject(grades.highThirdSGC.id, subjects.educationIslamiqueSubject.id, 2);
  await seedGradeSubject(grades.highThirdSGC.id, subjects.informatiqueGestionSubject.id, 4);
  await seedGradeSubject(grades.highThirdSGC.id, subjects.economicalStatisticsSubject.id, 3);
  await seedGradeSubject(grades.highThirdSGC.id, subjects.accountingAndFinancialMathSubject.id, 6);
  await seedGradeSubject(grades.highThirdSGC.id, subjects.enterpriseAndAdministrativeEconomySubject.id, 6);
  
  await seedGradeSubject(grades.highThirdLetters.id, subjects.mathSubject.id, 1);
  await seedGradeSubject(grades.highThirdLetters.id, subjects.arabicSubject.id, 4);
  await seedGradeSubject(grades.highThirdLetters.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highThirdLetters.id, subjects.englishSubject.id, 4);
  await seedGradeSubject(grades.highThirdLetters.id, subjects.philosophySubject.id, 3);
  await seedGradeSubject(grades.highThirdLetters.id, subjects.geographicHistorySubject.id, 3);
  await seedGradeSubject(grades.highThirdLetters.id, subjects.educationIslamiqueSubject.id, 2);

  await seedGradeSubject(grades.highThirdHumanitary.id, subjects.mathSubject.id, 1);
  await seedGradeSubject(grades.highThirdHumanitary.id, subjects.arabicSubject.id, 3);
  await seedGradeSubject(grades.highThirdHumanitary.id, subjects.frenchSubject.id, 4);
  await seedGradeSubject(grades.highThirdHumanitary.id, subjects.englishSubject.id, 3);
  await seedGradeSubject(grades.highThirdHumanitary.id, subjects.philosophySubject.id, 4);
  await seedGradeSubject(grades.highThirdHumanitary.id, subjects.geographicHistorySubject.id, 4);
  await seedGradeSubject(grades.highThirdHumanitary.id, subjects.educationIslamiqueSubject.id, 2);
  // #endregion

  return subjects;
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