
export interface CardDimensions {
    height?: number;
    width?: number;
}
export interface Car extends CardDimensions{
    year: number;
    model: string;
    manufacturer: string;
    mileage: number;
    vin: string;
    stage: string;
    description: string;
    photos: string[];
    transmissionType?: string;
    numberOfSeats?: number;
    fuelTypes?: string;
    engineVolume?: number;
    city?: string;
    price?: number;
    color?: string;
    metallic: boolean;
    accidentParticipation: boolean;
}
