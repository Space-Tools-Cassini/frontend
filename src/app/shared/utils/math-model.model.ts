export class MathModel {
    /**
     * Calculates the temperature.
     * @param lat - [-90, 90], 90 being north.
     * @return temp - Modeled temperature in celcius.
     */
    static calc_temp(lat: number, lon: number): number {
        var temp = 0.0;
        var factor = Math.sin((lon/8)*(Math.PI/180))*10;

        // inverse
        lat = Math.abs(lat);

        if (lat < 20) temp = 27 + factor;
        else temp = (-0.63*lat + 39.6 + factor);

        return temp;
    }

    /**
     * Calculates the PH of the point.
     * @param temp - temperature of the point in celcius.
     * @returns ph - the PH of the point
     */
    static calc_ph(temp: number): number {
        var ph = (temp*(6/35)) + 3;
        return ph;
    }
    
    /**
     * Calculates the precipation
     * @param lat - latitude 90 is north.
     * @returns prep - precipitation.
     */
    static calc_prep(lat: number, lon: number): number {
        var prep = 0.0;
        var factor = Math.sin((lon/16)*(Math.PI/180))*10;
        if (lat <= -50) prep=(1/15)*lat + (19/3);
        else if ((-50 < lat)&&(lat <= -25)) prep=(-3/50)*lat;
        else if ((-25 < lat)&&(lat <= 5)) prep=(2/15)*lat + (29/6);
        else if ((5 < lat)&&(lat <= 30)) prep=(-7/50)*lat + (31/5);
        else if ((30 < lat)&&(lat <= 50)) prep=(1/40)*lat + (5/4);
        else prep=(-1/15)*lat + (35/6);

        return prep+factor;
    }

    /**
     * Randomize using a negative exponential.
     * @param min - minimum range.
     * @param max - maximum range.
     * @returns co2 - co2 indicator
     */
    static calc_co2(min: number, max: number): number {
        var co2 = 0.0;

        var chosen = Math.floor(Math.random() * (max - min + 1) + min);
        var co2 = Math.exp(-(chosen/20))*100

        return co2;
    }
}
