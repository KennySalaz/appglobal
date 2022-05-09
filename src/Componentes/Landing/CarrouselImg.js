import React from 'react'
import '../../Style/style.css'
import m1 from '../images/1.jpg'
import m2 from '../images/2.jpg'
import m3 from '../images/3.jpg'
import m4 from '../images/4.jpg'
import m5 from '../images/5.jpg'
import m6 from '../images/6.jpg'
import m7 from '../images/7.jpg'
import m8 from '../images/8.jpg'
import m9 from '../images/9.jpg'
import m10 from '../images/10.jpg'
import m11 from '../images/11.jpg'
import m12 from '../images/12.jpg'
import m13 from '../images/13.jpg'
import m14 from '../images/14.jpg'
import m15 from '../images/15.jpg'
import { Link, useNavigate } from 'react-router-dom'






const CarrouselImg = () => {


    const navigate = useNavigate()


    const sendProduct = () => {
       
            navigate('/allProducts')
       
    }


    return (

        <>
            <div className="Carousel">
                <h2>Nuestros Productos</h2>
                <div className="slick-list" id="slick-list">
                    <button
                        className="slick-arrow slick-prev"
                        id="button-prev"
                        data-button="button-prev"
                        onclick="app.processingButton(event)">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-left"
                            className="svg-inline--fa fa-chevron-left fa-w-10"
                            role="img"
                            xmlns="http://www.w3.org/2000/s/vg"
                            viewBox="0 0 320 512">
                            <path
                                fill="currentColor"
                                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z">
                            </path>
                        </svg>
                    </button>
                    <div className="slick-track" id="track">
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                       
                                            <img src={m1} alt="Image" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                       
                                            <img src={m2} alt="Image" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                     
                                            <img src={m3} alt="Image" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                       
                                            <img src={m4} alt="Image" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                       
                                            <img src={m5} alt="Image" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                       
                                            <img src={m6} alt="Image" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                       
                                            <img src={m7} alt="Image" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                       
                                            <img src={m8} alt="Image" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                       
                                            <img src={m9} alt="Image" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                       
                                            <img  src={m10} alt="Image/" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                       
                                            <img src={m11} alt="Image/" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                       
                                            <img src={m12} alt="Image/" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                       
                                            <img src={m13} alt="Image/" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                       
                                            <img src={m14} alt="Image/" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                        <div className="slick">
                            <div>
                               
                                    <h4><small>Share Your Message</small>Watch</h4>
                                    <picture onClick={sendProduct}>
                                       
                                            <img src={m15} alt="Image/" />
                                       
                                    </picture>
                              
                            </div>
                        </div>
                    </div>
                    <button
                        className="slick-arrow slick-next"
                        id="button-next"
                        data-button="button-next"
                        onclick="app.processingButton(event)">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-right"
                            className="svg-inline--fa fa-chevron-right fa-w-10"
                            role="img"
                            xmlns="http://www.w3.org/2000/s/vg"
                            viewBox="0 0 320 512">
                            <path
                                fill="currentColor"
                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                            </path>
                        </svg>
                    </button>
                </div>

            </div>
        </>

    )
}

export default CarrouselImg
