import React from "react";

export interface Cars {
    id: number;
    make: string;
    model: string;
    year: number;
    color: string;
    milleage: number;
    images: string[];
    price: number;
    passengers: number;
    luggageCapacity: number;
    carryOnCapacity: number;
    mpg: number;
    engine: string
}

export interface VehicleTypes {
    id: number;
    type: string;
    description: string;
    image: string;
}

export interface CarouselProps {
    children: React.ReactNode;
    slides: number;
}

export interface FAQs {
    id: number;
    question: string;
    response: string;
    show: boolean;
}