import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';
import { Parent } from './parent.model.js';
import { Student } from './student.model.js';



const Parenthood = db.define('parenthood', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
  },
  parentId: {
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: Parent,
      key: 'id',
    }
  },
  studentId: {
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: Student,
      key: 'id',
    }
  }
});

await Parenthood.sync({ force: true });

Parent.hasMany(Parenthood, { foreignKey: 'parentId' });
Parenthood.belongsTo(Parent, { foreignKey: 'parentId' });
Student.hasMany(Parenthood, { foreignKey: 'studentId' });
Parenthood.belongsTo(Student, { foreignKey: 'studentId' });

export { Parenthood };