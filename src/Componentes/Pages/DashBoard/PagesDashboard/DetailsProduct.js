import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Container } from 'react-bootstrap';
import '../../../../Style/dashboard.css'
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


const items = [
    <div className="item" > <img style={{ width: '350px' }} src={products.img}/> </div>,
    <div className="item" > <img style={{ width: '350px' }} src={products.img2}/> </div>,
    <div className="item" > <img style={{ width: '350px' }} src={products.img3}/> </div>,
    <div className="item" > <img style={{ width: '350px' }} src={products.img4}/>  </div>,
    <div className="item" > <img style={{ width: '350px' }} src={products.img5}/> </div>,
];

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
    return items.map((item, i) => (
        <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
            {item}
        </div>
    ));
};

const DetailsProduct = () => {
    const [mainIndex, setMainIndex] = useState(0);
    const [mainAnimation, setMainAnimation] = useState(false);
    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbAnimation, setThumbAnimation] = useState(false);
    const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

    const slideNext = () => {
        if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex + 1);
        }
    };

    const slidePrev = () => {
        if (!thumbAnimation && thumbIndex > 0) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex - 1);
        }
    };

    const syncMainBeforeChange = (e) => {
        setMainAnimation(true);
    };

    const syncMainAfterChange = (e) => {
        setMainAnimation(false);

        if (e.type === 'action') {
            setThumbIndex(e.item);
            setThumbAnimation(false);
        } else {
            setMainIndex(thumbIndex);
        }
    };

    const syncThumbs = (e) => {
        setThumbIndex(e.item);
        setThumbAnimation(false);

        if (!mainAnimation) {
            setMainIndex(e.item);
        }
    };

    return (
       
        <>
            <Container>
                <div>
                <AliceCarousel
                    activeIndex={mainIndex}
                    animationType="fadeout"
                    animationDuration={800}
                    disableDotsControls
                    disableButtonsControls

                    items={items}
                    mouseTracking={!thumbAnimation}
                    onSlideChange={syncMainBeforeChange}
                    onSlideChanged={syncMainAfterChange}
                    touchTracking={!thumbAnimation}
                />
                </div>
               <div>
               <div className="thumbs">
                    <AliceCarousel
                        activeIndex={thumbIndex}

                        disableDotsControls
                        disableButtonsControls
                        items={thumbs}
                        mouseTracking={false}
                        onSlideChanged={syncThumbs}
                        touchTracking={!mainAnimation}
                    />
                    <div className="btn-prev" onClick={slidePrev}> Back </div>
                    <div className="btn-next" onClick={slideNext}>Next</div>
                </div>
               </div>
               
            </Container>


        </>
    )

};

export default DetailsProduct