import React from 'react'
import StudentNavbar from './Navbar'
import {useLocation} from 'react-router-dom';

export default function Studentdashboard() {
  const location = useLocation();
  const loginUser = location.state.user;
  console.log('location',location);
  return (
    <>
    {/* <h1>Welcome Back, {loginUser.first_name} </h1> */}
    <StudentNavbar loginUser={loginUser}></StudentNavbar>
    </>
  )
}
