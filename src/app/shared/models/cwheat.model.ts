import { Crop } from "./crop.model";
import { SoilTypes } from "./soil-types.module";

export class Cwheat extends Crop {
    static override readonly ideal_temp:  [number, number] = [21, 24];
    static override readonly ideal_ph:    [number, number] = [6, 7];
    static override readonly ideal_prep:  [number, number] = [45, 65];
    static override readonly thresh_temp: [number, number] = [5, 35];
    static override readonly thresh_ph:   [number, number] = [NaN, NaN];
    static override readonly thresh_prep: [number, number] = [NaN, NaN];
    static override readonly bad_soil:    SoilTypes[]      = [SoilTypes.PEATY, SoilTypes.CHALKY];
    static override readonly max_co2:     number           = 75;
}
