import axios from "axios";

let baseURL="https://serviceswift-backend.onrender.com"

const publicRequest=axios.create({baseURL,})

const privateRequest=axios.create({baseURL,})

privateRequest.interceptors.request.use((config)=>{
    const token=localStorage.getItem("token")
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config
})

export {publicRequest,privateRequest}