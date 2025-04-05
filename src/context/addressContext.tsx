import { createContext, useEffect, useState } from "react";
import { addressSearch } from "../servicies/fetchAdresses";
import React from "react";
import { Address } from "../types/types";

//Crea el contexto de las direcciones para ser usadas como un estado global
export const AddressContext = createContext<Address[]>()

//Configura el Provider de las direcciones 
export function AddressProvider ( {children} ) {
    const [addresses, setAddresses] = useState<Address[]>()

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