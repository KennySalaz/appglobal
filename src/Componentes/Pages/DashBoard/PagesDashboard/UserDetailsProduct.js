
import { useState } from 'react';
import { Card, Col, Container, Row, Button, Table } from 'react-bootstrap';
import { Carousel } from 'react-carousel-minimal';
import DashFooter from '../DashFooter'
import DashHeader from '../DashHeader'
import DashSidebar from '../DashSidebar'

function UserDetailsProduct() {


    const [isOpenDasboard, setIsOpenDasboard] = useState(false)
    const open = () => {
        setIsOpenDasboard(!isOpenDasboard)
    }
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

        <div className={`${(isOpenDasboard && 'toggle-sidebar')}`} >
            <DashHeader open={open} />
            <DashSidebar isOpenDasboard={isOpenDasboard} setIsOpenDasboard={setIsOpenDasboard} />
            <main id="main" style={{ height: '100vh', paddingTop: '20px' }}>
                <Card style={{ display: 'contents' }}>
                    <Row >
                        <Col lg={6} >
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
                        <Col lg={6}>
                            <Card.Header> Samsung Galaxy S21 Ultra</Card.Header>




                            <Card.Title>

                                $500
                            </Card.Title>
                            <Card.Text>
                                <div className='activeGrren'>
                                    <span className='disponibe'>
                                        Disponible

                                    </span>


                                </div>
                            </Card.Text>

                            <Card.Text>
                                22 Cantidades
                            </Card.Text>

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
                            <Button variant="primary"> compre ya</Button>

                        </Col>
                    </Row>
                </Card>
            </main>
        </div>


    );
}

export default UserDetailsProduct;