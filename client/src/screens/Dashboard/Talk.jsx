import React from 'react'
import DashboardNav from '../../components/Header/DashboardNav'
import TalkComponent from '../../components/Talk/Talk'


const Talk = () => {
    return (
        <div className='flex flex-row'>
            <DashboardNav />
            <div>
                <TalkComponent />
            </div>
        </div>
    )
}

export default Talk
