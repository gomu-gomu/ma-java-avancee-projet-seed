import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';



const Subject = db.define('subject', {
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

await Subject.sync({ force: true });
export { Subject };