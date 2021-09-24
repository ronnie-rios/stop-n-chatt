import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';
import signinImage from '../assets/signup.jpg';

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}


const Auth = () => {
    const [ form, setForm ] = useState(initialState);
    const [ isSignup, setIsSignup ] = useState(true);

    const handleChange=(e)=>{
        setForm({...form, [e.target.name]: e.target.value });
        console.log(form);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
    }

    const switchMode =()=> {
        setIsSignup((prevIsSignup)=> !prevIsSignup)
    }
    
    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? 'Sign-up' : 'Sign-in'}</p>
                    <form onSubmit={(handleSubmit)=>{}}>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                ></input>
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor="username">Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required
                                ></input>
                            </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    required
                                ></input>
                            </div>
                        )}
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarURL">Avatar URL</label>
                                <input
                                    name="avatarURL"
                                    type="text"
                                    placeholder="Avatar URL"
                                    onChange={handleChange}
                                    required
                                ></input>
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor="password">password</label>
                                <input
                                    name="password"
                                    type="text"
                                    placeholder="password"
                                    onChange={handleChange}
                                    required
                                ></input>
                            </div>
                        {isSignup && (   
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <input
                                name="confirmPassword"
                                type="text"
                                placeholder="confirm password"
                                onChange={handleChange}
                                required
                            ></input>
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_button">
                            <button>
                                {isSignup ? 'Sign Up': "Sign in "}
                            </button>
                        </div>
                    </form>
                        <div className="auth__form-container_fields-account">
                            <p>
                                {isSignup
                                ? "Already have an account>"
                                : "dont have an account?"
                                }
                                <span onClick={switchMode}>
                                    {isSignup? 'Sign in' : "Sign up"}
                                </span>
                            </p>
                        </div>
                </div>

            </div>
            <div className='auth__form-container-image'>
                <img src={signinImage} alt="sign in" />
            </div>
        </div>
    )
}

export default Auth
 