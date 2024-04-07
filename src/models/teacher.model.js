import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';
import { User } from './user.model.js';
import { Subject } from './subject.model.js';



const Teacher = db.define('teacher', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
  },
  userId: {
    unique: true,
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'id',
    }
  },
  subjectId: {
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: Subject,
      key: 'id',
    }
  },
  cin: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING,
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  }
});

await Teacher.sync({ force: true });

User.hasOne(Teacher, { foreignKey: 'userId' });
Teacher.belongsTo(User, { foreignKey: 'userId' });

Subject.hasMany(Teacher, { foreignKey: 'subjectId' });
Teacher.belongsTo(Subject, { foreignKey: 'subjectId' });

export { Teacher };