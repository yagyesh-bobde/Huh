import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../lib/user'

const DashboardNav = () => {
    const navLinks = [
        {
            id: 1, 
            title: 'Home',
            path: '/dashboard',
            img: "/images/nav/learn.svg"
        }, 
        {
            id: 2, 
            title: 'Talk',
            path: '/dashboard/talk',
            img: "/images/nav/talk.svg"
        }, 
        {
            id: 3, 
            title: 'Profile',
            path: '/dashboard/profile',
            img: "/images/nav/Profile.svg"
        },
        {
            id: 4,
            title: 'History',
            path: '/dashboard/history',
            img: "/images/nav/history.svg"
        },
        {
            id: 5,
            title: 'Logout',
            path: '/dashboard/settings',
            img: "/images/nav/history.svg",
            onClick: logout
        }
    ]
    
    useEffect(() => {
        
        return () => {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        }
    }, [])
    
    return (
        <nav className='max-md:fixed bottom-0 max-md:w-screen w-[250px] border min-h-[10vh] md:flex md:items-center md:h-screen md:justify-end'>
                <div className='hidden md:block text-3xl absolute top-10 left-10'>
                    Dashboard
                </div>
                <ul className='flex md:flex-col justify-between max-md:items-center md:w-3/4 gap-5'>
                    {navLinks.map((link) => (
                        <Link to={link.path}>
                            <li key={link.id} className='flex items-center flex-col btn-hover md:flex-row gap-2 p-4'>
                            <img src={link.img} className='' alt={link.title} />
                            <p >{link.title}</p>
                            </li>
                        </Link>
                        
                    ))}
                </ul>
            </nav>
    )
}

export default DashboardNav
