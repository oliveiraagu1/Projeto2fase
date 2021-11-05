import Sequelize from 'sequelize';
import db from '../config/db';

const Cadastro = db.define('cadastro', {
    
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Cadastro.sync({alter: true});

export default Cadastro;