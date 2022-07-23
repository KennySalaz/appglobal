import React, { useEffect, useState } from 'react'
import DashFooter from '../DashFooter'
import DashHeader from '../DashHeader'
import DashSidebar from '../DashSidebar'
import { Form, Button, Col, Row, InputGroup, FormControl } from 'react-bootstrap'
import { Router, Link, useNavigate, useLocation } from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai";
import '../../../../Style/dashboard.css'
import { CloseButton } from 'react-bootstrap'
import 'aos/dist/aos.css'
import AOS from 'aos';

import firebaseApp from '../../../../Utils/firebase'
import { getAuth } from 'firebase/auth'
import { addProductsDb, uploadimgStorage } from '../../../../Controllers/addProducts'
import ModalLottie from '../../../Modals/ModalLottie'
import ToastN from '../../../Modals/Toast/ToastN'
import { addDoc, collection, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { getDocumentId } from '../../../../Controllers/getOneDoc'
let imagenes = {
    img1: 'https://www.hisense.es/wp-content/uploads/2019/06/H30-ICE-BLUE-2.jpg',
    img2: 'https://www.notebookcheck.org/fileadmin/_processed_/c/6/csm_4_zu_3_Teaser_Nokia_2.3_bdcb81c668.jpg',
    img3: 'https://www.android.com/static/2016/img/one/carousel/nokia-9_1x.png',
    img4: 'https://www.android.com/static/2016/img/one/carousel/nokia_8_3_1x.png',
}


let placeHolderDescriptons = `${'Pantalla: 6.9", 1440 x 3200 pixels  Procesador: Snapdragon 865 2.84GHz / Exynos 990 2.73GHz   RAM: 12GB/16GB Almacenamiento: 128/256/512GB Expansión: microSD Cámara: Cuádruple, 108MP+48MP +12MP+TOF Batería: 5000 mAh'}`

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)


