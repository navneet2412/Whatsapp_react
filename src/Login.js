import React from 'react';
import {Button} from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{},dispatch]= useStateValue();
    const signIn=()=>{
       auth.signInWithPopup(provider)
       .then((result)=>{
           dispatch({
               type:actionTypes.SET_USER,
               user:result.user,
           });
       })
       .catch((error)=>alert(error.message));
    };
    return (
      <div className="login">
        <div className="login_container">
          <img
            src="https://image.shutterstock.com/z/stock-vector-vampire-horror-logo-icon-vector-template-1768794029.jpg"
            alt=""
          />
          <div className="login_text">
            <h1>Sign in to Sasta-Clubhouse!</h1>
          </div>

          <Button type="submit" onClick={signIn}>
            Sign In With Google
          </Button>
        </div>
      </div>
    );
}

export default Login
