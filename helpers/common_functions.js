import fetch from 'node-fetch'
import * as dotenv from 'dotenv';

dotenv.config({path: '.env'})

async function getCapMark(){
  const apikey = process.env.APIKEY
  const data = ["AAPL", "GOOGL", "AMZN", "TSLA", "FB", "TWTR", "UBER", "LYFT", "SNAP", "SHOP"]
  let stocks = await Promise.all(data.map(stock =>
    fetch(`https://financialmodelingprep.com/api/v3/market-capitalization/${stock}?apikey=${apikey}`)
      .then(res=>res.json())
      .then(info=> ({
        symbol: info[0]?.symbol,
        marketCap: info[0]?.marketCap,
        })
      )
    )
  )

  return stocks
}

const calcular = (data)=>{
  const total = data.sum = data.reduce((sum, value) => sum + value.marketCap, 0)
  

  return total
}

export {
  getCapMark,
  calcular
}
