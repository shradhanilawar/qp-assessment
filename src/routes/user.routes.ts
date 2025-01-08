import { Router } from 'express';
import {
  bookGroceries,
  viewGroceryItems,
} from '../controllers/user.controller';

const router = Router();

router.get('/groceries', viewGroceryItems);
router.post('/order', bookGroceries);

export default router;
