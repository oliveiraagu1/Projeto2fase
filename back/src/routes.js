import express from "express";
import CadastroController from "./controller/CadastroController";
import LugaresController from "./controller/LugaresController";
import uploadImage from "./middlewares/uploadimage";

const routes = express.Router();

routes.get("/users", CadastroController.getUsers);
routes.post("/cadastro", CadastroController.cadastro);
routes.post("/login", CadastroController.login);
routes.delete("/delete/:id", CadastroController.deleteUser);
routes.patch("/editar/:id", CadastroController.editName);
routes.patch("/editarPass/:id", CadastroController.editPassword);

routes.post(
  "/upload-image/:id/:nome/:descricao/:avaliacao",
  uploadImage.single("image"),
  LugaresController.uploadImage
);
routes.get("/getItens/:id", LugaresController.getItens);


export default routes;
