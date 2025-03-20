import Header from './layouts/Header/header'
import Servicies from './components/Servicies/servicies'
import Rent from './components/Rent/rent'
import { AddressProvider } from './context/addressContext'
import { Fleet } from './components/Fleet/Fleet'

export default function App(){
    return (
        <AddressProvider>
            <Header />
            <Rent />
            <Fleet />
        </AddressProvider>
    )
}