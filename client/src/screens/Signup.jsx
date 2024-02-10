import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = ( ) => {

    const [formData, setformData] = useState({
        name: "",
        email: '',
        password: '',
        confirmPassword: ''
    })



    const [next, setnext] = useState(false)


    
    
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
                
                <form className='flex flex-col gap-4 w-full'>
                    <label>
                        <input
                        type="text"
                        placeholder="Name"
                        className='border-b-2 border-gray-400 active:border-gray-200 focus:border-gray-200 outline-none duration-100 px-2 py-3 text-gray-400 rounded-md w-full'
                        />
                    </label>
                    
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
                        
                        <label>
                            <input
                            type="password"
                            placeholder="Confirm Password"
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
