import { Crop } from "./crop.model";
import { SoilTypes } from "./soil-types.module";

export class Soybean extends Crop {
    override readonly ideal_temp:  [number, number] = [18, 35];
    override readonly ideal_ph:    [number, number] = [5.8, 6.2];
    override readonly ideal_prep:  [number, number] = [4.5, 7.0];
    override readonly thresh_temp: [number, number] = [10, 40];
    override readonly thresh_ph:   [number, number] = [NaN, NaN];
    override readonly thresh_prep: [number, number] = [NaN, NaN];
    override readonly bad_soil:    SoilTypes[]      = [];
    override readonly max_co2:     number           = 50;
}
