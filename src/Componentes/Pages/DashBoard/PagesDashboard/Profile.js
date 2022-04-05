import React, { useState } from 'react'
import DashFooter from '../DashFooter'
import DashHeader from '../DashHeader'
import DashSidebar from '../DashSidebar'
const Profile = () => {


    const [isOpenDasboard, setIsOpenDasboard] = useState(false)


    const open = () => {
        setIsOpenDasboard(!isOpenDasboard)
    }
    return (
        <div>
            Profile
            <DashHeader open={open} />
            <DashSidebar isOpenDasboard={isOpenDasboard} setIsOpenDasboard={setIsOpenDasboard} />
        </div>
    )
}

export default Profile