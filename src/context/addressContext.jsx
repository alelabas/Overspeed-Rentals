import { createContext, useEffect, useState } from "react";
import { addressSearch } from "../servicies/fetchAdresses";

export const AddressContext = createContext()

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