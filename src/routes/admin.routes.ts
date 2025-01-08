// Import the required packages library
import { Router } from 'express';
import {
  addGroceryItem,
  removeGroceryItem,
  updateGroceryItem,
  viewGroceryItems,
} from '../controllers/admin.controller';

const router = Router();

//Define the routes
router.post('/grocery', addGroceryItem);
router.get('/groceries', viewGroceryItems);
router.delete('/grocery/:id', removeGroceryItem);
router.put('/grocery/:id', updateGroceryItem);

export default router;
