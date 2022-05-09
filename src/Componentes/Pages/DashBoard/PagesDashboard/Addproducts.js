import React, { useEffect, useState } from 'react'
import DashFooter from '../DashFooter'
import DashHeader from '../DashHeader'
import DashSidebar from '../DashSidebar'
import { Form, Button, Col, Row, InputGroup, FormControl } from 'react-bootstrap'
import { Router } from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai";
import '../../../../Style/dashboard.css'
import { CloseButton } from 'react-bootstrap'
import 'aos/dist/aos.css'
import AOS from 'aos';
let imagenes = {
    img1: 'https://www.hisense.es/wp-content/uploads/2019/06/H30-ICE-BLUE-2.jpg',
    img2: 'https://www.notebookcheck.org/fileadmin/_processed_/c/6/csm_4_zu_3_Teaser_Nokia_2.3_bdcb81c668.jpg',
    img3: 'https://www.android.com/static/2016/img/one/carousel/nokia-9_1x.png',
    img4: 'https://www.android.com/static/2016/img/one/carousel/nokia_8_3_1x.png',


}


function Addproducts(props) {

    const [isOpenDasboard, setIsOpenDasboard] = useState(false)
    const open = () => {
        setIsOpenDasboard(!isOpenDasboard)
    }

    const [imags, setImags] = useState([])

    const [formValue, setFormValue] = useState({
        name: '',
        category: '',
        brand: '',
        descriptions: '',
        price: ''
    })




    const changeInput = (e) => {




        //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
        let indexImg;

        //aquí evaluamos si ya hay imagenes antes de este input, para saber en dónde debe empezar el index del proximo array
        if (imags.length > 0) {
            indexImg = imags[imags.length - 1].index + 1;
        } else {
            indexImg = 0;
        }

        let newImgsToState = readmultifiles(e, indexImg);
        let newImgsState = [...imags, ...newImgsToState];

        setImags(newImgsState);

        console.log(newImgsState);
    };

    function readmultifiles(e, indexInicial) {
        const files = e.currentTarget.files;

        //el array con las imagenes nuevas
        const arrayImages = [];

        Object.keys(files).forEach((i) => {
            const file = files[i];

            let url = URL.createObjectURL(file);

            //console.log(file);
            arrayImages.push({
                index: indexInicial,
                https: url
            });

            indexInicial++;

        });

        //despues de haber concluido el ciclo retornamos las nuevas imagenes
        return arrayImages;
    }

    function deleteImg(index) {
        //console.log("borrar img " + indice);



        const newImgs = imags.filter(function (element) {
            return element.index !== index;
        });
        console.log(newImgs);
        setImags(newImgs);
    }



    const validateImg = () => {
        let isValid = true
        if (imags.length === 0) {
            console.log(`Debes ingresar las imagenes de tu producto`)

            isValid = false
        } else if (imags.length < 3) {
            console.log(`Debes cargar mas de 3 imagenes`)
            isValid = false
        }



        return isValid
    }


    const sendData = () => {
        if (!validateImg()) { return }

        console.log(formValue)


    }

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease'
        });
    })

    useEffect(() => {
        console.log(formValue)
    }, [formValue])

    return (
        <>
            <div className={`${(isOpenDasboard && 'toggle-sidebar')}`} >
                <DashHeader open={open} />
                <DashSidebar isOpenDasboard={isOpenDasboard} setIsOpenDasboard={setIsOpenDasboard} />
                <main id="main" className="main" style={{ height: '100vh' }}>
                    <h4>New product  </h4>
                    <Row>
                        <Col lg={5} >
                            <div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name Product</Form.Label>
                                        <Form.Control onChange={e => setFormValue({ ...formValue, name: e.target.value })} type="email" placeholder="example: Samsung s20 ultra.... " />
                                        <Form.Text className="text-muted">
                                            No exceda los 20 caracteres al ingresar el nombre del producto
                                        </Form.Text>
                                    </Form.Group>

                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Category</Form.Label>
                                                <Form.Select size="sm" onChange={e => setFormValue({ ...formValue, category: e.target.value })} >
                                                    <option>Smartphone</option>
                                                    <option>Tablet</option>
                                                    <option>Laptos</option>
                                                    <option>Desktop</option>

                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Brand</Form.Label>
                                                <Form.Select size="sm" onChange={e => setFormValue({ ...formValue, brand: e.target.value })} >
                                                    <option>Samsung</option>
                                                    <option>Apple</option>
                                                    <option>Xiomi</option>
                                                </Form.Select>
                                            </Form.Group>

                                        </Col>

                                    </Row>


                                    <Form.Group >
                                        <Form.Label>Descriptions</Form.Label>
                                        <FormControl onChange={e => setFormValue({ ...formValue, descriptions: e.target.value })} style={{ height: '200px' }} as="textarea" aria-label="With textarea" />
                                    </Form.Group>
                                </Form>
                            </div>

                        </Col>
                        <Col lg={7} >
                            <div>
                                <h7> Product Images </h7>
                                <Row style={{ paddingTop: '25px' }}>
                                    <Col lg={12}>
                                        <Row style={{ marginBottom: '10px' }}>
                                            <Col lg={4}   >

                                                {
                                                    !imags[0] ? (
                                                        <div

                                                            className='d-ico-text-flex'>
                                                            <input className='input_type_file' type='file' onChange={changeInput} />
                                                            <div className='fle-fle-text_' >

                                                                <div className='ico-fle-fle'>

                                                                    <i style={{ color: '#686868', fontSize: '50px' }} class="bi bi-image-fill"></i>
                                                                </div>
                                                                <div className='ico-fle-fle'>
                                                                    <span className='s-text__'> Drop your images here, <br /> or select   <span className='s-add__'> click to browse </span>  </span>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    ) : (
                                                        <>

                                                            <div className={`'fle-fle-text_img' ${imags[0] && 'col_muttation'}`}>
                                                                <div className='zoo__'>

                                                                    <img data-aos="zoom-in" className='id_shadow' style={{ width: '100%' }} src={imags[0].https} />


                                                                    <div style={{ display: 'contents' }}>
                                                                        <AiFillDelete size={50} className='ico_delete-img' onClick={() => deleteImg(imags[0].index)} />
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </>

                                                    )
                                                }


                                            </Col>
                                            <Col lg={4}>
                                                {
                                                    !imags[1] ? (
                                                        <div className='d-ico-text-flex'>
                                                            <input className='input_type_file' type='file' onChange={changeInput} />
                                                            <div className='fle-fle-text_' >

                                                                <div className='ico-fle-fle'>

                                                                    <i style={{ color: '#686868', fontSize: '50px' }} class="bi bi-image-fill"></i>
                                                                </div>
                                                                <div className='ico-fle-fle'>
                                                                    <span className='s-text__'> Drop your images here, <br /> or select   <span className='s-add__'> click to browse </span>  </span>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    ) : (
                                                        <>
                                                            <div className={`'fle-fle-text_img' ${imags[1] && 'col_muttation'}`} >
                                                                <div className='zoo__'>
                                                                    <img data-aos="zoom-in" className='id_shadow' style={{ width: '100%' }} src={imags[1].https} />
                                                                    <div style={{ display: 'contents' }}>


                                                                        <AiFillDelete size={50} className='ico_delete-img' onClick={() => deleteImg(imags[1].index)} />



                                                                    </div>
                                                                </div>

                                                            </div>



                                                        </>

                                                    )
                                                }



                                            </Col>
                                            <Col lg={4}>

                                                {
                                                    !imags[2] ? (
                                                        <div className='d-ico-text-flex'>
                                                            <input className='input_type_file' type='file' onChange={changeInput} />
                                                            <div className='fle-fle-text_' >

                                                                <div className='ico-fle-fle'>

                                                                    <i style={{ color: '#686868', fontSize: '50px' }} class="bi bi-image-fill"></i>
                                                                </div>
                                                                <div className='ico-fle-fle'>
                                                                    <span className='s-text__'> Drop your images here, <br /> or select   <span className='s-add__'> click to browse </span>  </span>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    ) : (
                                                        <>
                                                            <div className={`'fle-fle-text_img' ${imags[2] && 'col_muttation'}`} >
                                                                <div className='zoo__'>
                                                                    <img data-aos="zoom-in" className='id_shadow' style={{ width: '100%' }} src={imags[2].https} />
                                                                    <div style={{ display: 'contents' }}>
                                                                        <AiFillDelete size={50} className='ico_delete-img' onClick={() => deleteImg(imags[2].index)} />
                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </>

                                                    )
                                                }

                                            </Col>

                                        </Row>

                                    </Col>
                                    <Col lg={12}>
                                        <Row>
                                            <Col lg={3}  >

                                                {
                                                    !imags[3] ? (
                                                        <div className='d-ico-text-flex-colum-2'>
                                                            <input className='input_type_file-colum-2' type='file' onChange={changeInput} />
                                                            <div className='fle-fle-text_' >

                                                                <div className='ico-fle-fle'>

                                                                    <i style={{ color: '#686868', fontSize: '50px' }} class="bi bi-image-fill"></i>
                                                                </div>
                                                                <div className='ico-fle-fle'>
                                                                    <span className='s-text__2'> Drop your images here, <br /> or select
                                                                        <br />
                                                                        <span className='s-add__2'> click to browse </span>  </span>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    ) : (
                                                        <>
                                                            <div className={`'fle-fle-text_img' ${imags[3] && 'col_muttation'}`} >

                                                                <div className='zoo__2'>
                                                                    <img data-aos="zoom-in" className='id_shadow-2' style={{ width: '100%' }} src={imags[3].https} />
                                                                    <div style={{ display: 'contents' }}>
                                                                        <AiFillDelete size={50} className='ico_delete-img' onClick={() => deleteImg(imags[3].index)} />
                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </>

                                                    )
                                                }

                                            </Col>
                                            <Col lg={3}  >

                                                {
                                                    !imags[4] ? (
                                                        <div className='d-ico-text-flex-colum-2'>
                                                            <input className='input_type_file-colum-2' type='file' onChange={changeInput} />
                                                            <div className='fle-fle-text_' >

                                                                <div className='ico-fle-fle'>

                                                                    <i style={{ color: '#686868', fontSize: '50px' }} class="bi bi-image-fill"></i>
                                                                </div>
                                                                <div className='ico-fle-fle'>
                                                                    <span className='s-text__2'> Drop your images here, <br /> or select
                                                                        <br />
                                                                        <span className='s-add__2'> click to browse </span>  </span>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    ) : (
                                                        <>
                                                            <div className={`'fle-fle-text_img' ${imags[4] && 'col_muttation'}`} >

                                                                <div className='zoo__2'>
                                                                    <img data-aos="zoom-in" className='id_shadow-2' style={{ width: '100%' }} src={imags[4].https} />
                                                                    <div style={{ display: 'contents' }}>
                                                                        <AiFillDelete size={50} className='ico_delete-img' onClick={() => deleteImg(imags[4].index)} />
                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </>

                                                    )
                                                }

                                            </Col>
                                            <Col lg={3} >

                                                {
                                                    !imags[5] ? (
                                                        <div className='d-ico-text-flex-colum-2'>
                                                            <input className='input_type_file-colum-2' type='file' onChange={changeInput} />
                                                            <div className='fle-fle-text_' >

                                                                <div className='ico-fle-fle'>

                                                                    <i style={{ color: '#686868', fontSize: '50px' }} class="bi bi-image-fill"></i>
                                                                </div>
                                                                <div className='ico-fle-fle'>
                                                                    <span className='s-text__2'> Drop your images here, <br /> or select
                                                                        <br />
                                                                        <span className='s-add__2'> click to browse </span>  </span>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    ) : (
                                                        <>
                                                            <div className={`'fle-fle-text_img' ${imags[5] && 'col_muttation'}`} >
                                                                <div className='zoo__2'>

                                                                    <img data-aos="zoom-in" className='id_shadow-2' style={{ width: '100%' }} src={imags[5].https} />
                                                                    <div style={{ display: 'contents' }}>
                                                                        <AiFillDelete size={50} className='ico_delete-img' onClick={() => deleteImg(imags[5].index)} />
                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </>

                                                    )
                                                }

                                            </Col>
                                            <Col lg={3}  >

                                                {
                                                    !imags[6] ? (
                                                        <div className='d-ico-text-flex-colum-2'>
                                                            <input className='input_type_file-colum-2' type='file' onChange={changeInput} />
                                                            <div className='fle-fle-text_' >

                                                                <div className='ico-fle-fle'>

                                                                    <i style={{ color: '#686868', fontSize: '50px' }} class="bi bi-image-fill"></i>
                                                                </div>
                                                                <div className='ico-fle-fle'>
                                                                    <span className='s-text__2'> Drop your images here, <br /> or select
                                                                        <br />
                                                                        <span className='s-add__2'> click to browse </span>  </span>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    ) : (
                                                        <>
                                                            <div className={`'fle-fle-text_img' ${imags[6] && 'col_muttation'}`} >

                                                                <div className='zoo__2'>
                                                                    <img data-aos="zoom-in" className='id_shadow-2' style={{ width: '100%' }} src={imags[6].https} />
                                                                    <div style={{ display: 'contents' }}>
                                                                        <AiFillDelete size={50} className='ico_delete-img' onClick={() => deleteImg(imags[6].index)} />
                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </>

                                                    )
                                                }

                                            </Col>


                                        </Row>

                                    </Col>



                                </Row>
                                <Row style={{ paddingTop: '30px' }}>
                                    <Col lg={4} >
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control onChange={e => setFormValue({ ...formValue, price: e.target.value })} type="email" placeholder="$" />

                                        </Form.Group>

                                    </Col>
                                    <Col lg={8} >


                                    </Col>


                                </Row>
                                <Col>

                                    <Button onClick={sendData} variant="primary" type="submit">
                                        Add products
                                    </Button>
                                </Col>
                            </div>
                        </Col>
                    </Row>

                </main>
                <DashFooter />
            </div>

        </>
    )
}

export default Addproducts