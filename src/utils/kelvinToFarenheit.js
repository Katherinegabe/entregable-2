import { kelvinTocelsius } from "./kelvinToCelsius"

export const kelvinToFarenheit = (kelvinDegrades) => {
    const celsius = kelvinTocelsius(kelvinDegrades);
    const FARENHEIT_CONVERSION = 9/5;
    const FARENHEIT_INITAL_CONSTANT = 32;

    return celsius * FARENHEIT_CONVERSION + FARENHEIT_INITAL_CONSTANT;
};