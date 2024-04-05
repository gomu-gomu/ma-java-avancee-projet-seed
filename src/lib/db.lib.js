import { config } from 'dotenv';
import { Sequelize } from 'sequelize';



config();

export const db = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST
  }
);