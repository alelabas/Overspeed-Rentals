import dataVehicles from "../data/data.json"

export function useVehicles() {

    //Recupero los vehiculos del archivo data.json
    const vehicles = dataVehicles.vehicles

    //Devuelvo un array con los vehiculos y sus datos
    return vehicles.map(vehicle => ({
        id: vehicle.id,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        color: vehicle.color,
        milleage: vehicle.milleage,
        images: vehicle.images
    }))
}