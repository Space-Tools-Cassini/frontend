/** 
 * Crop interface.
 * -----------------
 * Definiton of the crop datamodel.
 * 
 * **Ideal ranges**
 * @field ideal_temp  : Represents the range of the ideal temperature; [number, number].
 * @field ideal_ph    : Represents the range of the ideal ph; [number, number].
 * @field ideal_prep  : Represents the range of the ideal precipitation; [number, number].
 * 
 * **Thresholds**
 * @field thresh_temp : Represents the threshold temperature where if a value falls
 *                      outside this values, the crop is droped; number.
 * @field thresh_ph   : Represents the threshold ph where if a value falls
 *                      outside this values, the crop is droped; number.
 * @field thresh_prep : Represents the threshold precipitation where if a value falls
 *                      outside this values, the crop is droped; number.
 * 
 * **Conditionals**
 * @field bad_soil    : A crop can only grow in some soil types. This variable represents
 *                      the list of soils that a crop cannot grow in, therefore, dropping
 *                      it if this soil is present; string[].
 * @field max_co2     : Maximum CO2 that a plant can take. From 0 to 100; number.
*/
export class Crop {
    // Ideal ranges
    static ideal_temp: [number, number];
    static ideal_ph:   [number, number];
    static ideal_prep: [number, number];

    // Thresholds
    static thresh_temp: [number, number];
    static thresh_ph:   [number, number];
    static thresh_prep: [number, number];

    // Conditionals
    static bad_soil: string[];
    static max_co2: number;
}
