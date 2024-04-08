import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';
import { Cycle } from './cycle.model.js';
import { Subject } from './subject.model.js';



const Exam = db.define('exam', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  cycleId: {
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
      model: Cycle
    }
  },
  subjectId: {
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
      model: Subject
    }
  }
});

await Exam.sync({ force: true });

Cycle.hasMany(Exam, { foreignKey: 'cycleId' });
Exam.belongsTo(Cycle, { foreignKey: 'cycleId' });

Subject.hasMany(Exam, { foreignKey: 'subjectId' });
Exam.belongsTo(Subject, { foreignKey: 'subjectId' });

export { Exam };