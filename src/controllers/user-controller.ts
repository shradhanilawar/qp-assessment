import { Request, Response } from 'express';
import Grocery from '../models/grocery-model';

export const viewGroceryItems = async (_req: Request, res: Response) => {
  try {
    const groceries = await Grocery.findAll({ where: { quantity: { gt: 0 } } });
    res.status(200).json(groceries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching grocery items', error });
  }
};

export const bookGroceries = async (req: Request, res: Response) => {
  try {
    const { items } = req.body; // Expecting items as [{ id, quantity }]

    const updatePromises = items.map(
      async (item: { id: number; quantity: number }) => {
        const grocery = await Grocery.findByPk(item.id);
        if (!grocery || grocery.quantity < item.quantity) {
          throw new Error(`Item ${item.id} is out of stock or invalid`);
        }
        grocery.quantity -= item.quantity;
        await grocery.save();
        return grocery;
      }
    );

    const updatedItems = await Promise.all(updatePromises);

    res
      .status(200)
      .json({ message: 'Order placed successfully', updatedItems });
  } catch (error) {
    res.status(500).json({ 'Error placing order': error });
  }
};
