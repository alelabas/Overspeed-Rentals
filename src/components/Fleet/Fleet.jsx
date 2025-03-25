import { useVehicles } from "../../hooks/useVehicles"

import "./Fleet.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, Mousewheel, Keyboard, FreeMode } from 'swiper/modules' 
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/keyboard'
import { IoMdPeople } from "react-icons/io";
import { MdLuggage } from "react-icons/md";
import { IconContext } from "react-icons/lib"
import { LiaSuitcaseSolid } from "react-icons/lia";
import { LuFuel } from "react-icons/lu";


export function Fleet() {
	const vehicles = useVehicles()
    console.log(vehicles)

	return (
        <section>
            <div className="fleet-header">
                <h2>Our Fleet</h2>
                <p>Choose from our wide selection of vehicles</p>
            </div>

            <div className="fleet-section">
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
                    {vehicles.map((vehicle) => (
                        <SwiperSlide key={vehicle.id}>
                            <div key={vehicle.id} className="fleet-card">
                                <img src={vehicle.images[0]} alt={vehicle.name} />
                                <h3>
                                    {vehicle.make} {vehicle.model}
                                </h3>
                                <div className="vehicle-specifications">
                                        <IconContext.Provider value={{size: "20px", color: 'black'}}>
                                            <span className="vehicle-specs">
                                                <IoMdPeople />
                                                <p>{vehicle.passengers}</p>
                                            </span>
                                            <span className="vehicle-specs">
                                                <MdLuggage />
                                                <p>{vehicle.luggageCapacity}</p>
                                            </span>
                                            <span className="vehicle-specs">
                                                <LiaSuitcaseSolid />
                                                <p>{vehicle.carryOnCapacity}</p>
                                            </span>
                                            <span className="vehicle-specs">
                                                <LuFuel />
                                                <p>{vehicle.mpg}</p>
                                            </span>
                                        </IconContext.Provider>
                                </div>
                                <p>
                                    From <span className="vehicle-price">${vehicle.price}/day</span> - <span className="discount-price">$120</span> 
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
	)
}