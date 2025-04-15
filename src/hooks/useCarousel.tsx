import { Swiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Mousewheel, Keyboard, FreeMode } from 'swiper/modules' 
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/keyboard'
import React from 'react'
import { CarouselProps } from '../types/types'

/*
    Hook que permite reutilizar el carusel de Swiper en distintas partes del sitio unicamente recibiendo como prop
    los elementos que se desean mostrar en el carusel.
*/ 

export function useCarousel( {children, slides} : CarouselProps ) {
    return (
        <Swiper 
            modules={[Navigation, Pagination, Scrollbar, Mousewheel, Keyboard, FreeMode]}
            navigation
            freeMode={true}
            scrollbar={{draggable: true, hide: true, dragSize: 100}}
            mousewheel={{releaseOnEdges: true, forceToAxis: true}}
            spaceBetween={20} 
            slidesPerView={slides} 
            grabCursor={false}
            keyboard= { {enabled: true, onlyInViewport: true} }
            resistance = {true}
            resistanceRatio={0.3}  
            breakpoints={{
                1200: {
                    slidesPerView: slides,
                    spaceBetween: 20
                },
                800: {
                    slidesPerView: slides === 3 ? slides - 2 : slides - 3,
                },
                0: {
                    slidesPerView: slides === 3 ? slides - 2 : slides - 3 ,
                    spaceBetween: 10,
                } 
            }}
        >
            {children}
        </Swiper>
    )
}