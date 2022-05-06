import React from 'react'
import DashBoardMain from '../Componentes/Pages/DashBoard/DashBoardMain'
import Error404 from '../Componentes/Pages/Error 404/Error404'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
 

const Dashboardroutes = () => {
     return (
        <>
            <Routes>
                <Route path="/dashBoardMain" element={<DashBoardMain />} />
              
            </Routes>



        </>
    )
}

export default Dashboardroutes
