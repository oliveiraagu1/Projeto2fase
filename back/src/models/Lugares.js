import Sequelize from "sequelize";
import db from "../config/db";

const Lugares = db.define("lugares", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  tipo_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  nome_local:{
    type: Sequelize.STRING,
    allowNull: true,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true
  },
});

//Lugares.sync({ alter: true });

export default Lugares;
