import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='w-full min-h-[10vh] flex items-center justify-between'>
            <div className='text-primary text-xl lg:text-3xl font-extrabold'>
                Huh!
            </div>
            <Link
                to="/login"
                >
                <button className='bg-primary px-10 py-2 flex justify-center items-center text-white text-lg font-semibold rounded-full'>
                    Sign In
                </button>
            </Link>
        </nav>
    )
}

export default Header
