import { Router } from 'express';
import {
  viewGroceryItems,
  bookGroceries,
} from '../controllers/user-controller';

const router = Router();

router.get('/groceries', viewGroceryItems);
router.post('/order', bookGroceries);

export default router;
