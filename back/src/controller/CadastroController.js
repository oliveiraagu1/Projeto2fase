import Cadastro from "../models/Cadastro";
import * as Yup from "yup";

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
        .min(6, "Erro: Password deve ter no mínimo 6 caracteres!"),
    });

    try {
      await schema.validate(req.body);
      const { email, name, password } = req.body;
      const usuario = await Cadastro.findAll({
        where: {
          email,
        },
      });

      if (usuario[0])
        return res.status(400).json({
          erro: true,
          mensagem: "Usuário já cadastrado!",
        });

      const user = await Cadastro.create({
        email,
        name,
        password,
      });

      return res.status(201).json(user);
    } catch (err) {
      return res.status(400).json({
        erro: true,
        mensagem: err.errors,
      });
    }
  },

  async login(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string("Erro: Necessário preencher o campo e-mail!")
        .required("Erro: Necessário preencher o campo e-mail!")
        .email("Erro: Necessário preencher o campo com e-mail válido!"),
      password: Yup.string("Erro: Necessário preencher o campo password!")
        .required("Erro: Necessário preencher o campo password!")
        .min(6, "Erro: Password deve ter no mínimo 6 caracteres!"),
    });

    try {
      await schema.validate(req.body);
      const { email, password } = req.body;
      const login = await Cadastro.findOne({
        where: {
          email,
          password,
        },
      });

      if (!login)
        return res.status(400).json({
          erro: true,
          mensagem: "Erro: Não foi possível fazer login!",
        });

      if (login)
        return res.status(200).json({
          erro: false,
          login,
          mensagem: "Login realizado com sucesso!",
        });
    } catch (err) {
      return res.status(400).json({
        erro: true,
        mensagem: err.errors,
      });
    }
  },
  async getUsers(req, res) {
    const users = await Cadastro.findAll({
      order: [["id"]],
    });

    try {
      if (!users)
        return res.status(400).json({
          erro: true,
          messagem: "Erro: Nenhnum usuário encontrado!",
        });

      return res.status(200).json({
        erro: false,
        users,
      });
    } catch (err) {
      return res.status(400).json({
        erro: true,
        messagem: `Erro: ${err}`,
      });
    }
  },
  async deleteUser(req, res) {
    const { id } = req.params;
    const user = await Cadastro.destroy({
      where: {
        id,
      },
    });

    try {
      return res.status(200).json({
        erro: false,
        messagem: "Usuário apagado com sucesso!",
      });
    } catch (err) {
      return res.status(400).json({
        erro: true,
        messagem: "Erro: Usuário não foi apagado!",
      });
    }
  },
  async editName(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string("Erro: O campo Name é obrigátorio!")
        .required("Erro: O campo Name é obrigátorio!")
        .min(3, "Erro: O Campo Name precisa ter pelo menos 3 caracteres!"),
    });

    try {
      await schema.validate(req.body);
      const { name } = req.body;
      const { id } = req.params;
      const user = await Cadastro.update(
        {
          name,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(200).json({
        erro: false,
        messagem: "Foi alterado o nome com sucesso!",
      });
    } catch (err) {
      return res.status(400).json({
        erro: true,
        messagem: err.message,
      });
    }
  },
  async editPassword(req, res) {
    const schema = Yup.object().shape({
      password: Yup.string("Erro: Campo senha é obrigatório!")
        .required("Erro: Campo senha é obrigatório!")
        .min(6, "Erro: Campo senha precisa ter pelo menos 6 caracteres!"),
    });
    try {
      await schema.validate(req.body);
      const { password } = req.body;
      const { id } = req.params;
      const user = await Cadastro.update(
        {
          password,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(200).json({
        erro: false,
        messagem: "Foi alterada a senha com sucesso!",
      });
    } catch (err) {
      return res.status(400).json({
        erro: true,
        messagem: err.message,
      });
    }
  },
};
