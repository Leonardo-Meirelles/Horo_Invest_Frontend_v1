import http from '../config/http'

const pathOrder = '/orders'

export const deleteOrderById = (id) => http.get(`${pathOrder}/${id}/delete`)