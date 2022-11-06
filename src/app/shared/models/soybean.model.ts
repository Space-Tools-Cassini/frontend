import { Crop } from "./crop.model";

export class Soybean extends Crop {
    readonly ideal_temp:  [number, number] = [18, 35];
    readonly ideal_ph:    [number, number] = [5.8, 6.2];
    readonly ideal_prep:  [number, number] = [45, 70];
    readonly thresh_temp: [number, number] = [10, 40];
    readonly thresh_ph:   [number, number] = [NaN, NaN];
    readonly thresh_prep: [number, number] = [NaN, NaN];
    readonly bad_soil:    string[]         = [];
    readonly max_co2:     number           = 50;
}
