import {get,post} from "./restClient";

export const login = async (username, password) => {
    try{
        console.log(username , password)
        const response = await post(`${process.env.REACT_APP_API_ENDPOINT}/v1/login`, {username, password});
        return response;
    }
    catch (err){
        throw err;
    }
}

export const register = async (username, password) => {
    try{
        const response = await post(`${process.env.REACT_APP_API_ENDPOINT}/register`, {username, password});
        return response;
    }
    catch (err){
        throw err;
    }
}