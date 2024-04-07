import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';
import { Grade } from './grade.model.js';
import { Subject } from './subject.model.js';



const GradeSubject = db.define('gradeSubject', {
  coefficient: {
    allowNull: false,
    type: DataTypes.SMALLINT
  },
  gradeId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
      model: Grade
    }
  },
  subjectId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
      model: Subject
    }
  }
});

await GradeSubject.sync({ force: true });

Subject.hasMany(Grade, { foreignKey: 'id' });
Grade.hasMany(Subject, { foreignKey: 'id' });

export { GradeSubject };