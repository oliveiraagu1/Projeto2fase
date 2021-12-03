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
    allowNull: false,
  },
  nome_local:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  avaliacao: {
    type: Sequelize.FLOAT(0,5),
    allowNull: false
  }
});

//Lugares.sync({ alter: true });

export default Lugares;
