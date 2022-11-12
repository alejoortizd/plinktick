import fetch from 'node-fetch'
import * as dotenv from 'dotenv';

dotenv.config({path: '.env'})

async function getStockPrices(){
  const apikey = process.env.APIKEY
  const data = ["AAPL", "GOOGL", "AMZN", "TSLA", "FB", "TWTR", "UBER", "LYFT", "SNAP", "SHOP"]
  let stocks = await Promise.all(data.map(stock =>
    fetch(`https://financialmodelingprep.com/api/v3/quote-short/${stock}?apikey=${apikey}`)
      .then(res=>res.json())
      .then(info=> ({
        symbol: info[0]?.symbol,
        price: info[0]?.price,
        })
      )
    )
  )

  return (stocks.sort((a, b) => {return b.price - a.price;}))
}

const calcular = (cantidad, data)=>{
  data.sum = data.reduce((sum, value) => sum + value.price, 0)

  let newData = data.map(stock => {
    return {
      ...stock,
      equivalencia: (stock.price / data.sum).toFixed(4)
    }
  }).map(stock => {
    return {
      symbol: stock.symbol,
      price: stock.price,
      accionesComprar: (stock.equivalencia * cantidad) / stock.price,
      totalInvertido: stock.equivalencia * cantidad,
    }
  })

  newData.total = newData.reduce((sum, value) => sum + value.totalInvertido, 0)
  newData.saldoDespuesInvertir = cantidad - newData.total

  return newData
}

export {
  getStockPrices,
  calcular
}
