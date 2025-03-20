import { useVehicles } from "../../hooks/useVehicles";

export function Fleet () {
    const vehicles = useVehicles()
    console.log(vehicles)

    return (
        <section className="fleet-section">
            <h2>Our Fleet</h2>
            <div className="fleet-container">
                {vehicles.map(vehicle => (
                    <div key={vehicle.id} className="fleet-card">
                        <img src={vehicle.images[0]} alt={vehicle.name} />
                        <h3>{vehicle.make}</h3>
                        <p>{vehicle.model}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}