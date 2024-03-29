import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HOST_URL } from '../config'

const Signup = ( ) => {
    const navigate = useNavigate()
    const [formData, setformData] = useState({
        name: "",
        email: '',
        password: '',
        confirmPassword: ''
    })



    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }



    const handleSignup = async (e) => {
        e.preventDefault()
        console.log(formData)

        // SIGNUP
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*");
        myHeaders.append("mode" , "no-cors");

        var raw = JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw
        };

        fetch(`${HOST_URL}/api/user/signup`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result)
                localStorage.setItem("jwt-token", result.token);
                navigate("/dashboard");
            })
            .catch((error) => console.log("error", error));

        setformData({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        });
    }
    
    useEffect(() => {
        const token = localStorage.getItem("jwt-token");
        if (token) {
          navigate("/dashboard");
        }
        
        return () => {
          
        }
      }, [])
    
    return (
        <div className='mx-auto max-w-[1080px]  h-screen py-5 overflow-hidden flex flex-col justify-center md:w-1/2 xl:w-1/3 items-center'>
            <div className='flex flex-col gap-2 mb-10 mx-2'>
                <div className='flex-center  gap-2'>
                    <h2  className='flex flex-col text-3xl md:text-6xl font-semibold items-center gap-2'>
                        Welcome 
                    </h2>
                    <div className='flex-center'>
                        <img alt='hello' src="/images/auth/header-wave.svg" />
                    </div>
                </div>
                <p className='text-center font-sm italic'>
                Today is a new day. It’s your day. You shape it. Sign up to start study
                </p>
            </div>
            <div className='px-10 w-full md:min-w-[25vw] shadow-lg py-8 flex items-center flex-col  '>
                
                <form onSubmit={handleSignup} className='flex flex-col gap-4 w-full'>
                    <label>
                        <input
                        type="text"
                        placeholder="Name"
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className='border-b-2 border-gray-400 active:border-gray-200 focus:border-gray-200 outline-none duration-100 px-2 py-3 text-gray-400 rounded-md w-full'
                        />
                    </label>
                    
                    <label>
                        <input
                        type="email"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                        placeholder="Email"
                        className='border-b-2 border-gray-400 active:border-gray-200 focus:border-gray-200 outline-none duration-100 px-2 py-3 text-gray-400 rounded-md w-full'
                        />
                    </label>

                    <label>
                        <input
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        className='border-b-2 border-gray-400 active:border-gray-200 focus:border-gray-200 outline-none duration-100 px-2 py-3 text-gray-400 rounded-md w-full'
                        />
                    </label>
                        
                        <label>
                            <input
                            type="password"
                            placeholder="Confirm Password"
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className='border-b-2 border-gray-400 active:border-gray-200 focus:border-gray-200 outline-none duration-100 px-2 py-3 text-gray-400 rounded-md w-full'
                            />
                        </label>
                    <button
                    type="submit"
                    className='bg-primary py-3 mt-4 rounded-full text-white font-semibold '
                    >
                         Sign Up
                    </button>


                    <p>
                        Already have an account? <Link href="/login" className='text-primary'>Login</Link>  
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Signup
