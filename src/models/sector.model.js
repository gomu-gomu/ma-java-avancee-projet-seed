import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';



const Sector = db.define('sector', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
  },
  name: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING,
  }
});

await Sector.sync({ force: true });
export { Sector };