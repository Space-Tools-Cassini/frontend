import { Crop } from "./crop.model";

export class Cwheat extends Crop {
    readonly ideal_temp:  [number, number] = [21, 24];
    readonly ideal_ph:    [number, number] = [6, 7];
    readonly ideal_prep:  [number, number] = [45, 65];
    readonly thresh_temp: [number, number] = [5, 35];
    readonly thresh_ph:   [number, number] = [NaN, NaN];
    readonly thresh_prep: [number, number] = [NaN, NaN];
    readonly bad_soil:    string[]         = ["Peaty", "Chalky"];
    readonly max_co2:     number           = 75;
}
