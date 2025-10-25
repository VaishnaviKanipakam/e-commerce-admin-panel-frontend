import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";


const ProtectedRoute = ({allowedRoles, children}) => {
    const jwtToken = Cookies.get("jwt_token");
      const decoded = jwtDecode(jwtToken)
      const role = decoded.userType
      const navigate = useNavigate()
        //   let user = JSON.parse(localStorage.getItem('userObject'));

      if (jwtToken === undefined){
        return navigate('/login', { replace: true })
      }

      if(!allowedRoles.includes(role)){
        return <Navigate to="/not-found" replace />
        // return navigate("/not-found")
      }
    
  return children
}

export default ProtectedRoute
