import React, { useEffect } from "react";
import "../Styles/Login.css";
import signInLogo from "../assets/youtubeLogo.png";
import GoogleButton from "react-google-button";
import { UserAuth } from "../Context/AuthContext";
import {useNavigate} from "react-router-dom"


const Login = () => {

  const {googleSignIn , user} = UserAuth()

  const navigate = useNavigate()


  const signInWithGoogle = async() => {
   try {
    await googleSignIn()
   } 
   catch (error) {
    console.log(error)
   }
    };

    useEffect(()=>{

      if(user != null){
        navigate('/'); 
      }
      
    },[user,navigate])

  

  return (
    <div className="login__page">
      <div className="login__container">
        <div className="signIn__logo">
          <img
            src={signInLogo}
            alt={signInLogo}
            className="signIn__logo__img"
          />
        </div>
        <div className="signIn__btn">
          <GoogleButton className="btn" onClick={signInWithGoogle} />
        </div>
        
      </div>
    </div>
  );
};

export default Login;
