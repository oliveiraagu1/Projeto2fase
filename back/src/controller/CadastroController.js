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
            return res.status(201).json(user);
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

};