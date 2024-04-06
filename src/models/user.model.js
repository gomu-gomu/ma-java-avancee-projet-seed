import { DataTypes } from 'sequelize';
import { db } from './../lib/db.lib.js';



const User = db.define('user', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
  },
  email: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  type: {
    allowNull: false,
    type: DataTypes.SMALLINT
  }
});

await User.sync({ force: true });
export { User };