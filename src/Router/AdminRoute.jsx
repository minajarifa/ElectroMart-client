import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

export default function AdminRoute({ children }) {
  const {user, loading} = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (user && isAdmin) {
    return children;
  }
  if (loading || isAdminLoading) {
    return (
      <div className="flex items-center justify-center my-10">
        <span className=" loading loading-bars loading-3xl"></span>
      </div>
    );
  }
  return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
}