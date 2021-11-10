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
        unique: {
            msg: "E-mail já foi cadastrado!"
        },
        validate: {
            isEmail: {
                msg: "Verificar o campo e-mail, pois o mesmo precisa ser do tipo e-mail!"
            },
            len: {
                args: [4, 30],
                msg: "O campo e-mail deve ter entre 4 e 30 caracteres!"
            }
        }
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "O campo name não pode ser vazio!"
            },
            len: {
                args: [3, 50],
                msg: "O campo name deve ter entre 3 e 50 caracteres!"
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "O campo password não pode ser vazio!"
            },
            len: {
                args: [6, 30],
                msg: "O campo password deve ter entre 6 e 30 caracteres!"
            }
        }
    }
});

Cadastro.sync({ alter: true });

export default Cadastro;