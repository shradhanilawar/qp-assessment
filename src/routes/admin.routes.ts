import { Router } from 'express';
import {
  addGroceryItem,
  removeGroceryItem,
  updateGroceryItem,
  viewGroceryItems,
} from '../controllers/admin.controller';
//import { verifyAdminToken } from '../middleware/auth.middleware';

const router = Router();

// router.post('/add', verifyAdminToken, addGroceryItem);
// router.put('/update/:id', verifyAdminToken, updateGroceryItem);
// router.delete('/remove/:id', verifyAdminToken, removeGroceryItem);
// router.get('/view', verifyAdminToken, viewGroceryItems);

router.post('/grocery', addGroceryItem);
router.get('/groceries', viewGroceryItems);
router.delete('/grocery/:id', removeGroceryItem);
router.put('/grocery/:id', updateGroceryItem);

export default router;
