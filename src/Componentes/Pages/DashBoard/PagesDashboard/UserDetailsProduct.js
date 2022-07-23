
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button, Table } from 'react-bootstrap';
import { Carousel } from 'react-carousel-minimal';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDocumentId } from '../../../../Controllers/getOneDoc';
import DashFooter from '../DashFooter'
import DashHeader from '../DashHeader'
import DashSidebar from '../DashSidebar'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ModalLottie from '../../../Modals/ModalLottie';

function UserDetailsProduct() {

    const params = useLocation()

    const navigate = useNavigate()

    const [isOpenDasboard, setIsOpenDasboard] = useState(false)
    const [documentProduct, setDocumentProduct] = useState({})
    const [loading, setLoading] = useState(false)




    const editproducts = () => {
        navigate('/editproducts', { state: params.state })
    }
    const open = () => {
        setIsOpenDasboard(!isOpenDasboard)
    }

    const traerDocuemntPorid = async () => {
        setLoading(true)
        const result = await getDocumentId(params.state)
        if (result.statusRespon) {
            setDocumentProduct(result.documentId)
        } else {
            setDocumentProduct({})
            alert(result.error)
        }
        setLoading(false)
    }
    useEffect(() => {
        traerDocuemntPorid()
    }, [])

    return (

        <div className={`${(isOpenDasboard && 'toggle-sidebar')}`} >
            <DashHeader open={open} />
            <DashSidebar isOpenDasboard={isOpenDasboard} setIsOpenDasboard={setIsOpenDasboard} />


            {/*  <Skeleton count={5} /> */}
            <main id="main" style={{ height: '100vh', paddingTop: '20px' }}>
                <ModalLottie loding={loading} />
                <Card style={{ display: 'contents' }}>

                    <Row >

                        <Col lg={6} >
                            <div style={{
                                padding: "0 20px"
                            }}>

                                {
                                    documentProduct?.imgs?.map(imgen => (
                                        <img width={'100px'} height={'100'} src={imgen} />
                                    ))
                                }

                            </div>
                        </Col>
                        <Col lg={6}>
                            <Card.Header>
                                {documentProduct.name}


                            </Card.Header>



                            <Card.Title>

                                {documentProduct.brand}
                            </Card.Title>

                            <Card.Title>

                                {documentProduct.price}
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

                                {documentProduct.description}
                            </Card.Text>
                            <Button variant="primary" onClick={editproducts} > Editar Producto</Button>

                        </Col>
                    </Row>
                </Card>
            </main>
        </div>


    );
}

export default UserDetailsProduct;