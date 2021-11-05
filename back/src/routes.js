import express from 'express';
import CadastroController from './controller/CadastroController';

const routes = express.Router();



routes.get('/', CadastroController.index)


export default routes;