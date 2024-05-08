import React, { useEffect, useState } from 'react'
import ProjectCard from '../Components/ProjectCard'
import { getUsersProjectAPI } from '../Services/allAPIs'

function Projects() {

    const [searchKey,setSearchKey] = useState("") //1. To hold the search key

    const [AllUserProject,setAllUserProject] = useState([])

    const getAllUserProjects = async(req,res)=>{

    //get token ? authenticated
      if(sessionStorage.getItem('token')){
        const token = sessionStorage.getItem('token');

        //set request header
        const reqHeader ={
          "Content-Type": "application/json",
          "Authorization": "Bearer "+token
        }
        //api call
        const result = await getUsersProjectAPI(searchKey,reqHeader)
        console.log(result);
        if(result.status ===200){
          setAllUserProject(result.data)
        }
        else{
          //error
          console.log(result.response.data);
        }
      }
    
  }
 

  useEffect(()=>{
    getAllUserProjects()
  },[searchKey])

  return (
    <div>
      <h2 className='text-center m-4'>All Projects</h2>
      <input type= "text" onChange={e=>setSearchKey(e.target.value)} style={{width:'400px',marginLeft:'600px'}} placeholder='Search By technology' className='form-control mx-auto m-5'/>
      <div className='row'>
      {
        AllUserProject.length>0 ? AllUserProject.map(item=>(
          <div className='col m-2'>
          <ProjectCard project={item}/>
      </div>
        )):"Can't fetch All projects"
      }
      </div>
    </div>
  )
}

export default Projects