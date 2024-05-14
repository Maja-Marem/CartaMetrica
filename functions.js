// Initialization [set Values]
var N_Origin = 20000
var E_Origin = 20000
var line_counter = 1

 // Imports "Relevant functions outside python"
 const { abs, floor, cos, sin, atan, sqrt, pow } = Math
 const radians = Math.PI/180
 const degrees = 180/Math.PI

//  Functions for calculating latitude and departure
function getLatitude (distance, azimuth_N) {
   /*
    Calculates the Latitude of the line using the set parameters

    The product of negative distance and cos azimuth from the
    south in radians

    Parameters: distance, azimuth
    */
    let latitude = (distance*cos(radians*azimuth_N))
    return latitude
}

function getDeparture (distance, azimuth_N) {
    /*
    Calculates the Departure of the line using the set parameters

    The product of negative distance and sin azimuth from the
    south in radians

    Parameters: distance, azimuth
     */
     let departure = (distance*sin(radians*azimuth_N))
     return departure
}

function getNorthing (N_Prev, latitude){
    /*
    calculates the Northing of the line using the calculated
    parameters N_Preve and Latitude
    */
    let northing = N_Prev + latitude
    return northing
}

function getEasting (E_Prev, Departure){
    /*
    calculates the Northing of the line using the calculated
    parameters N_Preve and Latitude
    */
    let easting = E_Prev + latitude
    return easting
}

function getLEC (Sum_Lat, Sum_Dep) {
    let LEC = sqrt((pow(LatSum, 2)) + (pow(DepSum,2)))
    return LEC
}

function getBoSE (Sum_Lat, Sum_Dep){
    let BoSE = atan(Sum_Dep/Sum_Lat)
    return BoSE
}