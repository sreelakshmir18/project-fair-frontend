import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";


//Register API Call

export const registerAPI = async(user)=>{
    return await commonAPI("post",`${serverURL}/register`,user,"")
}

//Login API Call

export const loginAPI = async(user)=>{
    return await commonAPI("post",`${serverURL}/login`,user,"")
}

//add project API  call

export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("post",`${serverURL}/project/add-project`,reqBody,reqHeader)
}

// Get Home Project API Call

export const getHomeProjectAPI = async()=>{
    return await commonAPI("get",`${serverURL}/project/home-project`,"","")
}

//Get All users project API Call

export const getUsersProjectAPI = async(searchKey,reqHeader)=>{
    return await commonAPI("get",`${serverURL}/project/all-user-project?search=${searchKey}`,"",reqHeader)
}

// Get particular user project API Call
export const getAUserProjectAPI = async(reqHeader)=>{
    return await commonAPI("get",`${serverURL}/project/get-auser-project`,"",reqHeader)
}

// Delete particular user project API Call
 export const deleteAUserProjectAPI = async(projectId,reqHeader)=>{
    return await commonAPI("delete",`${serverURL}/project/delete-user-project/${projectId}`,{},reqHeader) 
 }

 //update a user project API Call
 export const updateAUserprojectAPI = async(projectId,reqBody,reqHeader)=>{
    return await commonAPI("put",`${serverURL}/project/update-user-project/${projectId}`,reqBody,reqHeader)
 }






