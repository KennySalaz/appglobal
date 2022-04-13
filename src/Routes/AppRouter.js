import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import Page from '../Componentes/Landing/Page'
import DashBoardMain from '../Componentes/Pages/DashBoard/DashBoardMain'
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import SignIn from '../Componentes/Pages/Login/SignIn'
import SignUp from '../Componentes/Pages/Login/SignUp'
import Products from '../Componentes/Pages/DashBoard/PagesDashboard/Products'
import Profile from '../Componentes/Pages/DashBoard/PagesDashboard/Profile'
import Error404 from '../Componentes/Pages/Error 404/Error404'
import RecuperatePassword from '../Componentes/Pages/Login/RecuperatePassword';

export const AppRouter = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Page />} />
                <Route element={<PublicRoute />} >
                    <Route path='/signIn' element={<SignIn />} />
                    <Route path='/signUp' element={<SignUp />} />
                    <Route path='/recuperatePassword' element={<RecuperatePassword />} />
                </Route>
                <Route element={<PrivateRoute />} >
                    <Route path='/dashBoardMain' element={<DashBoardMain />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/profile' element={<Profile />} />
                </Route>
                <Route path='*' element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}
