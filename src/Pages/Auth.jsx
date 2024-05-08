import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginAPI, registerAPI } from '../Services/allAPIs'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { GiLaptop } from "react-icons/gi";

function Auth({register}) {

  const navigate = useNavigate()
const [userData,setUserData] = useState({  //To hold user data from form. 
  username:"",
  email:"",
  password:"",

})
const handleRegister = async(e)=>{
  e.preventDefault()
  if(!userData.username||!userData.email||!userData.password){
    Swal.fire({
      title: 'Error',
      text: 'Please fill Your Form Properly....!',
      icon: 'Warning',
      confirmButtonText: 'Back'
    })
  }
  else{
    //API Call to register
    const result = await registerAPI(userData)
    console.log(result);
    if(result.status==200){
      Swal.fire({
        title: 'Success',
        text: 'Successfully Registered',
        icon: 'success',
        confirmButtonText: 'Back'
      })

      setUserData({
        username:"",
        email:"",
        password:"",
      })
      //to navigate to login page
      navigate('/login')

    }
    else if(result.response.status==406){
      Swal.fire({
        title: 'Error',
        text: result.response.data,
        icon: 'error',
        confirmButtonText: 'Back'
      })
    }
  }
  console.log(userData);
}

//login 

const handleLogin = async(e)=>{
  e.preventDefault()
  if(!userData.email||!userData.password){
    Swal.fire({
      title: 'Error',
      text: 'Please fill Your Form Properly....!',
      icon: 'Warning',
      confirmButtonText: 'Back'
    })
  }
  else{
    //API Call to login
    const result = await loginAPI(userData)
    console.log(result);
    if(result.status==200){

      sessionStorage.setItem("username",result.data.existingUser.username)
      sessionStorage.setItem("token",result.data.token)



      Swal.fire({
        title: 'Success',
        text: 'Login Successfully',
        icon: 'success',
        confirmButtonText: 'Back'
      })

      setUserData({
        email:"",
        password:"",
      })
      //to navigate to Home page
      navigate('/')

    }
    else if(result.response.status==404){
      Swal.fire({
        title: 'Error',
        text: result.response.data,
        icon: 'error',
        confirmButtonText: 'Back'
      })
    }
  }
  console.log(userData);
}




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
      <div className='col-lg-6'>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/022/328/336/original/isometric-desktop-computer-coding-programming-technology-programming-concept-technology-animation-transparent-background-with-alpha-channel-free-video.jpg'
        width={'100%'} className='p-4' alt="" />

      </div>
<div className='col-lg-6'>
  <form className='shadow bg-black'>
    <h2 className='text-center m-5'>Project Fair</h2>
    <h4 className='text-center'>
{
  register? 'Register Here...' : 'Login Here...'
}
</h4>

<div className='mx-5 px-5 mt-3'>
  {
    register &&
    <input onChange={e=>setUserData({...userData,username:e.target.value})} value={userData.username} type='text' placeholder='Username' className='form-control mb-2'/>
  }

  <input onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email} type="text" placeholder='email' className='form-control mb-2'/>
  <input onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password} type="text" placeholder='password' className='form-control mb-2'/>

</div>

<div>
  {
    register ?
    <div className='text-center m-4'>
      <button onClick={handleRegister} className='btn btn-dark m-4'>Register</button>
      <p>Already registered? <Link to={'/login'}>Login here...</Link></p>
    </div>
    :
    <div className='text-center m-4'>
      <button onClick={handleLogin} className='btn btn-dark m-4'>Login</button>
      <p>New to here? <Link to={'/register'}>Register here...</Link></p>
    </div>
  }
</div>
  </form>

</div>
    </div>
    </div>
  )
}

export default Auth