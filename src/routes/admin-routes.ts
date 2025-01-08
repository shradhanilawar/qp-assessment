import { Router } from 'express';
import {
  addGroceryItem,
  viewGroceryItems,
  removeGroceryItem,
  updateGroceryItem,
} from '../controllers/admin-controller';

const router = Router();

router.post('/grocery', addGroceryItem);
router.get('/groceries', viewGroceryItems);
router.delete('/grocery/:id', removeGroceryItem);
router.put('/grocery/:id', updateGroceryItem);

export default router;
