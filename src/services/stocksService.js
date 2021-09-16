import http from '../config/http'

const pathStocks = '/stocks'

export const getStocksService = () => http.get(pathStocks)
export const getStocksByIdService = (id) => http.get(`${pathStocks}/${id}`)