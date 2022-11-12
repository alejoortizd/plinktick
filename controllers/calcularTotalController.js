import { getCapMark, calcular } from "../helpers/common_functions.js";


const valorTotalStocks = async (req, res)=>{
  let data = await getCapMark()
  let total = calcular(data)
  
  res.status(200).json(total)

}

export {
  valorTotalStocks
}
