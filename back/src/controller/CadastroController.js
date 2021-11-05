import Cadastro from '../models/Cadastro';

export default {

    async index(req, res){
        const usuario = await Cadastro.findAll()
        return res.json(usuario);
    }
}