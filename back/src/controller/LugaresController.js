import Lugares from "../models/Lugares";

import * as Yup from "yup";

export default {
  async uploadImage(req, res) {
    const local = req.file.filename;
    const { id, nome, descricao, avaliacao, regiao } = req.params;

    try {
      const user = await Lugares.create({
        image: local,
        tipo_id: id,
        nome_local: nome,
        descricao,
        avaliacao,
        localidade: regiao,
      });

      return res.status(201).json({
        error: false,
        messagem: "Cadastrado com sucesso!",
        infos: req.body,
        img: req.file,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        error: true,
        messagem: "Erro: Não foi possível cadastrar!",
      });
    }
  },

  async getItens(req, res) {
    const { id, localidade } = req.params;

    try {
      const usuario = await Lugares.findAll({
        where: {
          tipo_id: id,
          localidade,
        },
      });

      if (!usuario[0])
        return res.status(400).json({
          erro: true,
          mensagem: "Não existem registros cadastrados ainda!",
        });

      return res.status(200).json({
        error: false,
        dados: usuario,
        url: "http://192.168.0.14:8081/files/users/",
      });
    } catch (err) {
      return res.status(400).json({
        error: true,
        messagem: "Erro!",
      });
    }
  },
  async getOneItens(req, res) {
    const { id } = req.params;

    try {
      const usuario = await Lugares.findByPk(id);

      if(usuario[0]){
        res.status(400).json({
          erro: true,
          messagem: "Erro, não há registros!"
        });
      }
      return res.status(200).json({
        erro: false,
        dados: usuario,
        url: "http://192.168.0.14:8081/files/users/"
      });
    } catch (err) {
      return res.status(400).json({
        error: true,
        messagem: "Erro: Não há registros!",
      });
    }
  },
};
