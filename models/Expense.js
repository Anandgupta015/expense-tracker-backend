import mongoose from 'mongoose';

const ExpenseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    cost: { type: Number, required: true },
    date: { type: String, required: true },
    time: { type: String },
    location: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }

  },
  { timestamps: true }
);

export default mongoose.model('Expense', ExpenseSchema);
