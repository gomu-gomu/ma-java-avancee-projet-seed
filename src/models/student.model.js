import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';
import { User } from './user.model.js';



const Student = db.define('student', {
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
  cne: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING,
  },
  cin: {
    unique: true,
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

await Student.sync({ force: true });

User.hasOne(Student, { foreignKey: 'userId' });
Student.belongsTo(User, { foreignKey: 'userId' });

export { Student };