import dataVehicles from "../data/data.json"

export function useVehicleTypes () {
    
    const vehicleTypes = dataVehicles.vehicleTypes

    return vehicleTypes.map( (vehicle, index) => ({
        id: index,
        type: vehicle.type,
        description: vehicle.description,
        image: vehicle.image
    }))
}