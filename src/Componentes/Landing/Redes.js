import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';
import { AiFillFacebook , AiFillInstagram, AiFillLinkedin} from "react-icons/ai";




const Redes = () => {
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    })
    return (
        <div>
            <div className="rede_s" data-aos="fade-up">
					<div className="rombo_2">
						<div className="rotate_edit">
							<a target="_blank" class="color_iconn_"
								href="https://www.facebook.com/Globalnet-USA-Inc-107702985172134">
                                    <div>
                                    <AiFillFacebook />
                                    </div>
                                    
							
							</a>
						</div>
					</div>
					<div className="rombo_2">
						<div className="rotate_edit">
							<a target="_blank" class="color_iconn_"
								href="https://instagram.com/globalnetusa?utm_medium=copy_link">
							   <AiFillInstagram />
							</a>
						</div>
					</div>
					<div className="rombo_2">
						<div className="rotate_edit">
							<a target="_blank" class="color_iconn_"
								href="https://www.linkedin.com/company/globalnet-usa-inc/?viewAsMember=true">
							   <AiFillLinkedin />
							</a>

						</div>
					</div>
				</div>
        </div>
    )
}

export default Redes
