/** 
 * 经纬度 
 */
class MapSite{
    /**
     * 
     * @param {Number} longitude 
     * @param {Number} latitude 
     */
    constructor(longitude, latitude){
        this.longitude = longitude
        this.latitude = latitude
    }
}

// module.exports = {
//     MapSite: MapSite,
// }

module.exports = MapSite;