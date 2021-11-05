import Sequelize from 'sequelize';

const sequelize = new Sequelize('pleacetogo', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Conexão com o banco de dados realizada com sucesso!')
}).catch((error) => {
    console.log(`Erro: Falha ao conectar ao banco de dados! ${error}` )
});

export default sequelize;