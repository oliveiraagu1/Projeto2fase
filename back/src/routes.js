import express from 'express';
import CadastroController from './controller/CadastroController';

const routes = express.Router();

routes.get('/users', CadastroController.getUsers);
routes.post('/cadastro', CadastroController.cadastro);
routes.post('/login', CadastroController.login);
routes.delete('/delete/:id', CadastroController.deleteUser);
routes.patch('/editar/:id', CadastroController.editName);

export default routes;