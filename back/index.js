import express from "express";
import path from "path";
import routes from "./src/routes";
import cors from "cors";

const app = express();

app.use('/files', express.static(path.resolve(__dirname, 'public', 'upload')));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
});


app.use(express.json());
app.use(routes);

app.listen(8081, () => {
  console.log("Servidor iniciado na porta 8081");
});
