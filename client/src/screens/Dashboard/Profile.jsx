import React from 'react'
import DashboardNav from '../../components/Header/DashboardNav'
import ProfileComponent from '../../components/Profile/Profile'


const Profile = () => {
    return (
        <div className='flex flex-row'>
        <DashboardNav />
        <div>
            <ProfileComponent />
        </div>
    </div>
    )
}

export default Profile
