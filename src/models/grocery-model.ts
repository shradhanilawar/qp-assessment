import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

export class Grocery extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  public quantity!: number;
}

Grocery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'Grocery',
  }
);

export default Grocery;
