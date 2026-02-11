import express from 'express';
backend/routes/expenses.js;

import { getExpenses, createExpense, updateExpense, deleteExpense } from '../controllers/expensesController.js';

const router = express.Router();

router.get('/', getExpenses);
router.post('/', createExpense);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

export default router;
