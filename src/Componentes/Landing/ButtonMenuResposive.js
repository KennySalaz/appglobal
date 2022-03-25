import React, { useState } from 'react'

import '../../Style/style.css'
import logoGome from '../images/logohome.png'
import imgHambur from '../images/imgHambur.png'
import 'aos/dist/aos.css'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { Button, Col, ListGroup, Offcanvas, Row, Tab } from 'react-bootstrap'
import Redes from './Redes'

const ButtonMenuResposive = ({ name, ...props }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <div className='back-roude'>
                <img onClick={handleShow} className='img_hambur' src={imgHambur} />
            </div>
            <Offcanvas   backdropClassName='effect-canvas-Menu'  show={show} onHide={handleClose} {...props} style={{    width: '309px !important'  }} >
             

                <Offcanvas.Header className='bg-black-color-W' closeButton >
                    <Offcanvas.Title className='p-diings' >
                        <div className="logo" >
                            <a href="index.html"><img className="img_menuAbout" src={logoGome}
                                alt="" /></a>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='p-dingn-menuR' >
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                        <Row>
                            <Col sm={12}>
                                <ListGroup>
                                    <ListGroup.Item action href="#link1">
                                        HOME
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2">
                                        SOBRE NOSOTROS

                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link3">

                                        NUESTROS VALORES
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>

                        </Row>
                    </Tab.Container>
                    <Redes />
                </Offcanvas.Body>

            </Offcanvas>

        </div>
    )
}

export default ButtonMenuResposive
