import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';
import { Cycle } from './cycle.model.js';
import { Student } from './student.model.js';



const StudentCycle = db.define('studentCycle', {
  studentId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
      model: Student
    }
  },
  cycleId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
      model: Cycle
    }
  }
});

await StudentCycle.sync({ force: true });

Cycle.hasMany(Student, { foreignKey: 'id' });
Student.hasMany(Cycle, { foreignKey: 'id' });

export { StudentCycle };