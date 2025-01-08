import { Request, Response } from 'express';
import Grocery from '../models/grocery.model';

export const viewGroceryItems = async (_req: Request, res: Response) => {
  try {
    const groceries = await Grocery.findAll();
    res.status(200).json(groceries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching grocery items', error });
  }
};

export const bookGroceries = async (req: Request, res: Response) => {
  try {
    const items = req.body;
    const updatePromises = items.map(
      async (item: { id: number; quantity: number }) => {
        const grocery = await Grocery.findByPk(item.id);
        if (!grocery || grocery.quantity < item.quantity) {
          return { id: item.id, success: false, message: 'Out of stock' };
        }
        grocery.quantity -= item.quantity;
        await grocery.save();
        return { id: item.id, success: true };
      }
    );

    const results = await Promise.all(updatePromises);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error booking groceries', error });
  }
};
