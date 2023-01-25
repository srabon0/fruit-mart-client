import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from '../../../firebase.init'

import useAdmin from '../../../components/Login/useAdmin'

const RequireAdmin = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin,adminLoading] = useAdmin(user)
  const location = useLocation();
  if (loading|| adminLoading) {
    return <p>Loadig Admin</p>;
  }
  if (!user || !admin) {
      
    //   signOut(auth)
    
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;