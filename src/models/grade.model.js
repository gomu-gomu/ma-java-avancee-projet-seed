import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';
import { Sector } from './sector.model.js';



const Grade = db.define('grade', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
  },
  level: {
    allowNull: false,
    type: DataTypes.SMALLINT
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  sectorId: {
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
      model: Sector
    }
  }
});

await Grade.sync({ force: true });

Grade.hasOne(Sector, { foreignKey: 'id' });
Grade.belongsTo(Sector, { foreignKey: 'id' });

export { Grade };