import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import programmer from '../assets/programmer.jpg'
import ProjectCard from '../Components/ProjectCard'
import { getHomeProjectAPI } from '../Services/allAPIs'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { GiLaptop } from "react-icons/gi";

function Home() {

  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [homeProject,setHomeProject] = useState([])

  const getHomeProject=async(req,res)=>{
    //API Call
    const result = await getHomeProjectAPI()
    console.log(result);
    if(result.status==200){
      setHomeProject(result.data)
      console.log(homeProject);
    }
    else{
      console.log(result.response.data);
    }
  }
 
  
  useEffect(()=>{
        getHomeProject()
        if(sessionStorage.getItem("token")){
          setIsLoggedIn(true)
        }
        else{
          setIsLoggedIn(false)
        }
  },[])
  
  return (
    <div>
       <MDBNavbar light bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-light fs-2 m-2'>
          <GiLaptop className='text-light fs-1 mx-2' />    
            Project Fair
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      
        <div className='row'>
            <div className='col-6'>
                <h1 className='text-center mt-5'>Project Fair</h1>

                <p style={{textAlign:'justify'}} className='mx-5'>Project management is the practice of using knowledge, skills, tools, and techniques to complete a series of tasks to deliver value and achieve a desired outcome. A project is a series of structured tasks, activities, and deliverables that are carefully executed to achieve a desired outcome. They are temporary efforts to create value through unique products, services and processes. Each aspect of a project must go through the phases of the project lifecycle before reaching an end goal. This lifecycle allows project managers to execute each phase of their project effectively. It enables them to plan each task and activity meticulously, ensuring the highest chances of a project’s success.</p>

               {
                isLoggedIn?  <div className='text-center'>
                <Link to={'/dashboard'}>
                <button className='btn btn-dark mt-2 mb-5'>Manage Your Projects</button>
                </Link>
            </div> :

                    <div className='text-center'>
                    <Link to={'/login'}>
                <button className='btn btn-dark mt-2 mb-5'>Get Started</button>
                </Link>

                </div>
               }

            </div>
          <div className='col-sm-6'>
            <img src={programmer} width={'110%'} height={'110%'} alt="" />

          </div>

        </div>
        <div className='row'>
            <div className='col-12' style={{height:'500px'}}>

                <h1 className='text-center m-5'>Explore Our Projects</h1>
                <marquee width='100%' direction="left" height="400px">
                <div className='row'>
                   {
                    homeProject.length>0?homeProject.map(item=>(
                      <div className='col'>
                    <ProjectCard project={item}/>        
                </div>
                    )):'<h1 className:"text-light">Null</h1> '   
                   }
                   </div>
                </marquee>
            </div>
        </div>
        <div className='row mx-5 mb-5'>
            <h1 className='text-center m-5'>Our  Services</h1>
            <div  className='col-md-4'>
                <div className='card  shadow p-5' style={{height:'550px'}}>
                    <h3 className='text-center m-2'>Web Designing</h3>
                    <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel eius, iusto quo, quis ipsum accusamus aliquam ipsa doloremque asperiores nostrum in temporibus dolor facere minima perferendis sint placeat earum nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem hic incidunt, magnam aspernatur deserunt consequatur nihil earum doloremque exercitationem? Repellendus voluptatum sapiente similique, praesentium eos adipisci recusandae dolorem aspernatur veniam?</p>
                </div>
        </div>

        <div className='col-md-4'>
      <div className='card shadow p-5'style={{height:'550px'}}>
      <h3 className='text-center m-2'>Single Page Application</h3>
      <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel eius, iusto quo, quis ipsum accusamus aliquam ipsa doloremque asperiores nostrum in temporibus dolor facere minima perferendis sint placeat earum nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem hic incidunt, magnam aspernatur deserunt consequatur nihil earum doloremque exercitationem? Repellendus voluptatum sapiente similique, praesentium eos adipisci recusandae dolorem aspernatur veniam?</p>
     </div>
 </div>

 <div className='col-md-4'>
    <div  className='card shadow p-5'style={{height:'550px'}}>

     <h3 className='text-center m-2'>Back-end Services</h3>
      <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel eius, iusto quo, quis ipsum accusamus aliquam ipsa doloremque asperiores nostrum in temporibus dolor facere minima perferendis sint placeat earum nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem hic incidunt, magnam aspernatur deserunt consequatur nihil earum doloremque exercitationem? Repellendus voluptatum sapiente similique, praesentium eos adipisci recusandae dolorem aspernatur veniam?</p>
    </div>

 </div>

        </div>
    </div>
  )
}

export default Home