// Import the required packages library
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

// Define the Grocery model
class Grocery extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  public quantity!: number;
}

// Initialize the Grocery model
Grocery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Grocery',
  }
);

export default Grocery;
