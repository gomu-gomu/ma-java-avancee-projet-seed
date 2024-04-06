import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';



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
  level: {
    allowNull: false,
    type: DataTypes.SMALLINT
  }
});

await Class.sync({ force: true });
export { Class };