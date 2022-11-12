import bodyParser from "body-parser";
import express from "express";

import valorTotalStocks from './routes/capMarkRoutes.js'

const app = express();

app.use(bodyParser.json());


app.use("/", valorTotalStocks)


// definir puerto y arrancar proyecto
const port = 3000;
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
