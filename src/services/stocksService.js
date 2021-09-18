import http from '../config/http'

const pathStocks = '/stocks'

export const getStocksService = () => http.get(pathStocks)
export const getStocksByIdService = (id) => http.get(`${pathStocks}/${id}`)
export const postStockOrder = (id, data) => http.post(`${pathStocks}/${id}/order`,
    {
        userName: data.user.userName,
        userEmail: data.user.userEmail,
        orderData: data.inputFields
    })