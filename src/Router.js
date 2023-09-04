/*@Notes
This is the recommended router for all React Router web projects. 
It uses the DOM History API to update the URL and manage the history stack
*/
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Studentdashboard from './components/Student/Studentdashboard'
import Protectedroutes from './components/utils/Protectedroutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Protectedroutes Logincomponent={LoginSignup}/>
        // element: <LoginSignup />,
      }
    ]
  },
  {
    path: '/student',
    element: <Studentdashboard></Studentdashboard>
  }
])
  
  export default function Router() {
    return (
        <RouterProvider router={router} />
    )
  }
  