import { getStockPrices, calcular } from "../helpers/common_functions.js";


const informacionStocks = async (req, res)=>{
  let data = await getStockPrices()
  const { cantidad } = req.body
  let total = calcular(cantidad, data)
  total == 0 ? total = {
    msg: 'No puedes comprar acciones con $0',
    "Precio Minimo de Accion": Math.min.apply(null,data.map(x=> x.price)) 
    }
    : 
    total
  
  res.status(200).json(total)

}

export {
  informacionStocks
}
