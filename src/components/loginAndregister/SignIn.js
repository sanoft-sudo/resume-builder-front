
import React, { useRef, useState } from "react";
import {useForm} from "react-hook-form";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import "./SignUpForm.css";
import SignInWithGoogle from "./SignInWithGoogle";
const eye = <i class="far fa-eye"></i>
const eyeSlash = <i class="far fa-eye-slash"></i>
export default function SignUp() {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  const initialuserLogin = {
        username: "",
        password: "",
  }
  const [userLogin, setUserLogin] = useState(initialuserLogin);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  console.log("userLogin", userLogin);

  const handleChange = (e) => {
      setUserLogin({
        ...userLogin,
        [e.target.name]: e.target.value
      });
  };
  password.current = watch("password", "");
  const onSubmit = (e) => {
    // e.preventDefault();
    setUserLogin(initialuserLogin)
    setPasswordShown(false)
  };

  return (
      <div className="signIn__container">
          <div className="signIn__imageBox">
              <img className="signIn__image" src="../../../assets/images/login_icon.png" alt=""/>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="signup__form" id={"signup__form"} autoComplete="off">
                <div className=" signup__email">
                <i className="fas fa-user-tie signup__userIcon"></i>
                <FormControl className="signUpInput__container ">
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input
                        name="username"
                        id="username"
                        milti
                        placeholder="Username"
                        required
                        autoComplete="off"
                        value={userLogin.username}
                        onChange={(e) => handleChange(e)}
                        ref={register({
                            required: true
                        })}
                    />
                </FormControl>
                </div>
                {errors.username && errors.username.message}

                <div className=" signup__email">
                <i className="fas fa-unlock-alt signup__passwordIcon"></i>

                <FormControl className="signUpInput__container">
                    <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                        name="password"
                        className="signup__passwordInput"
                        id="password"
                        required
                        multi
                        autoComplete="off"
                        placeholder="Password"
                        type={passwordShown ? "text" : "password"}
                        value={userLogin.password}
                        onChange={(e) => handleChange(e)}
                        ref={register({
                        required: true,
                        minLength: {
                            value: 6,
                            message: "Password must have at least 6 characters"
                        }
                        })}
                    />
                    <i className="signup__passwordShow" onClick={togglePasswordVisiblity}>{passwordShown?eye:eyeSlash}</i>
                </FormControl>
                 </div>
                {errors.password && <p>{errors.password.message}</p>}

                
                    <Button variant="contained" className="signUp__submitBtn" type="submit"> sign in </Button>
                
            </form>
            <p className="sign__upOr">or</p>
            <div className="sign__upWithSocials">
                <SignInWithGoogle/>
            </div>

      </div>
           
   
  );
}

