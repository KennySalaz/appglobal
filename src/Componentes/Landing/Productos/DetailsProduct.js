
import { useState } from 'react';
import { Card, Col, Container, Row, Button, Table, ListGroup } from 'react-bootstrap';
import { Carousel } from 'react-carousel-minimal';
import Header from '../Header';
import Footer from '../Footer';
import '../../../Style/style.css'
import { GiCommercialAirplane } from 'react-icons/gi';
import { CgMoreVerticalR } from 'react-icons/cg';
import { RiShieldCheckLine } from 'react-icons/ri';


const DetailsProduct = () => {

    const data = [
        {
            image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000',

        },
        {
            image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948875000',

        },
        {
            image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/33/3301085/APPLE-MacBook-Pro-14-Srebrny.jpg',

        },
        {
            image: 'https://www.apple.com/newsroom/images/tile-images/Apple_16-inch-MacBook-Pro_111319.jpg.landing-big_2x.jpg',

        },
        {
            image: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/158839-laptops-review-apple-macbook-pro-14-inch-review-image2-ribxgzs9jt.jpg',

        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/MacBook_Pro_Retina_001.jpg',

        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJXfNxFk6I7K-YftkdUIhnazUggAU1rg8x6-O7qrxWD-6OfYuUWUzwuYjSqJhjjRpBhc&usqp=CAU',

        },

    ];


    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <>

            <Header />
            <Container lg style={{ marginTop:'50px' }}>
                <Card>
                    <Row >

                        <Row>
                            <Col lg={8} style={{ padding: '50px' }} >
                                <div style={{
                                    padding: "0 20px"
                                }}>
                                    <Carousel
                                        data={data}
                                        time={2000}

                                        width="850px"
                                        height="500px"
                                        captionStyle={captionStyle}
                                        radius="10px"
                                        slideNumber={true}
                                        slideNumberStyle={slideNumberStyle}
                                        captionPosition="bottom"
                                        automatic={true}
                                        dots={true}
                                        pauseIconColor="red"

                                        pauseIconSize="40px"
                                        slideBackgroundColor="white"
                                        slideImageFit="contain"
                                        thumbnails={true}
                                        thumbnailWidth="80px"
                                        style={{
                                            textAlign: "center",
                                            maxWidth: "850px",
                                            maxHeight: "500px",
                                            margin: "40px auto",
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={4} >
                                <div className='card_edit'>

                                    <div>
                                        <Col lg={12} >
                                            <h2 style={{ padding: '10px' }}>   Samsung Galaxy S21 Ultra </h2>

                                            <div className='activeGrren'>
                                                <span className='disponibe'>
                                                    Disponible | 44 vendidos

                                                </span>


                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div >
                                                <span className='css-text-ofert'>
                                                    $650
                                                </span>
                                                <br />
                                                <span className='classPrice'>
                                                    $500.80
                                                </span>
                                                <Col lg={12} style={{ padding: '10px' }}  >
                                                    <Button style={{ width: '100%' }} variant="primary"> Contact</Button>
                                                </Col>
                                                <Col lg={12} className='mBottonClass'  >   <span style={{ color: 'blue', padding: '10px' }}>
                                                    Ver los medios de pagos
                                                </span></Col>
                                                <Col lg={12} className='mBottonClass' style={{ padding: '10px' }}  >

                                                    <GiCommercialAirplane />
                                                    <span style={{ padding: '10px', color: '#20c997' }} >
                                                        Envío internacional
                                                    </span></Col>
                                                <Col lg={12} className='mBottonClass' style={{ padding: '10px' }}  >
                                                    <CgMoreVerticalR />
                                                    <span style={{ color: 'blue', padding: '10px' }} >
                                                        Conocer mas
                                                    </span>
                                                </Col>









                                            </div>


                                        </Col >
                                        <Col lg={12}>
                                            <span style={{ padding: '10px' }} >
                                                <Card.Header>
                                                    Cantidad: (137 disponibles)
                                                </Card.Header>

                                            </span>

                                        </Col >

                                        <Col lg={12} style={{ padding: '10px' }} >
                                            <RiShieldCheckLine size={20} color='green' />
                                            <span style={{ fontSize: '13px' }}  >
                                                <span style={{ color: '#003df7', fontWeight: '600' }}> Compra Protegida</span>, Se abrirá en una nueva ventana, recibe el producto que esperabas o te devolvemos tu dinero.
                                            </span>
                                        </Col>

                                    </div>





                                </div>


                            </Col>
                        </Row>

                        <Col lg={12}>


                            <div className='colum-class-TWO'>
                                <div className='colum-class-one'>
                                    <Card.Header>
                                      Descriptions
                                    </Card.Header>

                                    <Card.Text>

                                        <Table  >

                                            <tbody>

                                                <tr>
                                                    <td>DIMENSIONES</td>
                                                    <td>31,26 x 22,12 x 1,55 cm</td>

                                                </tr>
                                                <tr>
                                                    <td> PESO</td>
                                                    <td>   1,61 Kg</td>

                                                </tr>
                                                <tr>
                                                    <td> CHIP</td>
                                                    <td> M1 Pro o M1 Max</td>

                                                </tr>
                                                <tr>
                                                    <td>GPU</td>
                                                    <td> 14, 16 o 32 núcleos</td>

                                                </tr>
                                                <tr>
                                                    <td>  MEMORIA RAM</td>
                                                    <td> 16, 32 (M1 Pro) o 64 GB (M1 Max)</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        PANTALLA</td>
                                                    <td>   14 pulgadas XDR Pro Display con ProMotion</td>

                                                </tr>
                                                <tr>
                                                    <td>ALMACENAMIENTO</td>
                                                    <td> 16, 32 (M1 Pro) o 64 GB (M1 Max)</td>

                                                </tr>
                                                <tr>
                                                    <td>  MEMORIA RAM</td>
                                                    <td> 16, 32 (M1 Pro) o 64 GB (M1 Max)</td>

                                                </tr>
                                                <tr>
                                                    <td>  MEMORIA RAM</td>
                                                    <td> 16, 32 (M1 Pro) o 64 GB (M1 Max)</td>

                                                </tr>
                                            </tbody>
                                        </Table>

                                    </Card.Text>
                                </div>



                            </div>



                        </Col>
                    </Row>

                </Card>



            </Container>

            <Footer />


        </>
    )
}

export default DetailsProduct