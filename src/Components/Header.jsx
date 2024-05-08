import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { GiLaptop } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
  
function Header() {

  const [token,setToken] = useState(false)
  const navigate = useNavigate()
  const logout=()=>{
    sessionStorage.clear()
    navigate('/')
  }
  useEffect(() =>{
    if(sessionStorage.getItem("token")){
      setToken(true);
    }
    else{
      setToken(false)
    }
  },[token])

  return (
    <div>
        {
          
          <MDBNavbar light bgColor='black'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='/' className='text-light fs-2 m-2'>
            <GiLaptop className='text-light fs-1 mx-2' />    
              Project Fair
            </MDBNavbarBrand>
            <button onClick={logout} className=' btn text-light'><MdLogout  className='fs-1'/></button>
          </MDBContainer>
        </MDBNavbar>
        
        }
    </div>
  )
}

export default Header