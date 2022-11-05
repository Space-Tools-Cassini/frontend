/** 
 * Crop interface.
 * -----------------
 * Definiton of the crop datamodel.
 * 
 * **Ideal ranges**
 * @field ideal_temp  - Represents the range of the ideal temperature [number, number].
 * @field ideal_ph    - Represents the range of the ideal ph [number, number].
 * @field ideal_prep  - Represents the range of the ideal precipitation [number, number].
 * 
*/
export interface Crop {
    ideal_temp: [number, number];
    ideal_ph:   [number, number];
    ideal_prep: [number, number];
}
