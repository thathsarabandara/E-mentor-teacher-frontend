'use client';
import React, { useState } from 'react'
import Input from '../../../../component/auth-input/AuthInputContainer'
import OAuthBtn from '../../../../component/O-Auth-Btn/OAuthBtn';
import axios from 'axios';

const Login = () => {
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
    const[error , setError] = useState('');
    const[emailError , setEmailError] = useState('');
    const[passwordError , setPasswordError] = useState('');
    
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
    
        if(!value){
            setEmailError('Field is required');
        } else if (!validateEmail(value)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };
    
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
    
        if (!value) {
            setPasswordError('Password is required');
        } else if (!validatePassword(value)) {
            setPasswordError('At least 8 charac., one upp. letter, one symbol,one number');
        } else {
            setPasswordError('');
        }
    };
    
    const validateEmail = (email:string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };
    
    const validatePassword = (password:string) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleGoogleAuth = () => {
    };

    const handleFacebookAuth = () => {
    };

    const handleAppleAuth = () => {
    };
    
    const handleSubmit = async (e:(React.MouseEvent<HTMLButtonElement>)) => {
        e.preventDefault();
      
        setError('');
        setEmailError('');
        setPasswordError('');
      
        if (!password || !email) {
          setError('All Fields are Required!');
        } else if (!validateEmail(email)) {
          setEmailError('Please enter a valid email address');
        } else if (!validatePassword(password)) {
          setPasswordError('Password must be at least 8 characters, contain at least one uppercase letter, one symbol, and one number');
        } else {
          setError('');
          setEmailError('');
          setPasswordError('');
      
          try {
            const response = await axios.post(
              `http://localhost:5000/auth/login`, 
              { email, password },
              { withCredentials: true }
            );
            setEmail('');
            setPassword('');
            window.location.reload();
          } catch (error) {
            console.log(error);
          }
        }
      };
      

  return (
    <div className='flex justify-center items-center p-16 min-h-screen bg-gray-100'>
        <div className='flex flex-col xl:flex-row justify-center items-center rounded-xl bg-white w-7/12'>
            <div className='w-1/2 overflow-hidden rounded-l-lg'>
                <img className='hidden md:block w-full h-full lg:w-[550px] lg:h-[650px] object-cover rounded-lg transform transition ease-in-out duration-300 hover:scale-110' src='/assets/images/login.png' alt='login' />
            </div>
            <div className='flex flex-col justify-center items-center my-6 w-1/2'>
                <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center drop-shadow-lg'>
                        <a href=''>
                            <img className='w-12 h-12 object-cover md:m-1 md:mx-4 md:w-20 md:h-20' src='/assets/images/logo.png' alt='logo' />
                        </a>
                        <a href=''>
                            <h2 className='text-orange-500 text-bold font-bold text-md md:text-xl'>E-Mentor</h2>
                        </a>
                    </div>
                    <h1 className='text-inter font-bold text-lg md:text-2xl text-center mb-4' >Continue Your Teaching <br/> Journey</h1>
                </div>
                {error && <p className='text-red-500  text-xs text-center mb-4'>{error}</p>}
                <form className='flex flex-col justify-center items-center'>
                    <Input
                        label="Email"
                        type="email"
                        value={email}
                        error={emailError}
                        onChange={handleEmailChange}
                        placeholder="Enter your email....."
                    />
                    <Input
                        label="Password"
                        type="Password"
                        value={password}
                        error={passwordError}
                        onChange={handlePasswordChange}
                        placeholder="Enter your Password....."
                    />
                    <div className="flex justify-start items-start mb-4">
                        <input
                            type="checkbox"
                            id="terms"
                            className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                            Remember me
                        </label>
                    </div>
                    <button
                        type='submit'
                        onClick={handleSubmit}
                        className='w-48 lg:w-96 bg-orange-500 text-white rounded-sm p-2 text-sm md:text-lg font-bold hover:bg-white hover:text-orange-500 hover:border border-orange-500 transition ease-in-out'
                    >
                        Login ➜
                    </button>
                    <p className='text-gray-500 text-sm m-2'>Forgot Password ? <a href='/passresetrequest' className='text-blue-500 underline hover:text-orange-500'>Reset Password</a></p>
                </form>
                <div className='flex flex-col justify-center item-center' >
                  <div className='flex justify-center items-center m-2' >
                    <div className='h-0.5 w-24 bg-gray-300' ></div>
                    <p className='font-bold mx-3 text-gray-500 text-center text-sx md:text-sm'>SIGN UP WITH</p>
                    <div className='h-0.5 w-24 bg-gray-300' ></div>
                  </div>
                  <div className='flex flex-col md:flex-row justify-center items-center gap-y-3 md:gap-x-2 my-4' >
                      <OAuthBtn src='https://img.icons8.com/ios-filled/50/google-logo.png' label=' Google ' onClick={handleGoogleAuth} />
                      <OAuthBtn src='https://img.icons8.com/ios-filled/50/facebook-f.png' label='Facebook' onClick={handleFacebookAuth} />
                      <OAuthBtn src='https://img.icons8.com/ios-filled/50/mac-os.png' label=' Apple' onClick={handleAppleAuth} />
                  </div>
                  <p className='text-gray-500 text-sm mb-4'>Not Registerd ? <a href='/teacher/auth/register' className='text-blue-500 underline hover:text-orange-500'>Register</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login