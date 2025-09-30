import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
    const location = useLocation();
  if (user) {
    return children;
  }
  if (loading) {
    return (
      <div className="flex items-center justify-center my-10">
        <span className=" loading loading-bars loading-3xl"></span>
      </div>
    );
  }
  
  return <Navigate to='/Login' state={{ from: location }} replace></Navigate>
}
