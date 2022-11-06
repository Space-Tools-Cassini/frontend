import { Crop } from "./crop.model";

export class Sugarcane extends Crop {
    readonly ideal_temp:  [number, number] = [22, 38];
    readonly ideal_ph:    [number, number] = [5, 8.5];
    readonly ideal_prep:  [number, number] = [150, 250];
    readonly thresh_temp: [number, number] = [15, NaN];
    readonly thresh_ph:   [number, number] = [NaN, NaN];
    readonly thresh_prep: [number, number] = [NaN, NaN];
    readonly bad_soil:    string[]         = ["Clay", "Silt", "Sand", "Peaty"];
    readonly max_co2:     number           = 50;
}
