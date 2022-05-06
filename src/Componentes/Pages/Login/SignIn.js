import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import logoIcon from '../../images/fvicon.png'
/* import logoTop from '../images/logohome.png' */
import { FcGoogle } from 'react-icons/fc';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Formik } from 'formik';
import { clientsFirestorage, signInUserClients } from '../../../Controllers/Sesion';
import { StateContext } from '../../../Context/UseContextGlobal';
import Header from '../../Landing/Header';
import ButtonMenuResposive from '../../Landing/ButtonMenuResposive';


const SignIn = () => {


    const navigate = useNavigate()
    const { signIn } = useContext(StateContext)
    const [errorMessae, setErrorMessae] = useState('')
    const [userClientsLocals, setUserClientsLocals] = useState(null)


    useEffect(() => {
        AOS.init({

            duration: 1000,
            easing: 'ease',
            once:true
        });
    })



    useEffect(() => {

        if (userClientsLocals) {
            (async () => {
                const userDB = await clientsFirestorage(userClientsLocals)
                signIn(userDB)
                console.log(`DB :`, userDB.user)
            })()
        }
    }, [userClientsLocals])
    return (


        <Container fluid className='conIner-div' >

            <Row className='img-Respon-Background'
                style={{ height: '100vh' }} >
                <Col className='flex-Ctainer' sm={12} md={6} lg={6} >
                    <div className='Sty-Div-class' >
                        <div className='group-c-item' >
                            <Link className='div-img-RLink' to='/'>
                                <img data-aos="zoom-in" data-aos-duration="3000" className='img-sTle' src={logoIcon} />
                            </Link>
                            {/*  <Link to='/'>
                                <img data-aos="zoom-in" data-aos-duration="3000" className='img-sTle' src={logoTop} />
                            </Link> */}
                            <h1 className='SingIn-s' data-aos="fade-right" data-aos-duration="1000"> Login </h1>
                            <div className='div-button-styles-g' data-aos="fade-right" data-aos-duration="1000">
                                <Button className='button-Sst' variant="outline-secondary"> <FcGoogle className='icons-g' size={23} /> Sign In with Google </Button>
                            </div>
                        </div>
                        {/*  <div className='div-center-item'> */}

                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validate={(valores) => {
                                let errores = {};
                                if (!valores.email) {
                                    errores.email = "Ingrese un email"
                                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                                    errores.email = 'El correo solo puede contener letras , numeros , puntos y guione bajos.'

                                }
                                if (!valores.password) {
                                    errores.password = "Debes ingresar una contrasena"
                                } else if (valores.password.length < 6) {
                                    errores.password = 'Debes Ingresar una contrasena con mas de 6 digitos'
                                }
                                return errores


                            }}
                            onSubmit={(valores, { resetForm }) => {
                                setErrorMessae('')
                                signInUserClients(valores.email, valores.password)

                                    .then((res) => {
                                        if (res.idUser) {
                                            console.log(res.idUser)
                                            setUserClientsLocals(res)

                                            resetForm()

                                            navigate('/dashBoardMain')
                                        } else if (res === 'NotPassword') {

                                            setErrorMessae('Contrasena Icorrecta')
                                        } else if (res === 'Intentos') {

                                            alert('deshabilitado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede restaurarlo inmediatamente restableciendo su contraseña o puede volver a intentarlo más tarde.')
                                        }

                                        else {
                                            console.log('hay un error')
                                        }
                                    }
                                    )
                            }
                            }


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
                                            touched.email && errors.email && (
                                                <div className='error-div' data-aos="zoom-in " data-aos-duration="0.400">
                                                    <div className='errors-Message-email'> {errors.email}  </div>
                                                </div>)
                                        }
                                        {/*  <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text> */}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-right" data-aos-duration="1400">
                                        <Form.Label className='l-abel-Sty'>Password</Form.Label>
                                        <Form.Control className='c-ontrol-stysS' name='password' onChange={handleChange} onBlur={handleBlur} type="password" placeholder="Password" value={values.password} />
                                        {
                                            touched.password && errors.password && (
                                                <div className='error-div' data-aos="zoom-in " data-aos-duration="0.400">
                                                    <div className='errors-Message-email'> {errors.password}  </div>
                                                </div>)
                                        }
                                        {
                                            errorMessae && (
                                                <div className='error-div' data-aos="zoom-in " data-aos-duration="0.400">
                                                    <div className='errors-Message-email'> {errorMessae}  </div>
                                                </div>)
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox" data-aos="fade-right" data-aos-duration="1600">
                                        <div className='f-clex-g'>
                                            <Form.Check className='check-sty' type="checkbox" label="Check me out" />
                                            <Link to='/recuperatePassword' className='e-Link' >  Forget password?  </Link>
                                        </div>
                                    </Form.Group>
                                    <div className='div-button-sty' data-aos="fade-right">
                                        <Button className='butt-style-cc' variant="primary" type="submit" data-aos="fade-right" data-aos-duration="1700">
                                            Login
                                        </Button>
                                    </div>
                                    <div className='check-sty' data-aos="fade-right"> Not registered yet? <Link className='e-Link' to='/signUp'>  Create an Account  </Link>  </div>
                                </Form>


                            )}

                        </Formik>

                        {/* </div> */}
                        <div className='rghts-copy' >  Globalnet Usa Inc ® 2022 All Rights Reserved. </div>
                    </div>
                </Col >
                <Col md={6} lg={6} className='back-lapto d-none d-sm-block' data-aos="fade-left" data-aos-duration="2000" >
                    <div className='back-img-backG'>
                        <div className="text-center-p">
                            <div className='global-text-stylS'>  Globalnet Usa Inc </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default SignIn
