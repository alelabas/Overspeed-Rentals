import dataVehicles from "../data/data.json"
import { Cars } from "../types/types" 

export function useVehicles() {

    //Recupero los vehiculos del archivo data.json
    const vehicles: Cars[] = dataVehicles.vehicles

    //Devuelvo un array con los vehiculos y sus datos
    return vehicles.map(vehicle => ({
        id: vehicle.id,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        color: vehicle.color,
        milleage: vehicle.milleage,
        images: vehicle.images,
        price: vehicle.price,
        luggageCapacity: vehicle.luggageCapacity,
        carryOnCapacity: vehicle.carryOnCapacity,
        passengers: vehicle.passengers,
        mpg: vehicle.mpg
    }))
}