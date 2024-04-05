import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';
import { User } from './user.model.js';
import { Student } from './student.model.js';



const Parenthood = db.define('parenthood', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
  },
  parentId: {
    unique: true,
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'id',
    }
  },
  studentId: {
    unique: true,
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: Student,
      key: 'id',
    }
  }
});

await Parenthood.sync({ force: true });

User.hasMany(Parenthood, { foreignKey: 'parentId' });
Parenthood.belongsTo(User, { foreignKey: 'parentId' });
Student.hasMany(Parenthood, { foreignKey: 'studentId' });
Parenthood.belongsTo(Student, { foreignKey: 'studentId' });

export { Parenthood };