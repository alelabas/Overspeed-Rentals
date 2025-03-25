import { useVehicles } from "../../hooks/useVehicles"
import "./Fleet.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules' 
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { IoMdPeople } from "react-icons/io";
import { MdLuggage } from "react-icons/md";
import { IconContext } from "react-icons/lib"
import { LiaSuitcaseSolid } from "react-icons/lia";
import { LuFuel } from "react-icons/lu";


export function Fleet() {
	const vehicles = useVehicles()

	return (
        <>
            <div className="fleet-header">
                <h2>Our Fleet</h2>
                <p>Choose from our wide selection of vehicles</p>
            </div>

            <div className="fleet-section">
                <Swiper 
                    spaceBetween={25} 
                    slidesPerView={5} 
                    slidesPerGroup={4} 
                    pagination={{
                        clickable: true
                    }}
                    modules={[Navigation, Pagination]}
                    fadeEffect={{
                        crossFade: true
                    }}
                    grabCursor={true}
                    keyboard= { {enabled: true, onlyInViewport: true} }
                    mousewheel = {{
                        invert: true
                    }}
                    resistance = {true}
                    resistanceRatio={0.3}  
                >
                    {vehicles.map((vehicle) => (
                        <SwiperSlide>
                            <div key={vehicle.id} className="fleet-card">
                                <img src={vehicle.images[0]} alt={vehicle.name} />
                                <h3>
                                    {vehicle.make} {vehicle.model}
                                </h3>
                                <p className="vehicle-data">{vehicle.year}</p>
                                <div className="vehicle-specifications">
                                    <div className="icons-section">
                                        <IconContext.Provider value={{size: "20px", color: 'black'}}>
                                            <IoMdPeople />
                                            <MdLuggage />
                                            <LiaSuitcaseSolid />
                                            <LuFuel />
                                        </IconContext.Provider>
                                    </div>
                                    <div className="data-section">
                                        <p>{vehicle.passengers}</p>
                                        <p>{vehicle.luggageCapacity}</p>
                                        <p>{vehicle.carryOnCapacity}</p>
                                        <p>{vehicle.mpg}</p>
                                    </div>
                                </div>
                                <p>
                                    From <span className="vehicle-price">${vehicle.price}/day</span> - <span className="discount-price">$120</span> 
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
	)
}