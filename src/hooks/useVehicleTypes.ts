import dataVehicles from "../data/data.json"
import { VehicleTypes } from "../types/types"
import { useContext } from "react"
import { langContext } from "../context/langContext"

export function useVehicleTypes (): VehicleTypes[] {
    
    const lang = useContext(langContext)

    const language = lang?.lang === "es-ES" ? "esp" : "eng"

    const vehicleTypes: VehicleTypes[] = dataVehicles.vehicleTypes[language]

    return vehicleTypes.map( vehicle => ({
        id: vehicle.id,
        type: vehicle.type,
        description: vehicle.description,
        image: vehicle.image
    }))
}