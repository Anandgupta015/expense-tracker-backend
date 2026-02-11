const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const expensesRoutes = require('./routes/expenses');
const usersRoutes = require('./routes/users');

dotenv.config();

const app = express();

const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB connected");

    app.use(cors());
    app.use(express.json());

    app.use('/api/users', usersRoutes);
    app.use('/api/expenses', expensesRoutes);

    app.get('/', (req, res) => {
      res.send('Expense Tracker API is running');
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error(error);
  }
};

startServer();
