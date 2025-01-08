// Import the required packages library
import { Request, Response } from 'express';
import Grocery from '../models/grocery.model';

// Controller to view the quantity of all groceries
export const viewGroceryItems = async (_req: Request, res: Response) => {
  try {
    const groceries = await Grocery.findAll();
    res.status(200).json(groceries);
  } 
  // Log any error that occurs during the process for debugging
  catch (error) {
    res.status(500).json({ message: 'Error fetching grocery items', error });
  }
};

// Controller to book groceries
export const bookGroceries = async (req: Request, res: Response) => {
  try {
    const items = req.body;

    // Create an array of promises to process each grocery item
    const updatePromises = items.map(
      async (item: { id: number; quantity: number }) => {
        const grocery = await Grocery.findByPk(item.id);

        // Check if the grocery item exists and has sufficient quantity
        if (!grocery || grocery.quantity < item.quantity) {
          return { id: item.id, success: false, message: 'Out of stock' };
        }

        // Deduct the ordered quantity from the available stock
        grocery.quantity -= item.quantity;
        await grocery.save();

        // Return a success object with updated details
        return { id: item.id, success: true };
      }
    );

    const results = await Promise.all(updatePromises);
    res.status(200).json(results);
  } catch (error) {
    // Log any error that occurs during the process for debugging
    res.status(500).json({ message: 'Error booking groceries', error });
  }
};
