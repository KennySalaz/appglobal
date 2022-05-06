import React, { useEffect } from 'react'
import '../../Style/style.css'
import Img1 from '../images/img1.png'
import Img2 from '../images/img2.png'
import Img3 from '../images/img3.png'
import Img4 from '../images/img4.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Redes from './Redes'
import { BsCheckLg } from "react-icons/bs";
import CarrouselImg from './CarrouselImg'

const Section = () => {

    
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    })



    return (
        <>
            <div className="container-xl">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div class="content-column col-sm-4 center_sFlex">
                            <div className="m-top-section inner-column ">
                                <div className='text-t-form' /* style="font-size: 20px !important; text-transform: uppercase;" */>
                                    Empresa líder en la  venta de  equipos y servicios tecnológicos
                                </div>
                                <div className="title-eForm">en EEUU y Latinoamérica.</div>
                                <div className='p-flexB b100-r '>
                                    <a className=' b100-r' href="mailto:sales@globalnet.us.com">
                                        <button type="button" className="button_cita btn btn-dark">  Agendar cita</button>
                                    </a>

                                </div>
                            </div>

                        </div>
                        <div className="col-sm-8" data-aos="fade-up" >
                            <img className='img_Sty' src={Img1} />
                        </div>
                    </div>

                </div>
                <CarrouselImg/>
                <div className="row clearfix">
                    <Redes />
                    <div className="image-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column parallax-scene-1">
                            <div className="image" data-depth="0.30">
                                <img className='img-classS' src={Img2} alt="" data-aos="fade-up" />
                            </div>
                        </div>
                    </div>


                    <div className="text-p content-column col-lg-5 col-md-12 col-sm-12 ">
                        <div className="inner-column">
                            <div className='cpG' data-aos="fade-up">
                                Global Net nace en Agosto 2020,
                                <span className='pcolorg'> con la finalidad de brindar asesoría en materia tecnológica </span>
                                , a fin de asegurar la adopción
                                exitosa de nuevas tecnologías a nuestros
                                clientes, con presencia en el Mercado
                                Corporativo. Cuenta con personal técnico
                                altamente calificado para atender las
                                necesidades de nuestros clientes.
                            </div>
                        </div>
                    </div>
                </div>
               

                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="r-pon-edit content-column col-lg-5 col-md-12 col-sm-12"  >
                            <div className="config_respon">
                                <div className="inner-column">
                                    <div className="sec-title config_respon-2">

                                        <div className="text cpG" data-aos="fade-up" >
                                            <span className='pcolorg'  > Nuestra amplia experiencia nos permite
                                                orientar con gran profesionalismo </span>
                                            en todo
                                            lo relacionado al área de tecnología:
                                            instalación, soporte técnico, compras y
                                            ventas de equipos tecnológicos de marcas
                                            altamente reconocidas a nivel mundial.

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="image-column col-lg-7 col-md-12 col-sm-12">
                            <div className="config_responImg">
                                <div className="inner-column parallax-scene-2">
                                    <div className="image" data-depth="0.30">
                                        <img className='img-classS-2' src={Img3} alt="" data-aos="fade-up" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="p-auto-r auto-container">
                    <div class="row clearfix">
                        <div class="col-lg-12 col-md-12 col-sm-12" data-aos="zoom-in-right">
                            <div class="propo_text">
                                <h2 class="modif_hd_text">Propósito</h2>
                                <div class="text_proposito">
                                    <span class="text_litte_">
                                        Empoderar a nuestros clientes
                                    </span>
                                    a lograr grandes resultados con el uso de la tecnología.
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12" data-aos="fade-right">
                            <div class="back_title_">
                                <h2 class="h2_modifice__">Misión</h2>
                                <div class="row row-cols-4">

                                    <div class="col-11 text__class__">
                                        Satisfacer las necesidades de nuestros clientes, ofreciendo soluciones tecnológicas
                                        con el apoyo de
                                        nuestro gran equipo de profesionales.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12" data-aos="fade-right">
                            <div class="back__vision">
                                <h2 class="h2_modifice__">Visión</h2>
                                <div class="row row-cols-4">

                                    <div class="col-11 text__class__">
                                        Ser una empresa líder en la venta de equipos y servicios tecnológicos en EEUU y
                                        Latinoamérica.
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-auto-r auto-container">
                    <div className="row clearfix">

                        <div className="auto-flexSTY col-lg-4 col-md-12 col-sm-12" data-aos="fade-up">
                            <div className="text text_respon">
                                <h2 className="text_respo1_">Nuestros Valores</h2>
                                <div className="f_flexCheck">
                                    <span className="color_check"><BsCheckLg color={'#02e6ff'} /></span>
                                    <p className='p-text-color'> Honestidad </p>
                                </div>
                                <div className="f_flexCheck">
                                    <span className="color_check"><BsCheckLg color={'#02e6ff'} /></span>
                                    <p className='p-text-color'> Calidad </p>
                                </div>
                                <div className="f_flexCheck">
                                    <span className="color_check"><BsCheckLg color={'#02e6ff'} /></span>
                                    <p className='p-text-color'> Servicio al Cliente </p>
                                </div>
                                <div className="f_flexCheck">
                                    <span className="color_check"><BsCheckLg color={'#02e6ff'} /></span>
                                    <p className='p-text-color'> Trabajo en Equipo </p>
                                </div>
                                <div className="f_flexCheck">
                                    <span className="color_check"><BsCheckLg color={'#02e6ff'} /></span>
                                    <p className='p-text-color'> Innovación </p>
                                </div>
                                <div className="f_flexCheck">
                                    <span className="color_check"><BsCheckLg color={'#02e6ff'} /></span>
                                    <p className='p-text-color'> Rentabilidad </p>
                                </div>
                            </div>

                        </div>
                        <div className="image-column col-lg-8 col-md-12 col-sm-12" data-aos="fade-up" >
                            <div className="inner-column parallax-scene-3">
                                <div className="image" data-depth="0.30">
                                    <img className='img-autoWiCT' src={Img4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Section
