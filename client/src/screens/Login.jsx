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
        <div className="mx-auto max-w-screen-lg h-full py-5 overflow-hidden flex flex-col md:w-1/2 xl:w-1/3 items-center justify-center">
  <div className="flex flex-col gap-2 mb-10 mx-2">
    <div className="flex items-center gap-2"> {/* Removed 'flex-center' as it's not a Tailwind class */}
      <h2 className="text-3xl md:text-6xl font-semibold"> {/* Removed unnecessary flex classes */}
        Welcome
      </h2>
      <div>
        <img alt="hello" src="/images/auth/header-wave.svg" />
      </div>
    </div>
    <p className="text-center font-italic"> {/* Changed 'font-sm' to 'font-italic' */}
      Today is a new day. It’s your day. You shape it. Sign up to start study
    </p>
  </div>
  <div className="px-10 w-full md:min-w-[25vw] shadow-lg py-8 flex flex-col items-center"> {/* Removed 'flex-center' */}
    <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full">
      <label>
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="border-b-2 border-gray-400 active:border-gray-200 focus:border-gray-200 outline-none duration-100 px-2 py-3 text-gray-400 rounded-md w-full"
        />
      </label>
      <label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          placeholder="Password"
          className="border-b-2 border-gray-400 active:border-gray-200 focus:border-gray-200 outline-none duration-100 px-2 py-3 text-gray-400 rounded-md w-full"
        />
      </label>
      <button
        type="submit"
        className="bg-primary py-3 mt-4 rounded-full text-white font-semibold w-full" {/* Added 'w-full' to make the button full width */}
      >
        Login
      </button>
      <p className="text-center"> {/* Centered text */}
        Don't have an account?{" "}
        <Link to="/signup" className="text-primary">
          Sign Up
        </Link>
      </p>
    </form>
  </div>
</div>

    )
}

export default Login
