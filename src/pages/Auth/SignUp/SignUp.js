import React, { useState } from 'react';
import auth from '../../../firebase.init';
import { NavLink, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useToken from '../../../components/Login/useToken';

const SignUp = () => {
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    
    const [token] = useToken(user);
    
      if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if(token){
        console.log(user);
        navigate("/");
        
      }
    const handleSignUp = async(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password =  e.target.password.value;
        if(email && password){
            console.log("Signuup component complete", email, password)
            await createUserWithEmailAndPassword(email, password);
        }else{
            return
        }

    }
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up For FruitMart</h1>
          <p className="py-6">
            To Order fresh Furits from the fruitMart you must be a valid user.
          </p>
        </div>
        <form className="w-4/5"  onSubmit={handleSignUp}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="SignUp" className="btn bg-green-500 text-black" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
};

export default SignUp;