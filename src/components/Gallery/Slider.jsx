import './GalleryCss/Gallery.css';
import { useState, useEffect } from 'react';
import {register} from 'swiper/element/bundle' //can be used at any place

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/css/effect-fade';


import {Swiper, SwiperSlide} from 'swiper/react';
// import { EffectFade } from 'swiper';

import { GalleryImages } from "./GalleryImage/GalleryImages";


const Slider = () => {
    const [slidesPerView, setSlidePreView] = useState(3)

   useEffect(() => {

    function handleResize () {
        if (window.innerWidth < 800) {
            setSlidePreView(1)
        } else {
            setSlidePreView(2)
        }
    }

    handleResize();

    window.addEventListener('resize', handleResize)
    return () => {
        window.removeEventListener('resize', handleResize)
    }
   }, [])
  return (
    <div className='sllideContainer'>
        <h1 className='slideTitle'></h1>
        <Swiper
            
            slidesPerView={slidesPerView}
            pagination={{clickable:true}}
            navigation
        >
           {
                GalleryImages.map( (item) => (
                    <SwiperSlide key={item.id}>
                        <div className="slideItemContainer">
                            <p className='slideTitle'>{item.name}</p>
                            <img src={item.image} alt={item.name} className='slideImg'/>
                        </div>
                    </SwiperSlide>
                 ) 
                )
           }
        </Swiper>
    </div>
  )
}

export default Slider
