const API_URL = "https://services1.arcgis.com/CvuPhqcTQpZPT9qY/arcgis/rest/services/CityServicesLookup/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID,ADDRESS,ZIPCODE,NEIGHBORHOOD&returnGeometry=false&outSR=4326&f=json"

import { Address } from "../types/types"

export const addressSearch = async (): Promise<Address[]> => {
    try {
        const results = await fetch(API_URL)
        const parsedResults = await results.json()

        const addresses = parsedResults.features as { attributes: { OBJECTID: number; ADDRESS: string; ZIPCODE: string; NEIGHBORHOOD: string } }[]

        const addressesArray: Address[] = addresses.map((address) => ({
            id: address.attributes.OBJECTID,
            address: address.attributes.ADDRESS,
            zipCode: address.attributes.ZIPCODE,
            neighborhood: address.attributes.NEIGHBORHOOD
        }))

        return addressesArray
    }
    catch (err) {
        throw new Error('No response from the API')
    }
}