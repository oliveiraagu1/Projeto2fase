import Lugares from "../models/Lugares";

import * as Yup from "yup";

export default {
  async uploadImage(req, res) {
    // const local  = req.file.path;
    // const { id, nome, descricao } = req.params;

    const local = req.file.path;
    const {id, nome, descricao} = req.params;

    console.log(local);
    console.log(nome);

    try {
      const user = await Lugares.create({
        image: local,
        tipo_id: id,
        nome_local: nome,
        descricao,
        
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
};
