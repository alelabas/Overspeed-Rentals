const API_URL = "https://services1.arcgis.com/CvuPhqcTQpZPT9qY/arcgis/rest/services/CityServicesLookup/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID,ADDRESS,ZIPCODE,NEIGHBORHOOD&returnGeometry=false&outSR=4326&f=json"

export const addressSearch = async () => {
    try {
        const results = await fetch(API_URL)
        const parsedResults = await results.json()

        const addresses = parsedResults.features.slice(0, 20)

        return addresses.map(address => ({
            id: address.attributes.OBJECTID,
            address: address.attributes.ADDRESS,
            zipCode: address.attributes.ZIPCODE,
            neighborhood: address.attributes.NEIGHBORHOOD
        }))
    }
    catch (err) {
        throw new Error('No response from the API')
    }
}