import { useVehicles } from "../../hooks/useVehicles"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import { IconContext } from "react-icons"
import "./Fleet.css";

export function Fleet () {
    const vehicles = useVehicles()
    // console.log(vehicles)



    return (
        <IconContext.Provider value={{ size: '30px' }}>
            <section className="fleet-section">
                <h2>Our Fleet</h2>
                <p>Choose from our wide selection of vehicles</p>
                <div className="fleet-container">
                    
                    <button className="arrow-button">
                        <FaArrowAltCircleLeft className="arrow-left" />
                    </button>

                    <div className="fleet-carousel">
                        {vehicles.map(vehicle => (
                            <div key={vehicle.id} className="fleet-card">
                                <img src={vehicle.images[0]} alt={vehicle.name} />
                                <h3>{vehicle.make} - {vehicle.model}</h3>
                                <p className="vehicle-data">{vehicle.year}</p>
                                <p className="vehicle-price">${vehicle.price}/day - <span>$120</span></p>
                            </div>
                        ))}
                    </div>

                    <button className="arrow-button">
                        <FaArrowAltCircleRight className="arrow-right" />
                    </button>

                </div>
            </section>
        </IconContext.Provider>
    )
}