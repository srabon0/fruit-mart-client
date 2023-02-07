import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from '../../../firebase.init'
import { useSelector } from "react-redux";

const RequireAdmin = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const currentUserRole = useSelector((state) => state.userState.authUser.role);
  const location = useLocation();
  if (loading) {
    return <p>Loadig Admin</p>;
  }
  if (!user || currentUserRole!="Admin") {
      
    //   signOut(auth)
    
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;