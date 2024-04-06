import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';
import { User } from './user.model.js';



const Parent = db.define('parent', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
  },
  userId: {
    unique: true,
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'id',
    }
  },
  cin: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING,
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  }
});

await Parent.sync({ force: true });

User.hasOne(Parent, { foreignKey: 'userId' });
Parent.belongsTo(User, { foreignKey: 'userId' });

export { Parent };