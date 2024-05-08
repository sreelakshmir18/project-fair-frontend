import React, { useContext,useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectAPI } from '../Services/allAPIs';
import { addProjectResponseContext } from '../ContextAPI/ContextShare';
function AddProject() {

  //set context
  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext) //7


  const [preview,setPreview] = useState("") //1
  const [fileStatus,setFileStatus] =  useState(false) //3
  const [projectData,setProjectdata] = useState({ //2
    title:"",
    language:"",
    github:"",
    livelink:"",
    overview:"",
    projectImage:"",
  })

  //To hold Token
  const [token,setToken] = useState("")

  console.log(projectData);

  const [show, setShow] = useState(false); //4

  const handleClose = () => setShow(false); //5
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
    },[projectData.projectImage])

    const handleAddProject = async()=>{
      //data passing
      const {title,language,github,livelink,overview,projectImage} = projectData

      if(!title||!language||!github||!livelink||!overview||!projectImage){
        alert("Please fill the following fields")
      }
      else{
        const reqBody = new FormData()
        reqBody.append("title",title)
        reqBody.append("language",language)
        reqBody.append("github",github)
        reqBody.append("livelink",livelink)
        reqBody.append("overview",overview)
        reqBody.append("projectImage",projectImage)

         if(token){
          const reqHeader ={
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
  
          }
        //api call 
        const result = await addProjectAPI(reqBody, reqHeader)
        console.log(result);
        if(result.status==200){
          alert("Project added successfully");
          setAddProjectResponse(result.data)
          handleClose()
          setProjectdata({title: '',
          language: '',
          github: '',
          livelink: '',
          overview: '',
          projectImage: ''})
          setPreview("")
        }
        else{
          alert(result.response.data)
        }
      }
    }
  }

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
          setToken(sessionStorage.getItem("token"));
        }
        else{
          setToken("")
        }
    },[])

    console.log(token);

  return (
    <div>
      <button className='btn btn-light text-dark m-5' onClick={handleShow}>Add</button>
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
                <img  width={'300px'} src={preview?preview:'https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif'} alt=''/>
              </label>
              
              {
                fileStatus && <p className='text-danger m-2'>*Please upload following image extension(png,jpeg,jpg) only...</p>
              }

            </div>
              <div className='col-6 text-center'>
                <input type="text" onChange={e=>setProjectdata({...projectData,title:e.target.value})} placeholder='project title' className='form-control mb-3'/>
                <input type="text" onChange={e=>setProjectdata({...projectData,language:e.target.value})} placeholder='Languages Used' className='form-control mb-3'/>
                <input type="text" onChange={e=>setProjectdata({...projectData,github:e.target.value})} placeholder='Git hub Link' className='form-control mb-3'/>
                <input type="text" onChange={e=>setProjectdata({...projectData,livelink:e.target.value})} placeholder='Live Link' className='form-control mb-3'/>
                <input type="text" onChange={e=>setProjectdata({...projectData,overview:e.target.value})} placeholder='Overview' className='form-control mb-3'/>
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-conntent-between'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddProject} variant="light">
            Add
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject