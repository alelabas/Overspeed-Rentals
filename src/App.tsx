import Header from './layouts/Header/header'
import Servicies from './layouts/Servicies/servicies'
import { AddressProvider } from './context/addressContext'
import { Fleet } from './components/Fleet/Fleet'
import { Clients } from './components/Clients/Clients'
import { Footer } from './layouts/Footer/Footer'
import { FAQs } from './components/FAQs/FAQs'
import { Vehicles } from './components/Vehicles/Vehicles'
import { WhyUs } from './layouts/WhyUs/WhyUs'
import React from 'react'
import Rent from './components/Rent/rent'
import { Hero } from './components/Hero/Hero'

export default function App(){
    return (
        <AddressProvider>
            <Header />
            <Hero />
            <Fleet />
            <Servicies />
            <Vehicles />
            <WhyUs />
            <Clients />
            <FAQs />
            <Footer />
        </AddressProvider>
    )
}