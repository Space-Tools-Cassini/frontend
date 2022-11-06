import { Crop } from "./crop.model";
import { SoilTypes } from "./soil-types.module";

export class Rice extends Crop {
    static override readonly ideal_temp:  [number, number] = [21, 37];
    static override readonly ideal_ph:    [number, number] = [6, 6];
    static override readonly ideal_prep:  [number, number] = [175, 300];
    static override readonly thresh_temp: [number, number] = [15, 42];
    static override readonly thresh_ph:   [number, number] = [3.5, 8.5];
    static override readonly thresh_prep: [number, number] = [115, NaN];
    static override readonly bad_soil:    SoilTypes[]         = [SoilTypes.SILT, SoilTypes.SAND, SoilTypes.PEATY, SoilTypes.CHALKY];
    static override readonly max_co2:     number           = 50;
}
