import Lugares from "../models/Lugares";

import * as Yup from "yup";

export default {
  async uploadImage(req, res) {
    // const local  = req.file.path;
    // const { id, nome, descricao } = req.params;

    const local = req.file.path;
    const {id, nome, descricao, avaliacao} = req.params;

    console.log(local);
    console.log(nome);

    try {
      const user = await Lugares.create({
        image: local,
        tipo_id: id,
        nome_local: nome,
        descricao,
        avaliacao,
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

  async getItens(req, res){

    const {id} = req.params;
    
    console.log(id);

  
    try{

      const usuario = await Lugares.findAll({
        where: {
          tipo_id: id,
        },
      });

      if (!usuario[0])
      return res.status(400).json({
        erro: true,
        mensagem: "Não existem registros cadastrados ainda!",
      });

      return res.status(200).json(usuario)

    }catch(err){
      return res.status(400).json({
        error: true,
        messagem: "Erro!"
      });
    }
  }
};
