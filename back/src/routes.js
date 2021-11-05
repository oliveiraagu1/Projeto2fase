import express from 'express';
import CadastroController from './controller/CadastroController';

const routes = express.Router();



routes.get('/cadastro', CadastroController.index)


export default routes;