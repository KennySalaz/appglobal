import React from 'react'
import { Routes, Route, } from "react-router-dom";
import Page from '../Componentes/Landing/Page';
import Error404 from '../Componentes/Pages/Error 404/Error404';
import SignIn from '../Componentes/Pages/Login/SignIn';
import SignUp from '../Componentes/Pages/Login/SignUp';

import MessageVerficate from '../Componentes/MessageVerficate';


const IndexRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Page />} />
            <Route path='/signIn'  element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/messageVerficate' element={<MessageVerficate />} />
            <Route path='*' element={<Error404 />} />
            
        </Routes>
    )
}

export default IndexRoutes