import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LandingRouter } from './LandingRouter';
import DashboardRoutes from './Dashboardroutes';







export const AppRouter = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PublicRoute>
                        <LandingRouter />
                    </PublicRoute>} />

                <Route path="/" element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </BrowserRouter>
    )
}
