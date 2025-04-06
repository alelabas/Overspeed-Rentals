export type Address = {
    id: number
    address: string
    zipCode: string
    neighborhood: string
}

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