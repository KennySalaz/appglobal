import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {


  return localStorage.getItem('idToken') ? <Outlet />  : <Navigate to={'/'}/>
}

export default PrivateRoute