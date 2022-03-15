import React from 'react'
import '../../Style/style.css'
import { ImWhatsapp } from "react-icons/im";





const ButtonWhatsApp = () => {
    return (

        <div className="scroll-to-top scroll-to-target">
            <div className='p-w'>
                <a href="https://walink.co/88cec5" className="color_icoW" target="_blank">
                    <ImWhatsapp /* color='#fff' */ size={27} />
                </a>
            </div>
        </div>
    )
}

export default ButtonWhatsApp
