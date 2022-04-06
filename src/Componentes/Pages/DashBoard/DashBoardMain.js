import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '../../../Context/UseContextGlobal'
import Footer from '../../Landing/Footer'
import DashFooter from './DashFooter'
import DashHeader from './DashHeader'
import DashSidebar from './DashSidebar'
import HomeDash from './PagesDashboard/HomeDash'

const DashBoardMain = () => {
    const { user } = useContext(StateContext)
    
    const [isOpenDasboard, setIsOpenDasboard] = useState(false)
    const open = () => {
        setIsOpenDasboard(!isOpenDasboard)
    }


    useEffect(() => {
    console.log('aquiii' , user )
    }, [])
    

    return (
        <>
            <div className={`${(isOpenDasboard && 'toggle-sidebar')}`}  >
                <DashHeader open={open} />
                <DashSidebar isOpenDasboard={isOpenDasboard} setIsOpenDasboard={setIsOpenDasboard} />
                <HomeDash  />
                <DashFooter />

            </div>


        </>
    )
}

export default DashBoardMain