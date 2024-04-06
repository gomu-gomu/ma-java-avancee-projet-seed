import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';
import { Parent } from './parent.model.js';
import { Student } from './student.model.js';



const Parenthood = db.define('parenthood', {
  parentId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
      model: Parent
    }
  },
  studentId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
      model: Student
    }
  }
});

await Parenthood.sync({ force: true });

Parent.hasMany(Parenthood, { foreignKey: 'parentId' });
Parenthood.belongsTo(Parent, { foreignKey: 'parentId' });
Student.hasMany(Parenthood, { foreignKey: 'studentId' });
Parenthood.belongsTo(Student, { foreignKey: 'studentId' });

export { Parenthood };