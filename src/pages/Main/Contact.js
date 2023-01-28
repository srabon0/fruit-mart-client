import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const currentUser = useSelector((state)=>state.userState.authUser);
  const navigate = useNavigate()
  if(currentUser?.role==="Admin"){
    return (
      <div>
          If admin true this page will load or it will not load
      </div>
  );

  }else{
    navigate('/login');
  }
    
};

export default Contact;