function Editproducts(props) {

    const params = useLocation()
    const navigate = useNavigate()
    const [isOpenDasboard, setIsOpenDasboard] = useState(false)
    const [dataParams, setDataParams] = useState({})
    const open = () => {
        setIsOpenDasboard(!isOpenDasboard)
    }

    const [imags, setImags] = useState([])
    const [sendUrl, setSendUrl] = useState([])
    const [loding, setLoding] = useState(null)


    const [formValue, setFormValue] = useState({
        name: '',
        category: '',
        brand: '',
        descriptions: '',
        price: ''
    })
    const [errorCategpry, setErrorCategpry] = useState(false)
    const [errorBrand, setErrorBrand] = useState(false)
    const [errorName, setErrorName] = useState(false)
    const [errorDescription, setErrorDescription] = useState(false)
    const [errorPrice, setErrorPrice] = useState(false)
    const [errorImg, setErrorImg] = useState(false)
    const [errorImg2, setErrorImg2] = useState(false)




    const changeInput = (e) => {
        let indexImg;
        if (imags.length > 0) {
            indexImg = imags[imags.length - 1].index + 1;
        } else {
            indexImg = 0;
        }
        let newImgsToState = readmultifiles(e, indexImg);
        let newImgsState = [...imags, ...newImgsToState];
        setImags(newImgsState);
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
                url,
                file
            });

            indexInicial++;
        });
        return arrayImages;
    }



    function deleteImg(index) {
        //console.log("borrar img " + indice);
        const newImgs = imags.filter(function (element) {
            return element.index !== index;
        });
        setImags(newImgs);
    }
    const validateImg = () => {
        let isValid = true
        if (imags.length === 0) {

            setErrorImg(true)

            isValid = false
        } else if (imags.length < 3) {

            setErrorImg2(true)
            isValid = false
        }

        if (formValue.name === '') {
            setErrorName(true)
            isValid = false
        }
        if (formValue.category === '' || formValue.category === null) {
            setErrorCategpry(true)

            isValid = false
        }
        if (formValue.brand === '' || formValue.brand === null) {
            setErrorBrand(true)

            isValid = false
        }
        if (formValue.descriptions === '') {
            setErrorDescription(true)
            isValid = false
        }
        if (formValue.price === '') {
            setErrorPrice(true)
            isValid = false
        }

        return isValid
    }

    const getDocumenteEdit = async () => {
        setLoding(true)

        const result = await getDocumentId(params.state)
        if (result.statusRespon) {
            setDataParams(result.documentId)
        } else {
            setDataParams({})
            alert(result.error)
        }

        setLoding(false)


    }


    const sendData = async () => {
        setErrorCategpry('')
        setErrorBrand('')
        setErrorName('')
        setErrorPrice('')
        setErrorDescription('')
        if (!validateImg()) { return }
        setLoding(true)
        /* await Promise.all(
            imags.map(async (img) => {
                const { file } = img
                const respuetaStorage = await uploadimgStorage(file)
                if (respuetaStorage.statusResponse) {
                    sendUrl.push(respuetaStorage.url)
                }
            })
        )
        setSendUrl(sendUrl) */
        try {
            await updateDoc(doc(db, 'Products', params.state), {
                name: formValue.name,
                category: formValue.category,
                descriptions: formValue.descriptions,
                brand: formValue.brand,
                price: formValue.price,
                /*  imgs: sendUrl */
            })
        } catch (error) {
            console.log('error al agregar la coleciion producto', error)
        }
        setFormValue({
            name: '',
            category: '',
            brand: '',
            descriptions: '',
            price: ''
        })
        setSendUrl('')


        setLoding(false)
        navigate('/products')
    }

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease'
        });
    })

    useEffect(() => {
        if (formValue.category !== '') {
            setErrorCategpry(false)
        }
        if (formValue.category === 'Select') {
            setErrorCategpry(true)
        }
        if (formValue.brand !== '') {
            setErrorBrand(false)
        }
        if (formValue.brand === 'Select') {
            setErrorBrand(true)
        }
        if (formValue.name !== '') {
            setErrorName(false)
        }
        if (formValue.descriptions !== '') {
            setErrorDescription(false)
        }
        if (formValue.price !== '') {
            setErrorPrice(false)
        }


    }, [formValue.category, formValue.brand, formValue.price, formValue.descriptions, formValue.name])


    useEffect(() => {

        getDocumenteEdit()

        console.log('--.--', dataParams)



    }, [])


    return (
        <>
            <div className={`${(isOpenDasboard && 'toggle-sidebar')}`} >
                <DashHeader open={open} />
                <DashSidebar isOpenDasboard={isOpenDasboard} setIsOpenDasboard={setIsOpenDasboard} />
                <main id="main" className="main" style={{ height: '100vh' }}>
                    <h4>Edit Product  </h4>



                    <Row>
                        <Col lg={5} >
                            <div>
                                <Form>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>Name Product</Form.Label>


                                        <Form.Control


                                            onChange={e => setFormValue({ ...formValue, name: e.target.value })}
                                            type="text"
                                            value={formValue.name || dataParams?.descriptions}
                                            placeholder="Samsung Galaxy S20 Ultra...."
                                        />
                                        <Form.Text className="text-muted">
                                            No exceda los 20 caracteres al ingresar el nombre del producto
                                        </Form.Text>
                                        {
                                            errorName === true && (
                                                <span data-aos="zoom-in" className='errorMesage'> Debes Ingresar un Titulo </span>
                                            )
                                        }
                                    </Form.Group>

                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label>Category</Form.Label>
                                                <Form.Select

                                                    size="sm" value={formValue.category || dataParams?.category} onChange={e => setFormValue({ ...formValue, category: e.target.value })} >
                                                    <option>Select</option>
                                                    <option>Smartphone</option>
                                                    <option>Tablet</option>
                                                    <option>Laptos</option>
                                                    <option>Desktop</option>

                                                </Form.Select>
                                            </Form.Group>

                                            {
                                                errorCategpry === true && (
                                                    <span data-aos="zoom-in" className='errorMesage'> Debes Ingresar una categoria </span>
                                                )
                                            }

                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label>Brand</Form.Label>
                                                <Form.Select

                                                    size="sm" value={formValue.brand || dataParams?.brand} onChange={e => setFormValue({ ...formValue, brand: e.target.value })} >
                                                    <option>Select</option>
                                                    <option>Samsung</option>
                                                    <option>Apple</option>
                                                    <option>Xiomi</option>
                                                </Form.Select>
                                            </Form.Group>


                                            {
                                                errorBrand === true && (
                                                    <span data-aos="zoom-in" className='errorMesage'> Debes Ingresar una Marca </span>
                                                )
                                            }
                                        </Col>

                                    </Row>


                                    <Form.Group >
                                        <Form.Label>Descriptions</Form.Label>
                                        <FormControl
                                            value={formValue.descriptions || dataParams.descriptions}
                                            onChange={e => setFormValue({ ...formValue, descriptions: e.target.value })}
                                            style={{ height: '150px' }}
                                            as="textarea"
                                            aria-label="With textarea"
                                            placeholder={placeHolderDescriptons}



                                        />
                                        {
                                            errorDescription === true && (
                                                <span data-aos="zoom-in" className='errorMesage'> Describe tu producto </span>
                                            )
                                        }
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

                                                        <>

                                                            <div
                                                                className={`${errorImg ? 'd-ico-text-flex_errorImg ' : 'd-ico-text-flex'}  `}>
                                                                <input className='input_type_file' type='file' onChange={changeInput} />


                                                                {
                                                                    errorImg ? (
                                                                        <>
                                                                            <div className='fle-fle-text_' >

                                                                                <div className='ico-fle-fle' >

                                                                                    <i style={{ color: 'red', fontSize: '50px' }} class="bi bi-image-fill"></i>
                                                                                </div>
                                                                                <div className='ico-fle-fle'>
                                                                                    <span className='s-text__' style={{ color: 'red' }}> Ingrese Una Imagen  </span>

                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <div className='fle-fle-text_' >

                                                                                <div className='ico-fle-fle'>

                                                                                    <i style={{ color: '#686868', fontSize: '50px' }} class="bi bi-image-fill"></i>
                                                                                </div>
                                                                                <div className='ico-fle-fle'>
                                                                                    <span className='s-text__'> Drop your images here, <br /> or select   <span className='s-add__'> click to browse </span>  </span>

                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                }

                                                            </div>
                                                        </>




                                                    ) : (
                                                        <>

                                                            <div className={`'fle-fle-text_img' ${imags[0] && 'col_muttation'}`}>
                                                                <div className='zoo__'>

                                                                    <img data-aos="zoom-in" className='id_shadow' style={{ width: '100%' }} src={imags[0].url} />


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
                                                        <div className={`${errorImg2 ? 'd-ico-text-flex_errorImg ' : 'd-ico-text-flex'}  `}>
                                                            <input className='input_type_file' type='file' onChange={changeInput} />
                                                            {
                                                                errorImg2 ? (
                                                                    <>
                                                                        <div className='fle-fle-text_' >

                                                                            <div className='ico-fle-fle' >

                                                                                <i style={{ color: 'red', fontSize: '50px' }} class="bi bi-image-fill"></i>
                                                                            </div>
                                                                            <div className='ico-fle-fle'>
                                                                                <span className='s-text__' style={{ color: 'red' }}> Minimo de imagenes 3  </span>

                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <div className='fle-fle-text_' >

                                                                            <div className='ico-fle-fle'>

                                                                                <i style={{ color: '#686868', fontSize: '50px' }} class="bi bi-image-fill"></i>
                                                                            </div>
                                                                            <div className='ico-fle-fle'>
                                                                                <span className='s-text__'> Drop your images here, <br /> or select   <span className='s-add__'> click to browse </span>  </span>

                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }

                                                        </div>

                                                    ) : (
                                                        <>
                                                            <div className={`'fle-fle-text_img' ${imags[1] && 'col_muttation'}`} >
                                                                <div className='zoo__'>
                                                                    <img data-aos="zoom-in" className='id_shadow' style={{ width: '100%' }} src={imags[1].url} />
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

                                                        <div className={`${errorImg2 ? 'd-ico-text-flex_errorImg ' : 'd-ico-text-flex'}  `}>
                                                            <input className='input_type_file' type='file' onChange={changeInput} />

                                                            {
                                                                errorImg2 ? (
                                                                    <>
                                                                        <div className='fle-fle-text_' >

                                                                            <div className='ico-fle-fle' >

                                                                                <i style={{ color: 'red', fontSize: '50px' }} class="bi bi-image-fill"></i>
                                                                            </div>
                                                                            <div className='ico-fle-fle'>
                                                                                <span className='s-text__' style={{ color: 'red' }}> Minimo de imagenes 3  </span>

                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <div className='fle-fle-text_' >

                                                                            <div className='ico-fle-fle'>

                                                                                <i style={{ color: '#686868', fontSize: '50px' }} class="bi bi-image-fill"></i>
                                                                            </div>
                                                                            <div className='ico-fle-fle'>
                                                                                <span className='s-text__'> Drop your images here, <br /> or select   <span className='s-add__'> click to browse </span>  </span>

                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }

                                                        </div>

                                                    ) : (
                                                        <>
                                                            <div className={`'fle-fle-text_img' ${imags[2] && 'col_muttation'}`} >
                                                                <div className='zoo__'>
                                                                    <img data-aos="zoom-in" className='id_shadow' style={{ width: '100%' }} src={imags[2].url} />
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
                                                                    <img data-aos="zoom-in" className='id_shadow-2' style={{ width: '100%' }} src={imags[3].url} />
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
                                                                    <img data-aos="zoom-in" className='id_shadow-2' style={{ width: '100%' }} src={imags[4].url} />
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

                                                                    <img data-aos="zoom-in" className='id_shadow-2' style={{ width: '100%' }} src={imags[5].url} />
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
                                                                    <img data-aos="zoom-in" className='id_shadow-2' style={{ width: '100%' }} src={imags[6].url} />
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
                                    <Col lg={6} >
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control value={formValue.price || dataParams.price} onChange={e => setFormValue({ ...formValue, price: e.target.value })} type="email" placeholder="$" />
                                            {
                                                errorPrice === true && (
                                                    <span className='errorMesage'> Debes ingresar un precio </span>
                                                )
                                            }
                                        </Form.Group>
                                        <ToastN errorImg={errorImg} />

                                    </Col>
                                    <Col lg={12} >
                                        <Button className="mb-3" style={{ width: '100%', background: '#012970', borderColor: '#012970 ' }} onClick={sendData} type="submit">
                                            Update products
                                        </Button>

                                    </Col>


                                </Row>

                                <ModalLottie loding={loding} />



                            </div>
                        </Col>
                    </Row>

                </main>
                <DashFooter />
            </div>

        </>
    )
}

export default Editproducts