import axios from "axios"

const axiosInstance = axios.create({
    baseURL:"http://localhost:8989",
    withCredintial:true
})

export default axiosInstance;