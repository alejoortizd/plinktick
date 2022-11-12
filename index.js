import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.json());


// definir puerto y arrancar proyecto
const port = 3000;
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
