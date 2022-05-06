import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoIcon from '../../images/fvicon.png'
/* import logoTop from '../images/logohome.png' */
import { FcGoogle } from 'react-icons/fc';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Formik } from 'formik';
import { clientsFirestorage, resetPassword, signInUserClients } from '../../../Controllers/Sesion';
import { StateContext } from '../../../Context/UseContextGlobal';


const RecuperatePassword = () => {


    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease',
            once:true
        });
    })

    return (
        <>
            <Row className='img-recuprate-div' style={{ height: '100vh' }} >
                <Col className='flex-Ctainer-Password' sm={12} md={12} lg={12} >
                    <div className='Sty-Div-class-RecuperaTE' >
                        <div className='back-white-div' data-aos="zoom-in" data-aos-duration="0.500">
                            <div className='group-c-item'>
                                <Link className='div-img-RLink' to='/'>
                                    <img className='img-sTle' src={logoIcon} />
                                </Link>
                                {/*  <Link to='/'>
                                <img data-aos="zoom-in" data-aos-duration="3000" className='img-sTle' src={logoTop} />
                            </Link> */}
                                <h1 className='SingIn-s' > Reset Password </h1>
                                <div className='p-rese-password'> Enter the email adress associated with your account  <br /> and we'll send you a link to reset your password </div>
                            </div>

                            <Formik
                                initialValues={{
                                    email: '',

                                }}
                                validate={(valores) => {
                                    let errores = {};
                                    if (!valores.email) {
                                        errores.email = "Ingrese un email"
                                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                                        errores.email = 'El correo solo puede contener letras , numeros , puntos y guione bajos.'

                                    }
                                }}
                                onSubmit={(valores, { resetForm }) => {

                                    resetPassword(valores.email).then((res) => {
                                        if (res === 'Correcto') {
                                            console.log(' Revisa tu email para cambiar la contrasena')
                                            resetForm()
                                        } else {
                                            console.log(`no se pudo `)
                                        }
                                    })
                                }}


                            >

                                {({ handleSubmit, errors, handleChange, handleBlur, values, touched }) => (

                                    <Form onSubmit={handleSubmit} >

                                        <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right" data-aos-duration="1200">
                                            <Form.Label className='l-abel-Sty'>Email </Form.Label>
                                            <Form.Control
                                                className='c-ontrol-stysS'
                                                name='email'
                                                type="email"
                                                placeholder="Enter email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {
                                                touched.email && errors.email &&
                                                (
                                                    <div className='error-div'>
                                                        <div className='errors-Message-email'> {errors.email}  </div>
                                                    </div>
                                                )
                                            }
                                            {/*  <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text> */}
                                        </Form.Group>



                                        <div className='div-button-sty' data-aos="fade-right">
                                            <Button className='butt-style-cc' variant="primary" type="submit" data-aos="fade-right" data-aos-duration="1700">
                                                Continue
                                            </Button>
                                        </div>
                                        <div className='check-sty' data-aos="fade-right"> Don't have an account? <Link className='e-Link' to='/signUp'>  Sign Up  </Link>  </div>
                                    </Form>


                                )}

                            </Formik>
                            <div className='rghts-copy' data-aos="fade-right">  Globalnet Usa Inc ® 2022 All Rights Reserved. </div>
                        </div>


                    </div>
                </Col >

            </Row>
        </>

    )
}

export default RecuperatePassword
