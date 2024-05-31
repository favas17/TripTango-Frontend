const axios = require("axios")

const axiosInstance = axios.create({
    baseUrl:"http://localhost:8989",
    withCredintial:true
})

export default axiosInstance;