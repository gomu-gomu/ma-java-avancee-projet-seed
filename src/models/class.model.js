import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';
import { Grade } from './grade.model.js';



const Class = db.define('class', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  gradeId: {
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
      model: Grade
    }
  }
});

await Class.sync({ force: true });

Grade.hasMany(Class, { foreignKey: 'gradeId' });
Class.belongsTo(Grade, { foreignKey: 'gradeId' });

export { Class };