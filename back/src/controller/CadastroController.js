import Cadastro from '../models/Cadastro';
import * as Yup from 'yup';

export default {

    async cadastro(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string("Erro: Necessário preencher o campo e-mail!")
            .required("Erro: Necessário preencher o campo e-mail!")
            .email("Erro: Necessário preencher o campo com e-mail válido!"),
            name: Yup.string("Erro: Necessário preencher o campo name!")
            .required("Erro: Necessário preencher o campo name!")
            .min(3, "Erro: Name deve ter no mínimo 3 caracteres!"),
            password: Yup.string("Erro: Necessário preencher o campo password!")
            .required("Erro: Necessário preencher o campo password!")
            .min(6, "Erro: Password deve ter no mínimo 6 caracteres!")
        });

        try {
            await schema.validate(req.body);
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
            return res.status(400).json({
                erro: true,
                mensagem: err.errors
            });

        };
    },
    
    async login(req, res){
        const schema = Yup.object().shape({
            email: Yup.string("Erro: Necessário preencher o campo e-mail!")
            .required("Erro: Necessário preencher o campo e-mail!")
            .email("Erro: Necessário preencher o campo com e-mail válido!"),
            password: Yup.string("Erro: Necessário preencher o campo password!")
            .required("Erro: Necessário preencher o campo password!")
            .min(6, "Erro: Password deve ter no mínimo 6 caracteres!")
        });

        try {
            await schema.validate(req.body);
            const {email, password} = req.body;
            const login = await Cadastro.findOne({
                where: {
                    email,
                    password
                }
            });

            if(!login) return res.status(400).json({
                erro: true,
                mensagem: "Erro: Não foi possível fazer login!"
            });
    
            if(login) return res.status(200).json({
                erro: false,
                mensagem: "Login realizado com sucesso!"
            });

        }catch(err) {
            return res.status(400).json({
                erro: true,
                mensagem: err.errors
            });

        };
    },
};