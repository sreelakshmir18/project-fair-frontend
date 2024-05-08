import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getAUserProjectAPI } from '../Services/allAPIs';
import { deleteAUserProjectAPI} from '../Services/allAPIs';
import { editProjectResponseContext, addProjectResponseContext } from '../ContextAPI/ContextShare';
import EditProject from './EditProject';

function MyProject() {

    const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)
    const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)

    const [userProjects,setUserProjects] = useState([]) 

    const getUserProject = async()=>{

        //token?
        if(sessionStorage.getItem("token")){
            const token = sessionStorage.getItem("token");

            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+token
            }

            //api call
            const result = await getAUserProjectAPI(reqHeader)
            console.log(result);
            setUserProjects(result.data)
          }

    }

    useEffect(()=>{
        getUserProject()
    },[addProjectResponse,editProjectResponse])

    const deleteUserProject = async(pid)=>{
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader ={
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
            const result = await deleteAUserProjectAPI(pid,reqHeader)
            console.log(result);
            alert("Project Deleted Successfully")
            getUserProject()
        }
    }
    
   

  return (
    <div>
        <div className='d-flex justify-content-between'>
            <h3 className='ms-5'>My Projects</h3>
            <AddProject/>
        </div>

        {
           userProjects.length>0?userProjects.map(item=>(
                <div className='row shadow m-4 p-5 border'>
                <div className='col-6'>
                    <h4>{item.title}</h4>
                </div>
                <div className='col-6 d-flex justify-content-evenly'>
                    <button className='btn'><a href={item.github}><FaGithub /></a></button>

                   <EditProject projects={item}/>
                    <button onClick={()=>deleteUserProject(item._id)} className='btn'><RiDeleteBin5Fill /></button>
                </div>
            </div>
            )):"No Projects"
        
        }
    </div>
  )
}

export default MyProject