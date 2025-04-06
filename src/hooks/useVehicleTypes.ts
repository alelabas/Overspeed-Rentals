import dataVehicles from "../data/data.json"
import { VehicleTypes } from "../types/types"

export function useVehicleTypes () {
    
    const vehicleTypes: VehicleTypes[] = dataVehicles.vehicleTypes

    return vehicleTypes.map( vehicle => ({
        id: vehicle.id,
        type: vehicle.type,
        description: vehicle.description,
        image: vehicle.image
    }))
}