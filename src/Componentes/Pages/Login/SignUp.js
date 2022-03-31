import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoIcon from '../../images/fvicon.png'
import { FcGoogle } from 'react-icons/fc';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Formik } from 'formik';
import { registerClientsAuth } from '../../../Controllers/Sesion';
import { useNavigate } from "react-router-dom";




const SignUp = () => {

    const navigate = useNavigate()
    const [errorEmailMessage, setErrorEmailMessage] = useState('')

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
            <Row className='img-Respon-Background-register' style={{ height: '100vh', marginLeft: '0px', marginRight: '0px' }}>
                <Col className='flex-Ctainer' sm={12} md={6} lg={6} >
                    <div className='Sty-Div-class'>
                        <div className='group-c-item'>
                            {/*  <Link to='/'>
                                <img data-aos="zoom-in" data-aos-duration="3000" className='img-sTle' src={logoTop} />
                            </Link> */}
                            <Link className='div-img-RLink' to='/'>
                                <img data-aos="zoom-in" data-aos-duration="3000" className='img-sTle' src={logoIcon} />
                            </Link>
                            <h1 className='SingIn-s' data-aos="fade-right" data-aos-duration="1000"> Sign Up </h1>
                            <div className='div-button-styles-g' data-aos="fade-right" data-aos-duration="1000">
                                <Button className='button-Sst' variant="outline-secondary"> <FcGoogle className='icons-g' size={23} /> Sign Up with Google </Button>
                            </div>
                        </div>
                        {/*  <div className='div-center-item'> */}
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                                confirmPassword: '',
                                errorPs: ''
                            }}

                            validate={(valores) => {
                                let errores = {}

                                if (!valores.email) {
                                    errores.email = 'Debes ingresar un email'
                                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                                    errores.email = 'El correo solo puede contener letras , numeros , puntos y guione bajos.'
                                }

                                if (!valores.password) {
                                    errores.password = "Debes ingresar una contrasena"
                                } else if (valores.password.length < 6) {
                                    errores.password = 'Debes Ingresar una contrasena con mas de 6 digitos'
                                }
                                if (!valores.confirmPassword) {
                                    errores.confirmPassword = "Debes ingresar una contrasena"
                                } else if (valores.password.length < 6) {
                                    errores.password = 'Debes Ingresar una contrasena con mas de 6 digitos'
                                } else if (valores.confirmPassword !== valores.password) {
                                    errores.errorPs = 'Las contrasenas no coiciden'
                                }
                                return errores
                            }}
                            onSubmit={(valores, { resetForm }) => {


                                registerClientsAuth(valores.email, valores.password).then(res => {
                                    if (res === 'Correcto') {
                                        resetForm()
                                        navigate('/signIn')
                                    } else if (res === 'Repetido') {
                                        setErrorEmailMessage('Este email ya esta en uso')
                                    }
                                })
                            }
                            }
                        >
                            {({ handleBlur, values, handleChange, handleSubmit, errors, touched }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right" data-aos-duration="1200">
                                        <Form.Label className='l-abel-Sty'>Email </Form.Label>
                                        <Form.Control
                                            className='c-ontrol-stysS'
                                            type="email"
                                            placeholder="Enter email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name='email'
                                        />
                                        {
                                            touched.email && errors.email && (
                                                <div className='error-div' data-aos="zoom-in " data-aos-duration="0.400">
                                                    <div className='errors-Message-email'> {errors.email}  </div>
                                                </div>)
                                        }

                                        {
                                            errorEmailMessage && <div className='errors-Message-email'> {errorEmailMessage} </div>
                                        }

                                        {/*  <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text> */}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-right" data-aos-duration="1400">
                                        <Form.Label className='l-abel-Sty'>Password</Form.Label>
                                        <Form.Control
                                            className='c-ontrol-stysS'
                                            type="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name='password'
                                        />
                                        {
                                            touched.password && errors.password && (
                                                <div className='error-div' data-aos="zoom-in " data-aos-duration="0.400">
                                                    <div className='errors-Message-email'> {errors.password}  </div>
                                                </div>)
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-right" data-aos-duration="1800">
                                        <Form.Label className='l-abel-Sty'>Confirm Password</Form.Label>
                                        <Form.Control
                                            className='c-ontrol-stysS'
                                            type="password"
                                            placeholder="Password"
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name='confirmPassword'
                                        />
                                        {
                                            touched.confirmPassword && errors.confirmPassword && (
                                                <div className='error-div' data-aos="zoom-in " data-aos-duration="0.400">
                                                    <div className='errors-Message-email'> {errors.confirmPassword}  </div>
                                                </div>)
                                        }
                                        {
                                            errors.errorPs && (
                                                <div className='error-div' data-aos="zoom-in " data-aos-duration="0.400">
                                                    <div className='errors-Message-email'> {errors.errorPs}  </div>
                                                </div>)
                                        }

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox" data-aos="fade-right" data-aos-duration="1800">
                                        <div className='f-clex-f' style={{ marginLeft: '12px' }}>
                                            <Form.Check className='check-sty' type="checkbox" label={string} />
                                            <Link className='e-Link' to='/'>Terms & Conditions</Link>


                                        </div>
                                    </Form.Group>
                                    <div className='div-button-sty' data-aos="fade-right">
                                        <Button className='butt-style-cc' variant="primary" type="submit">
                                            Sign Up
                                        </Button>
                                    </div>
                                    <div className='check-sty' data-aos="fade-right" > Already have an Account? <Link to='/signIn' className='e-Link'>  Sign Up </Link>  </div>
                                </Form>
                            )}

                        </Formik>

                        {/* </div> */}
                        <div className='rghts-copy2' data-aos="fade-right" >  Globalnet Usa Inc ® 2022 All Rights Reserved. </div>
                    </div>
                </Col >
                <Col sm={0} md={6} lg={6} className='back-singUp d-none d-sm-block' data-aos="fade-right" data-aos-duration="2000">
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
