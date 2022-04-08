import { Navigate , useLocation} from 'react-router-dom';


export const PublicRoute = ({ children }) => {

    let location = useLocation();

    if (localStorage.getItem('idToken')) {

        return <Navigate to="/" state={{ from: location }} replace />;
      
      } else {
      
        return children;
      }

    
}
