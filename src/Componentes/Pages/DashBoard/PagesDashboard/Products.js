

import React, { useEffect, useState } from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap'

import DashFooter from '../DashFooter'
import DashHeader from '../DashHeader'
import DashSidebar from '../DashSidebar'
import '../../../../Style/dashboard.css'
import 'aos/dist/aos.css'
import AOS from 'aos';


import { Link, NavLink, useNavigate } from 'react-router-dom'




function Products(props) {


    const [isOpenDasboard, setIsOpenDasboard] = useState(false)
    const navigate = useNavigate()

    const open = () => {
        setIsOpenDasboard(!isOpenDasboard)
    }

    const products = {
        img: 'https://images-na.ssl-images-amazon.com/images/I/71zZiQGzc5L._AC._SR360,460.jpg',
        img2: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/images/categorias/d-computo/f-computo-laptops/l-laps-2-en-1-touchscreen.jpg',
        img3: 'https://www.altonivel.com.mx/wp-content/uploads/2020/05/amazon1.jpg',
        img4: 'https://i.blogs.es/575d4f/android/840_560.jpg',
        img5: 'https://sc04.alicdn.com/kf/Hcb6688aedc7d4b20a02335b4537cdf10W.jpg',
        img6: 'https://www.moviles.com/fotos/apple-ipad-mini-2019-81057-g.jpg',
        img7: 'https://http2.mlstatic.com/D_NQ_NP_652824-MLV47001459183_082021-W.jpg',
        img8: 'https://www.corsair.com/medias/sys_master/images/images/hc7/h90/9054936465438/-CC-9011135-WW-Gallery-280X-RGB-BLK-01.png',
    }

    const statusProduct = () => {
        navigate('/UserDetailsProduct')
    }

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease'
        });
    })
    return (
        <>
            <div className={`${(isOpenDasboard && 'toggle-sidebar')}`} >
                <DashHeader open={open} />
                <DashSidebar isOpenDasboard={isOpenDasboard} setIsOpenDasboard={setIsOpenDasboard} />

                <main id="main" className="main" style={{ height: '100vh' }}>
                    <h4> Productos </h4>

                    <Row>
                        <Col>
                            <Card data-aos="fade-right" data-aos-duration="1000" >
                                <div className='dFlex_100'>

                                    <img className='maxImgWidth' src={products.img} />


                                </div>

                                <Card.Footer className="text-muted">
                                    <Card.Title>Card Title</Card.Title>
                                    <Button onClick={statusProduct} style={{ width: '100%' }} variant="primary">Editar Producto</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-aos="fade-right" data-aos-duration="2000" >
                                <div className='dFlex_100'>

                                    <img className='maxImgWidth' src={products.img2} />



                                </div>
                                <Card.Footer className="text-muted">
                                    <Card.Title>Card Title</Card.Title>
                                    <Button onClick={statusProduct}  style={{ width: '100%' }} variant="primary">Editar Producto</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-aos="fade-right" data-aos-duration="3000" >
                                <div className='dFlex_100'>

                                    <img className='maxImgWidth' src={products.img3} />


                                </div>
                                <Card.Footer className="text-muted">
                                    <Card.Title>Card Title</Card.Title>
                                    <Button onClick={statusProduct}  style={{ width: '100%' }} variant="primary">Editar Producto</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-aos="fade-right" data-aos-duration="1000" >
                                <div className='dFlex_100'>

                                    <img className='maxImgWidth' src={products.img4} />


                                </div>
                                <Card.Footer className="text-muted">
                                    <Card.Title>Card Title</Card.Title>
                                    <Button onClick={statusProduct}  style={{ width: '100%' }} variant="primary">Editar Producto</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-aos="fade-right" data-aos-duration="2000" >
                                <div className='dFlex_100'>

                                    <img className='maxImgWidth' src={products.img5} />


                                </div>
                                <Card.Footer className="text-muted">
                                    <Card.Title>Card Title</Card.Title>
                                    <Button onClick={statusProduct}  style={{ width: '100%' }} variant="primary">Editar Producto</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-aos="fade-right" data-aos-duration="3000" >
                                <div className='dFlex_100'>

                                    <img className='maxImgWidth' src={products.img6} />


                                </div>
                                <Card.Footer className="text-muted">
                                    <Card.Title>Card Title</Card.Title>
                                    <Button onClick={statusProduct}  style={{ width: '100%' }} variant="primary">Editar Producto</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-aos="fade-right" data-aos-duration="4000" >
                                <div className='dFlex_100'>

                                    <img className='maxImgWidth' src={products.img7} />


                                </div>
                                <Card.Footer className="text-muted">
                                    <Card.Title>Card Title</Card.Title>
                                    <Button onClick={statusProduct}  style={{ width: '100%' }} variant="primary">Editar Producto</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-aos="fade-right" data-aos-duration="4000" >
                                <div className='dFlex_100'>

                                    <img className='maxImgWidth' variant="top" src={products.img8} />


                                </div>
                                <Card.Footer className="text-muted">
                                    <Card.Title>Card Title</Card.Title>
                                    <Button onClick={statusProduct}  style={{ width: '100%' }} variant="primary">Editar Producto</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-aos="fade-right" data-aos-duration="4000" >
                                <div className='dFlex_100'>

                                    <img className='maxImgWidth' variant="top" src={products.img} />

                                </div>
                                <Card.Footer className="text-muted">
                                    <Card.Title>Card Title</Card.Title>
                                    <Button onClick={statusProduct}  style={{ width: '100%' }} variant="primary">Editar Producto</Button>
                                </Card.Footer>
                            </Card>
                        </Col>

                    </Row>

                    <DashFooter />
                </main>

            </div>

        </>
    )
}

export default Products