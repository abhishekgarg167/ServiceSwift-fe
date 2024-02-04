import { publicRequest,privateRequest } from "./axios-config";

const signupService=(data)=>{
    console.log("signupService")
    return publicRequest.post("user/signup-process",data)
}

const loginService=(data)=>{
    return publicRequest.post("user/login-process",data)
}

const getUserService=(data)=>{
    console.log("getUserService")
    return privateRequest.get("/user/currentUser")
}

export {signupService, getUserService, loginService}