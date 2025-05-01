import { useVehicleTypes } from "../../hooks/useVehicleTypes";
import { useCarousel } from "../../hooks/useCarousel"
import { SwiperSlide } from "swiper/react";
import "./Vehicles.css"
import React, { ReactNode } from "react";
import { VehicleTypes } from "../../types/types";
import { FormattedMessage } from "react-intl";

export function Vehicles () {
    
    const vehicleTypes: VehicleTypes[] = useVehicleTypes()

    const children: ReactNode = vehicleTypes.map(vehicle => (
        <SwiperSlide key={vehicle.id}>
            <div className="types-container">
                <img src={vehicle.image} alt={`${vehicle.type} Image`} className="type-image" />
                <div className="type-inner-text">
                    <h3 className="type-title">{vehicle.type}</h3>
                    <p className="type-description">{vehicle.description}</p>
                </div>
            </div>
        </SwiperSlide>
    ))

    const vehicleTypesList = useCarousel({children, slides: 3})

    return (
        <section className="types-section">
            <div className="types-text">
                <h2>
                    <FormattedMessage id="app.vehicles.title" defaultMessage="Types of Vehicles to rent" />
                </h2>
                <p>
                    <FormattedMessage id="app.vehicles.subtitle" defaultMessage="We have a wide variety of vehicles to rent, from economy cars to luxury SUVs. Choose the one that fits your needs!" />
                </p>
            </div>
            <div className="types-wrapper">
                {vehicleTypesList}
            </div>
        </section>
    )
}