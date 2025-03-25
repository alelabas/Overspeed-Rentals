import { useVehicles } from "../../hooks/useVehicles"
import { useCarousel } from "../../hooks/useCarousel.jsx";
import "./Fleet.css"
import { SwiperSlide } from "swiper/react"
import { IoMdPeople } from "react-icons/io";
import { MdLuggage } from "react-icons/md";
import { IconContext } from "react-icons/lib"
import { LiaSuitcaseSolid } from "react-icons/lia";
import { LuFuel } from "react-icons/lu";


export function Fleet() {
	const vehicles = useVehicles()
    
    //Devuelve un array de elementos que se van a mostrar en el carusel
    const children = vehicles.map((vehicle) => (
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
    ))

    //Genera el carusel con los elementos pasados en la prop
    const carousel = useCarousel({children})

	return (
        <section>
            <div className="fleet-header">
                <h2>Our Fleet</h2>
                <p>Choose from our wide selection of vehicles</p>
            </div>

            <div className="fleet-section">
                {carousel}
            </div>
        </section>
	)
}