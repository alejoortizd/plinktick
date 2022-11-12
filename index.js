import bodyParser from "body-parser";
import express from "express";


import ccaRoutes from './routes/ccaRoutes.js'

const app = express();

app.use(bodyParser.json());


app.use("/", ccaRoutes)

// definir puerto y arrancar proyecto
const port = 3000;
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
