import axios from "axios"
var service = axios.create({
    baseURL: "http://192.168.1.107:7001", //所有的请求都会带上 /api
    "content-type": "application/json",
    timeout: 5000
})
//请求拦截器
// service.interceptors.request.use((config)=>{
//     console.log("发请求了  以后要在这里带上令牌")
//     return config
// })

// 响应拦截器
// service.interceptors.response.use((rse) => {
//     return rse;
// })

export default service;