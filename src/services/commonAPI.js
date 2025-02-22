import axios from "axios";
import baseURL from "./baseURL";

const commonAPI = async (httpMethod,endPoint,requestBody)=>{
    let requestConfig = {
        method : httpMethod,
        url : baseURL + endPoint,
        data : requestBody

    }
    return await axios(requestConfig)
    .then((res)=>{
        return res;


    })
    .catch((err)=>{
        return err
    })
}

export default commonAPI