import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../components/Login/useAdmin';
import auth from '../../firebase.init';

const Contact = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin,adminLoading] = useAdmin(user);
  if (loading||adminLoading) {
    return <p>Loading user and admin</p>;
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
    return (
        <div>
            If admin true this page will load or it will not load {admin}
        </div>
    );
};

export default Contact;