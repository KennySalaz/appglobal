import React from 'react'
import { Routes, Route, } from "react-router-dom";
import Page from '../Componentes/Landing/Page';
import SignIn from '../Componentes/Login/SignIn';
import SignUp from '../Componentes/Login/SignUp';


const IndexRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<Page />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
        </Routes>
    )
}

export default IndexRoutes
