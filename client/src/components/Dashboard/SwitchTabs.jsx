import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Dashboard from './Dashboard'
import Profile from '../Profile/Profile'
import Talk from '../Talk/Talk'
import AI from '../Talk/AI/AI'
import Friends from '../Talk/Friends/Friends'

const SwitchTabs = () => {
    const location = useLocation()
    const [pathName, setpathName] = useState(location.pathname)


    useEffect(()=>{
        setpathName(location.pathname)
    },[setpathName, location])
    
   switch (pathName) {
       case '/dashboard':
           return (
            <Dashboard />
           )
       case '/dashboard/learn':
           return (
               <Dashboard />
           )
       case '/dashboard/talk':
           return (
               <Talk />
           )
       case '/dashboard/talk/ai':
           return (
               <AI />
           )
       case '/dashboard/talk/friends':
           return (
               <Friends />
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
