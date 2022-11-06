import { Crop } from "./crop.model";

export class Maize extends Crop {
    readonly ideal_temp:  [number, number] = [18, 25];
    readonly ideal_ph:    [number, number] = [6, 6.5];
    readonly ideal_prep:  [number, number] = [40, 110];
    readonly thresh_temp: [number, number] = [NaN, 40];
    readonly thresh_ph:   [number, number] = [NaN, NaN];
    readonly thresh_prep: [number, number] = [NaN, NaN];
    readonly bad_soil:    string[]         = ["Silt", "Peaty", "Chalky", "Loamy"];
    readonly max_co2:     number           = 20;
}
