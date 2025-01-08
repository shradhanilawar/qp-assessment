import { Request, Response } from 'express';
import Grocery from '../models/grocery-model';

export const addGroceryItem = async (req: Request, res: Response) => {
  try {
    const { name, price, quantity } = req.body;
    const grocery = await Grocery.create({ name, price, quantity });
    res.status(201).json(grocery);
  } catch (error) {
    res.status(500).json({ message: 'Error adding grocery item', error });
  }
};

export const viewGroceryItems = async (_req: Request, res: Response) => {
  try {
    const groceries = await Grocery.findAll();
    res.status(200).json(groceries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching grocery items', error });
  }
};

export const removeGroceryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Grocery.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'Grocery item deleted' });
    } else {
      res.status(404).json({ message: 'Grocery item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting grocery item', error });
  }
};

export const updateGroceryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, quantity } = req.body;
    const updated = await Grocery.update(
      { name, price, quantity },
      { where: { id } }
    );
    if (updated[0]) {
      res.status(200).json({ message: 'Grocery item updated' });
    } else {
      res.status(404).json({ message: 'Grocery item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating grocery item', error });
  }
};
