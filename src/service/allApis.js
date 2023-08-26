import BASE_URL from "./base_url"
import { commonRequest } from "./commonRequest"



// register
export const registerApi=async(header,body)=>{
    return await commonRequest("POST",`${BASE_URL}/employees/register`,body,header)
}

// get all employees

// add

// edit

// delete