import Cadastro from '../models/Cadastro';

export default {

    async cadastro(req, res) {

        try {
            const { email, name, password } = req.body

            const usuario = await Cadastro.findAll({
                where: {
                    email
                }
            });
        
            if (usuario[0]) return res.status(400).json({
                erro: true,
                mensagem: "Usuário já cadastrado!"
            });

            const user = await Cadastro.create({
                email,
                name,
                password
            });

        } catch (err) {
            const errors = err.errors
            let mensagem = {};
            errors.map(item => mensagem = item.message)
            return res.status(400).json({
                erro: true,
                mensagem
            });

        };
    },
    
    async login(req, res){

        try {

            const {email, password} = req.body;

            const login = await Cadastro.findOne({
                where: {
                    email,
                    password
                }
            });
    
            if(login) return res.status(200).json({
                erro: false,
                mensagem: "Login realizado com sucesso!"
            });

            return res.status(400).json({
                erro: true,
                mensagem: "E-mail ou senha não conferem!"
            });

        }catch(err) {
           console.log(err);
        };
    },
};