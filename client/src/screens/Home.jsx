import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Header/Hero'
import { logout } from '../lib/user'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    
    useEffect(() => {
        
        return () => {
            logout()
        }
    }, [])
    
    return (
        <div className='max-w-[1080px] px-[20px] mx-auto h-screen w-screen overflow-hidden'>
            <Header />
            <Hero />

            <ToastContainer />
        </div>
    )
}

export default Home
