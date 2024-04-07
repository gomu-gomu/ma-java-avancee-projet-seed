import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';
import { Cycle } from './cycle.model.js';
import { Teacher } from './teacher.model.js';



const TeacherCycle = db.define('teacherCycle', {
  teacherId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
      model: Teacher
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

await TeacherCycle.sync({ force: true });

Cycle.hasMany(Teacher, { foreignKey: 'id' });
Teacher.hasMany(Cycle, { foreignKey: 'id' });

export { TeacherCycle };