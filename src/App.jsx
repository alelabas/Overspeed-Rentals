import Header from './layouts/Header/header'
import Servicies from './layouts/Servicies/servicies'
import Rent from './components/Rent/rent'
import { AddressProvider } from './context/addressContext'
import { Fleet } from './components/Fleet/Fleet'
import { AboutUs } from './layouts/About_us/AboutUs'
import { Clients } from './components/Clients/Clients'
import { Footer } from './layouts/Footer/Footer'
import { FAQs } from './components/FAQs/FAQs'
import { Vehicles } from './components/Vehicles/Vehicles'
import { WhyUs } from './layouts/WhyUs/WhyUs'

export default function App(){
    return (
        <AddressProvider>
            <Header />
            <Rent />
            <Fleet />
            <Servicies />
            <Vehicles />
            <WhyUs />
            <AboutUs />
            <Clients />
            <FAQs />
            <Footer />
        </AddressProvider>
    )
}