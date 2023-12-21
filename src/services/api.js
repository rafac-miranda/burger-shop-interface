import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'https://api-burger-shop-production.up.railway.app/' /// http://localhost:3001
})

apiCodeBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiCodeBurger
