import express from 'express';

const transactionRouter = express();
import {
  getPeriodTransactions,
  create,
  update,
  remove,
} from '../services/transactionService.js';

transactionRouter
  .route('/')
  .get(getPeriodTransactions)
  .post(create)
  .put(update)
  .delete(remove);

export default transactionRouter;
