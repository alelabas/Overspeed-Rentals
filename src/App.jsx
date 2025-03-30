import Header from './layouts/Header/header'
import Servicies from './layouts/Servicies/servicies'
import Rent from './components/Rent/rent'
import { AddressProvider } from './context/addressContext'
import { Fleet } from './components/Fleet/Fleet'
import { AboutUs } from './layouts/About_us/AboutUs'
import { Clients } from './components/Clients/Clients'
import { Footer } from './layouts/Footer/Footer'
import { FAQs } from './components/FAQs/FAQs'

export default function App(){
    return (
        <AddressProvider>
            <Header />
            <Rent />
            <Fleet />
            <Servicies />
            <AboutUs />
            <Clients />
            <FAQs />
            <Footer />
        </AddressProvider>
    )
}