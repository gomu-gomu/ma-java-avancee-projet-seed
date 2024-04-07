import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';
import { Class } from './class.model.js';



const Cycle = db.define('cycles', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
  },
  year: {
    allowNull: false,
    type: DataTypes.SMALLINT,
  },
  classId: {
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
      model: Class
    }
  }
});

await Cycle.sync({ force: true });

Class.hasMany(Cycle, { foreignKey: 'classId' });
Cycle.belongsTo(Class, { foreignKey: 'classId' });

export { Cycle };