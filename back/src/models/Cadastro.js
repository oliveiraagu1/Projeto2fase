import Sequelize from 'sequelize';
import db from '../config/db';

const Cadastro = db.define('cadastros', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

//Cadastro.sync({ alter: true });

export default Cadastro;