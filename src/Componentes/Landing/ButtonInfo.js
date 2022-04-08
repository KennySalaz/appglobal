import React, {  useState } from 'react'

import '../../Style/style.css'
import logoGome from '../images/logohome.png'
import imgHambur from '../images/imgHambur.png'
import 'aos/dist/aos.css'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { Button, Offcanvas } from 'react-bootstrap'

const ButtonInfo = ({ name, ...props }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    <style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>
    return (
        <div>

            <div className='back-roude'>
                <img onClick={handleShow} className='img_hambur' src={imgHambur} />
            </div>
            <Offcanvas backdropClassName='effect-canvas' show={show} onHide={handleClose} {...props} >
            
                <Offcanvas.Header className='bg-black-color' closeButton >
                    <Offcanvas.Title className='p-diings' >
                        <div className="logo" data-aos="fade-up">
                            <a href="index.html"><img className="img_menuAbout" src={logoGome}
                                alt="" /></a>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='p-dingn' >
                    <div className="content-box" data-aos="fade-up">
                        <h2 className='g-text-edit'>Globalnet Usa In</h2>
                        <p className="text-p-p">Empresa líder en la venta de
                            equipos y servicios tecnológicos
                            EN EEUU Y LATINOAMÉRICA.
                        </p>

                    </div>
                    <div className="contact-info" data-aos="fade-up">
                        <h2 className='g-text-edit'>Contact Info</h2>
                        <ul className="list-s-one">
                            <li className='icon_l'><span className='p-i-ding'> <FaLocationArrow color='#00bce5' /> </span>Fort Myers Florida
                                33908</li>
                            <li className='icon_l'><span className='p-i-ding'> <FaPhoneAlt color='#00bce5' /> </span>+1 954-271-9003</li>
                            <li className='icon_l'><span className='p-i-ding'><FaEnvelope color='#00bce5' /></span>sales@globalnet.us.com</li>

                        </ul>
                    </div>

                    <ul className="social-box" data-aos="fade-right" >
                        <li className="i-Radius" >
                            <a href="https://www.facebook.com/Globalnet-USA-Inc-107702985172134"
                            >   <AiFillFacebook color='black' size={18} /> </a></li>

                        <li className="i-Radius"><a
                            href="https://www.linkedin.com/company/globalnet-usa-inc/?viewAsMember=true"
                        >  <AiFillLinkedin color='black' size={18} /></a></li>
                        <li className="i-Radius"><a
                            href="https://instagram.com/globalnetusa?utm_medium=copy_link"
                        ></a> <AiFillInstagram color='black' size={18} /></li>

                    </ul>
                </Offcanvas.Body>

              
               
            </Offcanvas>

        </div>
    )
}

export default ButtonInfo
