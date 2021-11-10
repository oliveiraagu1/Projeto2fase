import express from 'express';
import CadastroController from './controller/CadastroController';

const routes = express.Router();

routes.post('/cadastro', CadastroController.cadastro);

export default routes;