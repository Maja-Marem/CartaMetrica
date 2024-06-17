 // Imports "Relevant functions outside javascript"
 const { abs, floor, cos, sin, atan, sqrt, pow } = Math
 const radians = Math.PI/180
 const degrees = 180/Math.PI

 // CALCULATING NORTHING FOR PLOT
function getCoords(lines){
    /*
    Description:
    This Function calculates the Northings and Easting of Points
    in a traverse with initial point at coordinates 
    (N: 20000; E: 20000)

    Output: 
    List of Lists of Northing and Easting 
    Rounded to the nearest thousndths

    Parameters:
    List of Line Descriptions - distance and azimuth from the North
    */
    // list of calculated latitudes
    let lat_of_lines = [];
    
    // calculate latitude for each line
    for (let i = 0; i < lines.length; i++) {
        let distance = lines[i][0];
        let azimuth_n = lines[i][1];
        let latitude = (distance*cos(radians*azimuth_n))
        lat_of_lines.push(latitude);
    }

    // list of cumulative LatSums
    let LatSums = 0
    let cumulativeLatSums = [];

    for (let j = 0; j < lat_of_lines.length; j++) {
        LatSums += lat_of_lines[j]
        cumulativeLatSums.push(LatSums);
    }

    // list of Northings (P1northing - 20000)
    let Northings = [20000];

    // calculate Northings
    for (let k = 0; k < cumulativeLatSums.length; k++) {
        let N_coord = 20000 + cumulativeLatSums[k]
        Northings.push(N_coord);
    }

    // list of calculated departures
    let dep_of_lines = [];
    
    // calculate latitude for each line
    for (let i = 0; i < lines.length; i++) {
        let distance = lines[i][0];
        let azimuth_n = lines[i][1];
        let departure = (distance*sin(radians*azimuth_n))
        dep_of_lines.push(departure);
    }

    // list of cumulative LatSums
    let DepSums = 0
    let cumulativeDepSums = [];

    for (let j = 0; j < lat_of_lines.length; j++) {
        DepSums += dep_of_lines[j]
        cumulativeDepSums.push(DepSums);
    }

    // list of Northings (P1northing - 20000)
    let Eastings = [20000];

    // calculate Northings
    for (let k = 0; k < cumulativeLatSums.length; k++) {
        let E_coord = 20000 + cumulativeDepSums[k]
        Eastings.push(E_coord);
    }

    // appended list of coordinates
    let Coordinates = []
    
    // summary list of coordinates
    for (let c = 0; c < Northings.length; c++) {
        let Coords = [Northings[c], Eastings[c]]
        Coordinates.push(Coords)
    }
        
    return Coordinates
}

// CALCULATIG CORRECTIONS
function getLEC (Sum_Lat, Sum_Dep) {
    /*
    calculate the LEC using Sum_Lat and Sum_Dep
    */
    let LEC = sqrt((pow(Sum_Lat, 2)) + (pow(Sum_Dep,2)))
    return LEC
} 

function getREC (LEC, Sum_Dist) {
    let cREC = SumDist/LEC
    let REC = "1:"+ cREC
    return REC
}

function getBoSE (Sum_Lat, Sum_Dep){
    /*
    Calculating BoSE using Sum_Lat and Sum_Dep
    */

    if (Sum_Lat < 0 && Sum_Dep < 0){
        let BoSE_mag = atan(Sum_Dep/Sum_Lat)*degrees
        let BoSE_degs = parseInt(BoSE_mag)
        let BoSE_mins = parseInt((BoSE_mag - BoSE_degs)*60)
        let BoSE_secs = ((((BoSE_mag - BoSE_degs)*60)- BoSE_mins)*60).toFixed(2)
        let BoSE_dms = BoSE_degs + "-" + BoSE_mins + "-" + BoSE_secs
        let BoSE = "N" + BoSE_dms + "E"
        return BoSE
    }
    else if (Sum_Lat < 0 && Sum_Dep > 0){
        let BoSE_mag = atan(Sum_Dep/Sum_Lat)*degrees
        let BoSE_degs = parseInt(BoSE_mag)
        let BoSE_mins = parseInt((BoSE_mag - BoSE_degs)*60)
        let BoSE_secs = ((((BoSE_mag - BoSE_degs)*60)- BoSE_mins)*60).toFixed(2)
        let BoSE_dms = BoSE_degs + "-" + BoSE_mins + "-" + BoSE_secs
        let BoSE = "N" + BoSE_dms + "W"
        return BoSE
    }
    else if (Sum_Lat > 0 && Sum_Dep > 0){
        let BoSE_mag = atan(Sum_Dep/Sum_Lat)*degrees
        let BoSE_degs = parseInt(BoSE_mag)
        let BoSE_mins = parseInt((BoSE_mag - BoSE_degs)*60)
        let BoSE_secs = ((((BoSE_mag - BoSE_degs)*60)- BoSE_mins)*60).toFixed(2)
        let BoSE_dms = BoSE_degs + "-" + BoSE_mins + "-" + BoSE_secs
        let BoSE = "S" + BoSE_dms + "W"
        return BoSE
    }
    else if (Sum_Lat > 0 && Sum_Dep < 0){
        let BoSE_mag = atan(Sum_Dep/Sum_Lat)*degrees
        let BoSE_degs = parseInt(BoSE_mag)
        let BoSE_mins = parseInt((BoSE_mag - BoSE_degs)*60)
        let BoSE_secs = ((((BoSE_mag - BoSE_degs)*60)- BoSE_mins)*60).toFixed(2)
        let BoSE_dms = BoSE_degs + "-" + BoSE_mins + "-" + BoSE_secs
        let BoSE = "S" + BoSE_dms + "E"
        return BoSE
    }
    else if (Sum_Lat == 0 && Sum_Dep < 0){
        let BoSE = "Due East"
        return BoSE
    }
    else if (Sum_Lat == 0 && Sum_Dep > 0){
        let BoSE = "Due West"
        return BoSE
    }
    else if (Sum_Dep == 0 && Sum_Lat < 0){
        let BoSE = "Due North"
        return BoSE
    }
    else if (Sum_Dep == 0 && Sum_Lat > 0){
        let BoSE = "Due South"
        return BoSE
    }
    else {
        let BoSE = "EWAN"
        return BoSE
    }

    var data = [
        [13.23, 124.795], 
        [15.57, 14.143], 
        [43.36, 270.000], 
        [23.09, 188.169], 
        [10.99, 180.000], 
        [41.40, 50.562], 
    ]
    
    Northing = getCoords(data)
    console.log(Northing)