import { useContext } from "react";
import { AddressContext } from "../context/addressContext";

//Hook que permite usar las direcciones recuperadas de la API en cualquier componente
export function useAddress() {
    const addresses = useContext(AddressContext)

    if (addresses === undefined){ throw new Error('useAddresses must be used within a Provider') }

    return addresses
}