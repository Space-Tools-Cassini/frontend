import { Crop } from "./crop.model";
import { SoilTypes } from "./soil-types.module";

export class Cwheat extends Crop {
    override readonly ideal_temp:  [number, number] = [21, 24];
    override readonly ideal_ph:    [number, number] = [6, 7];
    override readonly ideal_prep:  [number, number] = [4.5, 6.5];
    override readonly thresh_temp: [number, number] = [5, 35];
    override readonly thresh_ph:   [number, number] = [NaN, NaN];
    override readonly thresh_prep: [number, number] = [NaN, NaN];
    override readonly bad_soil:    SoilTypes[]      = [SoilTypes.PEATY, SoilTypes.CHALKY];
    override readonly max_co2:     number           = 75;
}
