import React, { useEffect, useRef, useState } from 'react'

import '../../Style/style.css'
import logoGome from '../images/logohome.png'
import imgHambur from '../images/imgHambur.png'
import 'aos/dist/aos.css'
import AOS from 'aos';
const Header = () => {

    const divref = useRef()
    const [activeH, setActiveH] = useState(false)

    const handleSroll = () => {
        const div = divref.current
        const { y } = div.getBoundingClientRect()
        console.log(y)
        y <= 0 ? setActiveH(true) : setActiveH(false)


    }

    useEffect(() => {
        window.addEventListener('scroll', handleSroll)

        return () => {
            window.removeEventListener('scroll', handleSroll)
        }


    }, [])

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 900,
            easing: 'ease'
        });
    })


    return (
        <>
            <div className='container-xl' >
                <div className='auto-container'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <img className='logoHome' src={logoGome} />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item p-5 ">
                                        <a className="nav-link active" aria-current="page" href="#">HOME</a>
                                    </li>
                                    <li className="nav-item p-5">
                                        <a className="nav-link" href="#">SOBRE NOSOTROS</a>
                                    </li>
                                    <li className="nav-item p-5">
                                        <a className="nav-link" href="#">NUESTROS VALORES</a>
                                    </li>

                                </ul>
                                <div className='back-roude'>
                                    <img className='img_hambur' src={imgHambur} />
                                </div>

                            </div>
                        </div>
                    </nav>
                </div>

            </div>
            <div ref={divref}></div>


            <div  className={`${activeH ? 'e-fixed-nav' : 'e-fixed-na'}`}  >
              
                    <nav className="w-100_ navbar navbar-expand-lg navbar-light">
                        <div className='j-d-flex ' data-aos="fade-down"  >

                            <div className='dflex-center'>
                                <a className="navbar-brand" href="#">
                                    <img className='logoHomeFixed' src={logoGome} />
                                </a>
                            </div>
                            <div>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item p-mp ">
                                        <a className="nav-link active" aria-current="page" href="#">HOME</a>
                                    </li>
                                    <li className="nav-item p-mp">
                                        <a className="nav-link" href="#">SOBRE NOSOTROS</a>
                                    </li>
                                    <li className="nav-item p-mp">
                                        <a className="nav-link" href="#">NUESTROS VALORES</a>
                                    </li>

                                </ul>
                                <div className='back-roude'>
                                    <img className='img_hambur' src={imgHambur} />
                                </div>

                            </div>
                            </div>



                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>


                        
                        </div>
                    </nav>
               

            </div>




        </>

    )



}

export default Header
