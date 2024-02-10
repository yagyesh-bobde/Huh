import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ( ) => {
    const navigate = useNavigate()
    const [formData, setformData] = useState({
        email: '',
        password: '',
    })


    const handleLogin = ( e) => {
        e.preventDefault()
        console.log(formData)

        navigate("/dashboard")
    }
    
    return (
        <div className='mx-auto max-w-[1080px]  h-screen py-5 overflow-hidden flex flex-col md:w-1/2 xl:w-1/3 items-center'>
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
                
                <form onSubmit={handleLogin} className='flex flex-col gap-4 w-full'>
                    
                    
                    <label>
                        <input
                        type="email"
                        placeholder="Email"
                        className='border-b-2 border-gray-400 active:border-gray-200 focus:border-gray-200 outline-none duration-100 px-2 py-3 text-gray-400 rounded-md w-full'
                        />
                    </label>

                    <label>
                        <input
                        type="password"
                        placeholder="Password"
                        className='border-b-2 border-gray-400 active:border-gray-200 focus:border-gray-200 outline-none duration-100 px-2 py-3 text-gray-400 rounded-md w-full'
                        />
                    </label>
                        
                    <button
                    type="submit"
                    className='bg-primary py-3 mt-4 rounded-full text-white font-semibold '
                    
                    >
                         Login
                    </button>

                    <p>
                        Don't have an account? <Link href="/signup" className='text-primary'>Sign Up</Link>  
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
