import { Sequelize } from "sequelize";

const sequelize = new Sequelize("grocerydb", "username", "password", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
