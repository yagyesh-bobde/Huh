import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Dashboard from './Dashboard'
import Profile from '../Profile/Profile'
import Talk from '../Talk/Talk'

const SwitchTabs = () => {
    const location = useLocation()
    const [pathName, setpathName] = useState(location.pathname)
    
   switch (pathName) {
       case '/dashboard':
           return (
               <div className=''>
                   Dashboard elements
               </div>
           )
       case '/dashboard/learn':
           return (
               <Dashboard />
           )
       case '/dashboard/talk':
           return (
               <Talk />
           )
        case '/dashboard/profile':
            return(
                <Profile />
            )
       default:
           return (
               <Dashboard />
           )
   }
}

export default SwitchTabs
