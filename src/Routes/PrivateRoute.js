import { Navigate , useLocation} from 'react-router-dom';


export const PrivateRoute = ({ children }) => {

    let location = useLocation();

    if (localStorage.getItem('idToken')) {
        return children;
      } else {
      
        return <Navigate to="/signIn" state={{ from: location }} replace />;
      }

    
}
