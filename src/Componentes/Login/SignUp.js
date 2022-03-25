import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoIcon from '../images/fvicon.png'
import { FcGoogle } from 'react-icons/fc';
import AOS from 'aos';
import 'aos/dist/aos.css'


const SignUp = () => {

    
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    })
    const tab = '\u00A0';
    let string = `I agree to the ${tab} `
    return (

        <>
          <Row>
            <Col className='flex-Ctainer' sm={12} md={6} lg={6} >
                <div className='Sty-Div-class' >
                    <div className='group-c-item'>
                        <Link to='/'>
                            <img data-aos="zoom-in" data-aos-duration="3000" className='img-sTle' src={logoIcon} />
                        </Link>
                        <h1 className='SingIn-s' data-aos="fade-right" data-aos-duration="1000"> Sign Up </h1>
                        <div className='div-button-styles-g' data-aos="fade-right" data-aos-duration="1000">
                            <Button className='button-Sst' variant="outline-secondary"> <FcGoogle className='icons-g' size={23} /> Sign Up with Google </Button>
                        </div>
                    </div>
                    {/*  <div className='div-center-item'> */}
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right" data-aos-duration="1200">
                            <Form.Label className='l-abel-Sty'>Email </Form.Label>
                            <Form.Control className='c-ontrol-stysS' type="email" placeholder="Enter email" />
                            {/*  <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-right" data-aos-duration="1400">
                            <Form.Label className='l-abel-Sty'>Password</Form.Label>
                            <Form.Control className='c-ontrol-stysS' type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword"  data-aos="fade-right" data-aos-duration="1800">
                            <Form.Label className='l-abel-Sty'>Confirm Password</Form.Label>
                            <Form.Control className='c-ontrol-stysS' type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" data-aos="fade-right" data-aos-duration="1800">
                            <div className='f-clex-f'>
                                <Form.Check type="checkbox" label={string} />
                                <Link className='e-Link' to='/'>Terms & Conditions</Link>
                               

                            </div>
                        </Form.Group>
                        <div className='div-button-sty' data-aos="fade-right">
                            <Button className='butt-style-cc' variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </div>
                        <div  data-aos="fade-right" > Already have an Account? <Link to='/signIn' className='e-Link'>  Sign Up </Link>  </div>
                    </Form>
                    {/* </div> */}
                    <div className='rghts-copy2' data-aos="fade-right" >  Globalnet Usa Inc ® 2022 All Rights Reserved. </div> 
                </div>
            </Col >
            <Col sm={0} md={6} lg={6} className='back-singUp' data-aos="fade-right" data-aos-duration="2000">
                <div className='back-img-backG'>
                    <div className="text-center-p">
                        <div className='global-text-stylS'>  Globalnet Usa Inc </div>
                    </div>
                </div>
            </Col>
        </Row>


        </>
      
    )
}

export default SignUp
