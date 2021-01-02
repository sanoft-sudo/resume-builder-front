
import React, { useRef, useState } from "react";
import {useForm} from "react-hook-form";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import "./SignUpForm.css"
import SignInWithGoogle from "./SignInWithGoogle";
const eye = <i class="far fa-eye"></i>
const eyeSlash = <i class="far fa-eye-slash"></i>
export default function SignUp() {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  const initialUser = {
        username: "",
        email: "",
        user_role:"",
        password: "",
  }
  const [user, setUser] = useState(initialUser);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  console.log("userinState", user);

  const handleChange = (e) => {
    if (e.target.value !== "admin") {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      });
    } else {
      alert("You can't take 'admin' as a username");
    }
  };
  password.current = watch("password", "");
  const onSubmit = (e) => {
    // e.preventDefault();
    setUser(initialUser)
    setPasswordShown(false)
  };

  console.log("registered user", user);
  return (
            <div className="sign__upBox">
            <form onSubmit={handleSubmit(onSubmit)} className="signup__form" id={"signup__form"} autoComplete="off">
      
                <div className="form__checkboxContainer">
                    <div className="form__checkbox">
                        <label>
                            <input type="radio" name="user_role" value="employer" required onChange={e=>handleChange(e)} />
                            <img className="radio__image" src="../../../assets/images/employer.png"/>
                            <p className="radio__title">EMPLOYER</p>
                        </label>
                    </div>
                    <div className="form__checkbox">
                        <label>
                            <input type="radio" name="user_role" value="employee" required  onChange={e=>handleChange(e)}/>
                            <img className="radio__image" src="../../../assets/images/employee.png"/>
                            <p className="radio__title">EMPLOYEE</p>
                        </label>
                    </div>
                </div>
                {errors.user_role && errors.email.user_role}
                <div className=" signup__email">
                    <i className="far fa-envelope signup__emailIcon"></i>
                <FormControl className="signUpInput__container">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        name="email"
                        id="email"
                        type="email"
                        required
                        milti
                        autoComplete="off"
                        placeholder="Email"
                        onChange={(e) => handleChange(e)}
                        value={user?.email}
                        ref={register({
                        required: true,

                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                        })}
                    />  
                </FormControl>
                </div>
                {errors.email && errors.email.message}

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
                        value={user.username}
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
                        value={user.password}
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

                {/* <FormControl className="signUpInput__container">
                <InputLabel htmlFor="password_repeat">Confirm password</InputLabel>
                <Input
                    name="password_repeat"
                    id="password_repeat"
                    type="password"
                    multi
                    placeholder="Re-type password"
                    onChange={(e) => handleChange(e)}
                    ref={register({
                    validate: (value) =>
                        value === password.current || "The passwords do not match"
                    })}
                />
                </FormControl>
                {errors.password_repeat && <p>{errors.password_repeat.message}</p>} */}
                
                    <Button variant="contained" className="signUp__submitBtn" type="submit"> sign up </Button>
                
            </form>
            <p className="sign__upOr">or</p>
            <div className="sign__upWithSocials">
                <SignInWithGoogle/>
            </div>
            </div>
   
  );
}

