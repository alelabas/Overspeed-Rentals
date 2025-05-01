import dataImage from '../../data/data.json'
import { useCarousel } from "../../hooks/useCarousel"
import "./Clients.css"
import { SwiperSlide } from "swiper/react"
import React from 'react'
import { FormattedMessage } from "react-intl" 

export function Clients () {

    const images = dataImage.clients[0].images

    const children = images.map( ( url, index ) => (
            <SwiperSlide key={index}>
                <div className='image-container-carousel'>
                    <img src={url} className='image-carousel' alt="Clients Images"/>
                </div>
            </SwiperSlide>
        )
    )

    const carousel = useCarousel({children, slides: 5})

    return (
        <section className="clients-section">
            <div className="clients-section-title">
                <h2>
                    <FormattedMessage id="app.clients.title" defaultMessage="Our Clients" />
                </h2>
                <p>
                    <FormattedMessage id="app.clients.subtitle" defaultMessage="Some examples of previous customers that put on their <strong>trust</strong> on us, to provide the best experience for their vacations and were rewarded with a <strong>top of the notch</strong> experience" />
                </p>
            </div>
            <div className="clients-section-carousel">
                {carousel}
            </div>
        </section>
    )
}