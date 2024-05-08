import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaEdit } from "react-icons/fa";
import { serverURL } from '../Services/serverURL';
// import { updateUserProject } from '../../../project-fair-backend/Controllers/projectController';
import { updateAUserprojectAPI } from '../Services/allAPIs';
import { editProjectResponseContext } from '../ContextAPI/ContextShare';

function EditProject({projects}) {
  //context API
  const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)

  console.log(projects);
  const [preview,setPreview] = useState("") //1
  const [projectData,setProjectdata] = useState({   //2
    id: projects._id,
    title:projects.title,
    language:projects.language,
    github:projects.github,
    livelink:projects.livelink,
    overview:projects.overview,
    projectImage:""
  })
  const [fileStatus,setFileStatus] =  useState(false) //3
  const [show, setShow] = useState(false); //4
  const handleClose = () => {
    setShow(false);
    setProjectdata({   //2
    id: projects._id,
    title:projects.title,
    language:projects.language,
    github:projects.github,
    livelink:projects.livelink,
    overview:projects.overview,
    projectImage:""
    })
    setPreview("")
  } //5

  const handleShow = () => setShow(true); //6

  useEffect(()=>{
    console.log(projectData.projectImage.type);
    if(projectData.projectImage.type=="image/png" || projectData.projectImage.type=="image/jpeg" || projectData.projectImage.type=="image/jpg"){
      console.log("generate image url");
      
          //file to url conversion
          console.log(URL.createObjectURL(projectData.projectImage));
          setPreview(URL.createObjectURL(projectData.projectImage))
          setFileStatus(false)
    }
    else{
      setFileStatus(true)
      console.log("Please upload following image extension(png,jpeg,jpg) only...");
    }
  },[projectData.projectImage]) //7

  const updateProject= async()=>{
    const {id,title,language,github,livelink,overview,projectImage} = projectData
    //request Body
    const reqBody = new FormData()
    reqBody.append("title",title),
    reqBody.append("language",language),
    reqBody.append("github",github),
    reqBody.append("livelink",livelink),
    reqBody.append("overview",overview),
    preview? reqBody.append("projectImage",projectImage): reqBody.append("projectImage",projects.projectImage)
    
    //req header
    const token = sessionStorage.getItem("token");

    //if there is a change in image
    if(preview){
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }

      //api call
      const result = await updateAUserprojectAPI(id,reqBody,reqHeader)
      console.log(result);
      if(result.status==200){
        alert("project updated")
        handleClose()
        setEditProjectResponse(result.data)
      }
      else{
        alert("Project not updated")
        setEditProjectResponse(result.response.data)
      }
    }
    else{
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

      //api call
      const result = await updateAUserprojectAPI(id,reqBody,reqHeader)
      console.log(result);
      if(result.status==200){
        alert("project updated")
        handleClose()
        setEditProjectResponse(result.data)
      }
      else{
        alert("Project not updated")
        setEditProjectResponse(result.response.data)
      }
    }
    }
  
  

  return (
    <div>
       <Button className='btn' onClick={handleShow}> <FaEdit /></Button>
       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-6 mt-4 p-5'>
              <label>
                <input onChange={e=>setProjectdata({...projectData,projectImage:e.target.files[0]})} type="file" style={{display:'none'}}/>
                <img  width={'300px'} src={preview?preview:`${serverURL}/uploads/${projects.projectImage}`} alt=""/>
              </label>
              
              {
                fileStatus && <p className='text-danger m-2'>*Please upload following image extension(png,jpeg,jpg) only...</p>
              }

            </div>
              <div className='col-6 text-center'>
                <input type="text" onChange={e=>setProjectdata({...projectData,title:e.target.value})} value={projectData.title} placeholder='project title' className='form-control mb-3'/>
                <input type="text" onChange={e=>setProjectdata({...projectData,language:e.target.value})} value={projectData.language} placeholder='Languages Used' className='form-control mb-3'/>
                <input type="text" onChange={e=>setProjectdata({...projectData,github:e.target.value})} value={projectData.github} placeholder='Git hub Link' className='form-control mb-3'/>
                <input type="text" onChange={e=>setProjectdata({...projectData,livelink:e.target.value})} value={projectData.livelink} placeholder='Live Link' className='form-control mb-3'/>
                <input type="text" onChange={e=>setProjectdata({...projectData,overview:e.target.value})} value={projectData.overview} placeholder='Overview' className='form-control mb-3'/>
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-conntent-between'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" onClick={updateProject}>
            Update
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditProject