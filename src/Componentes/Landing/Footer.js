import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import logoHome from '../images/logohome.png'



const Footer = () => {
    return (



        <div className='footer-clasSty'>
            <div className="auto-container">
                <div className="widgets-section">
                    <div className="row clearfix">
                        <div className="big-column col-lg-12 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="logo">
                                        <img className='img-contextC' src={logoHome} alt="" />
                                        <div className="copyright_redit">
                                            Globalnet Usa Inc <span className='r-color'> ® </span>  2022 All Rights
                                            Reserved. <br/>
                                        </div>
                                        <div className="direcc__sty">
                                            16650 PARTRIDGE PLACE RD. FORT MYERS, FL 33908,<br/>
                                            Phone: +1 954-271-9003,<br/>
                                            email: sales@globalnet.us.com
                                        </div>
                                    </div>

                                </div>
                                <div className="c-Flex col-lg-5 col-md-4 col-sm-4">
                                    <div className="default-form contact-form">
                                        <div className="mb-3 row">
                                            <div className="col-sm-10">
                                                <input
                                                    className="form-control"
                                                    required
                                                    placeholder='Nombre y apellido' />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <div className="col-sm-10">
                                                <input
                                                    type="email"
                                                    required
                                                    className="form-control"
                                                    placeholder='Email' />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <div className="col-sm-10">
                                                <input
                                                    className="form-control"
                                                    required
                                                    placeholder='Requerimiento' />
                                            </div>
                                        </div>
                                        <div class="form-group">
												<button type="submit" class="theme-btn btn-style-four button__modi_">
													<span class="txt">Enviar</span>
												</button>
											</div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-sm-4">
                                    <div className="footer-widget"
                                    >
                                        <div className="icon">
                                            <a target="_blank"
                                                href="https://instagram.com/globalnetusa?utm_medium=copy_link">
                                                <div >   <AiFillInstagram size={30} color='#ffffff' />  </div>
                                            </a>
                                        </div>
                                        <div className="icon">
                                            <a target="_blank"
                                                href="https://www.facebook.com/Globalnet-USA-Inc-107702985172134">
                                                <div >   <AiFillFacebook size={30} color='#ffffff' />  </div>

                                            </a>

                                        </div>

                                        <div className="icon">
                                            <a target="_blank"
                                                href="https://www.linkedin.com/company/globalnet-usa-inc/?viewAsMember=true">
                                                <div> <AiFillLinkedin size={30} color='#ffffff' />   </div>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Footer
