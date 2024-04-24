import { DataTypes } from 'sequelize';
import { db } from '../lib/db.lib.js';
import { Exam } from './exam.model.js';
import { Student } from './student.model.js';



const StudentExam = db.define('studentExam', {
  score: {
    allowNull: true,
    type: DataTypes.FLOAT
  },
  studentId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
      model: Student
    }
  },
  examId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      key: 'id',
      model: Exam
    }
  }
});

await StudentExam.sync({ force: true });

Exam.hasMany(Student, { foreignKey: 'id' });
Student.hasMany(Exam, { foreignKey: 'id' });

export { StudentExam };