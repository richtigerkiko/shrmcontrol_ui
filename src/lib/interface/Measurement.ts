export interface Measurement{
    timeStamp: Date,
    measurementType: MeasurementType,
    value: number,
    unit: string
}

export enum MeasurementType{
    TEMPERATURE,
    HUMIDITY,
    CO2,
    WATERLEVEL,
    PICTURE
}

export interface MeasurementData {
    [timestamp: string]: Measurement[];
}