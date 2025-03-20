import Header from './layouts/Header/header'
import Servicies from './components/Servicies/servicies'
import Rent from './components/Rent/rent'
import { AddressProvider } from './context/addressContext'

export default function App(){
    return (
        <AddressProvider>
            <Header />
            <Rent />
            <Servicies />
        </AddressProvider>
    )
}