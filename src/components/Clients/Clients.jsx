import dataImage from '../../data/data.json'
import { useCarousel } from "../../hooks/useCarousel"
import "./Clients.css"
import { SwiperSlide } from "swiper/react"

export function Clients () {

    const images = dataImage.clients[0].images

    const children = images.map( ( url, index ) => (
            <SwiperSlide key={index}>
                <div className='image-container-carousel'>
                    <img src={url} className='image-carousel'/>
                </div>
            </SwiperSlide>
        )
    )

    const carousel = useCarousel({children})

    return (
        <section className="clients-section">
            <div className="clients-section-title">
                <h2>Our Clients</h2>
                <p>Some examples of previous customers that put on their <strong>trust</strong> on us, to provide the best experience for their vacations and were rewarded with a <strong>top of the notch</strong> experience</p>
            </div>
            <div className="clients-section-carousel">
                {carousel}
            </div>
        </section>
    )
}