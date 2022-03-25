import React, { useEffect, useRef, useState } from 'react'
import '../../Style/style.css'
import logoGome from '../images/logohome.png'
import 'aos/dist/aos.css'
import AOS from 'aos';
import ButtonInfo from './ButtonInfo'
import ButtonMenuResposive from './ButtonMenuResposive';
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Header = () => {

    const divref = useRef()
    const [activeH, setActiveH] = useState(false)
    const [drawer, setDrawer] = useState(false)


    const handleSroll = () => {
        const div = divref.current
        const { y } = div.getBoundingClientRect()
        console.log(y)
        y <= 0 ? setActiveH(true) : setActiveH(false)
    }
    const isOpen = () => {
        setDrawer(!drawer)

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
            duration: 3000,
            easing: 'ease'
        });
    })




    return (
        <>
            <div className='container-xl' >
                <div className='auto-container'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid ">
                            <Row className='respon-Logo-W' >
                                <Col>
                                    <a className="navbar-brand" href="#">
                                        <img className='logoHome' src={logoGome} />
                                    </a>
                                </Col>
                                <Col className='f-lex-D'> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    {['end'].map((placement, idx) => (
                                        <ButtonMenuResposive key={idx} placement={placement} name={placement} />
                                    ))}
                                </button>
                                </Col>
                            </Row>


                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item p-3 ">
                                        <a className="nav-link active" aria-current="page" href="#">HOME</a>
                                    </li>
                                    <li className="nav-item p-3">
                                        <a className="nav-link" href="#">SOBRE NOSOTROS</a>
                                    </li>
                                    <li className="nav-item p-3">
                                        <a className="nav-link" href="#">NUESTROS VALORES</a>
                                    </li>
                                    <li className="nav-item p-4">
                                        
                                        <Link className='l-style' to="/signIn">Login</Link>

                                    </li>

                                </ul>

                                <div>
                                    {['end'].map((placement, idx) => (
                                        <ButtonInfo key={idx} placement={placement} name={placement} />
                                    ))}
                                </div>



                            </div>
                        </div>
                    </nav>
                </div>

            </div>
            <div ref={divref}></div>



            <div className={`${activeH ? 'e-fixed-nav' : 'e-fixed-na'}`}  >


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
                                {['end'].map((placement, idx) => (
                                    <ButtonInfo key={idx} placement={placement} name={placement} />
                                ))}

                            </div>
                        </div>



                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            {['end'].map((placement, idx) => (
                                <ButtonInfo key={idx} placement={placement} name={placement} />
                            ))}
                        </button>



                    </div>
                </nav>


            </div>




        </>

    )



}

export default Header
