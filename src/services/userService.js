import http from '../config/http'

const pathUser = '/user'

export const getUserByEmail = (emailRequest) => http.get(`${pathUser}/${emailRequest}`)