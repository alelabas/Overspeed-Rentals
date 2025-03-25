import { Swiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Mousewheel, Keyboard, FreeMode } from 'swiper/modules' 
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/keyboard'

export function useCarousel( {children} ) {
    return (
        <Swiper 
            modules={[Navigation, Pagination, Scrollbar, Mousewheel, Keyboard, FreeMode]}
            navigation
            freeMode={true}
            scrollbar={{draggable: true, hide: true, dragSize: 100}}
            mousewheel={{releaseOnEdges: true, forceToAxis: true}}
            spaceBetween={25} 
            slidesPerView={5} 
            grabCursor={false}
            keyboard= { {enabled: true} }
            resistance = {true}
            resistanceRatio={0.3}  
        >
            {children}
        </Swiper>
    )
}