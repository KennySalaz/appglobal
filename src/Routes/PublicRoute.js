import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {


  return localStorage.getItem('idToken') ? <Navigate to={'/dashBoardMain'}/>   :  <Outlet /> 
}

export default PublicRoute