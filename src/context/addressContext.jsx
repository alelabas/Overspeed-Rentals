import { createContext, useEffect, useState } from "react";
import { addressSearch } from "../servicies/fetchAdresses";

//Crea el contexto de las direcciones para ser usadas como un estado global
export const AddressContext = createContext()

//Configura el Provider de las direcciones 
export function AddressProvider ( {children} ) {
    const [addresses, setAddresses] = useState()

    const getAddresses = async () => {
        const newAddresses = await addressSearch()
        setAddresses(newAddresses)
    }

    useEffect(() => {
        getAddresses()
    }, [])

    return (
        <AddressContext.Provider value={{
            addresses
        }}
        >
            {children}
        </AddressContext.Provider>
    )
}