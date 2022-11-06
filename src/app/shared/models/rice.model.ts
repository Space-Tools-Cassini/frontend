import { Crop } from "./crop.model";

export class Rice extends Crop {
    readonly ideal_temp:  [number, number] = [21, 37];
    readonly ideal_ph:    [number, number] = [6, 6];
    readonly ideal_prep:  [number, number] = [175, 300];
    readonly thresh_temp: [number, number] = [15, 42];
    readonly thresh_ph:   [number, number] = [3.5, 8.5];
    readonly thresh_prep: [number, number] = [115, NaN];
    readonly bad_soil:    string[]         = ["Silt", "Sand", "Peaty", "Chalky"];
    readonly max_co2:     number           = 50;
}
