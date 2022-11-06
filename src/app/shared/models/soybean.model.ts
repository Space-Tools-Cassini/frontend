import { Crop } from "./crop.model";
import { SoilTypes } from "./soil-types.module";

export class Soybean extends Crop {
    static override readonly ideal_temp:  [number, number] = [18, 35];
    static override readonly ideal_ph:    [number, number] = [5.8, 6.2];
    static override readonly ideal_prep:  [number, number] = [45, 70];
    static override readonly thresh_temp: [number, number] = [10, 40];
    static override readonly thresh_ph:   [number, number] = [NaN, NaN];
    static override readonly thresh_prep: [number, number] = [NaN, NaN];
    static override readonly bad_soil:    SoilTypes[]      = [];
    static override readonly max_co2:     number           = 50;
}
