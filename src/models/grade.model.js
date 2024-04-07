import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';



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
    unique: true,
    allowNull: false,
    type: DataTypes.STRING
  }
});

await Grade.sync({ force: true });
export { Grade };