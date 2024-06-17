 // Imports "Relevant functions outside javascript"
 const { abs, floor, cos, sin, atan, sqrt, pow } = Math
 const radians = Math.PI/180
 const degrees = 180/Math.PI

 // CALCULATING NORTHING FOR PLOT
export function getCoords(lines){
    /*
    Description:
    This Function calculates the Northings and Easting of Points
    in a traverse with initial point at coordinates 
    (N: 20000; E: 20000)

    Process: 
    Calculate Latitudes and Departures
    Calculate Cumulative Sum of Latitudes and Departures
    Calculate Northings and Eastings

    Output: 
    List of Lists of Northing and Easting 
    Rounded to the nearest thousandths

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
        let N_coord = (20000 + cumulativeLatSums[k]).toFixed(3)
        Northings.push(N_coord);
    }

    // list of calculated departures
    let dep_of_lines = [];
    
    // calculate latitude for each line
    for (let i1 = 0; i1 < lines.length; i1++) {
        let distance = lines[i1][0];
        let azimuth_n = lines[i1][1];
        let departure = (distance*sin(radians*azimuth_n))
        dep_of_lines.push(departure);
    }

    // list of cumulative LatSums
    let DepSums = 0
    let cumulativeDepSums = [];

    for (let j1 = 0; j1 < lat_of_lines.length; j1++) {
        DepSums += dep_of_lines[j1]
        cumulativeDepSums.push(DepSums);
    }

    // list of Northings (P1northing - 20000)
    let Eastings = [20000];

    // calculate Northings
    for (let k1 = 0; k1 < cumulativeLatSums.length; k1++) {
        let E_coord = (20000 + cumulativeDepSums[k1]).toFixed(3)
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
export function getLEC (lines) {
    /*
    This function calculates the Linear Error of Closure using
    the distance and azimuth north of the lines of the traverse

    Process:
    calculate latitudes and departures
    get sum of latitudes and sum of departures
    calculate the LEC

    Output:
    Linear Error of Closure rounded to the nearest hundred-thousandths

    Parameter:
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

    // Summ of Latitudes
    let LatSum = 0

    // calculating LatSum
    for (let i = 0; i < lat_of_lines.length; i++) {
        LatSum += lat_of_lines[i] ;
    }

    // list of calculated departures
    let dep_of_lines = [];
    
    // calculate latitude for each line
    for (let i1 = 0; i1 < lines.length; i1++) {
        let distance = lines[i1][0];
        let azimuth_n = lines[i1][1];
        let departure = (distance*sin(radians*azimuth_n))
        dep_of_lines.push(departure);
    }
    // Sum of Departures
    let DepSum = 0

    // calculate departure for each line
    for (let i1 = 0; i1 < dep_of_lines.length; i1++) {
        DepSum += dep_of_lines[i1];
    }
       
    //calculate LEC
    let LEC = (sqrt((pow(LatSum, 2)) + (pow(DepSum,2)))).toFixed(5)

    return LEC
} 

export function getREC (lines) {
    /*
    This function calculates the REC using
    the provided parameters

    Process:
    calculate latitudes and departures
    get sum of latitudes and sum of departures
    calculate the LEC
    Calculate REC

    Output:
    REC rounded to the nearest hundreds

    Parameter:
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

    // Summ of Latitudes
    let LatSum = 0

    // calculating LatSum
    for (let i = 0; i < lat_of_lines.length; i++) {
        LatSum += lat_of_lines[i] ;
    }

    // list of calculated departures
    let dep_of_lines = [];
    
    // calculate latitude for each line
    for (let i1 = 0; i1 < lines.length; i1++) {
        let distance = lines[i1][0];
        let azimuth_n = lines[i1][1];
        let departure = (distance*sin(radians*azimuth_n))
        dep_of_lines.push(departure);
    }
    // Sum of Departures
    let DepSum = 0

    // calculate departure for each line
    for (let i1 = 0; i1 < dep_of_lines.length; i1++) {
        DepSum += dep_of_lines[i1];
    }
    
    // calculate LEC
    let LEC = (sqrt((pow(LatSum, 2)) + (pow(DepSum,2))))

    // total distance
    let Tot_Distance = 0

    // calculate total distance of the traverse
    for (let i = 0; i < lines.length; i++) {
        let distance = lines[i][0];
        Tot_Distance += distance
    }

    // Calculate REC
    let cREC = Tot_Distance/LEC
        if (cREC > 1000){
            let REC = "1:" + floor((cREC)/1000)*1000
            return REC
        }
        else if (cREC) {
            let REC = "ERROR: Calculated REC is Below accepted error of closure tolerance"
            return REC
        }
        else{
            let REC = "ERROR: 404"
            return REC
        }
}

export function getBoSE (lines){
    /*
    This function calculates the BoSE using
    the provided parameters

    Process:
    calculate latitudes and departures
    get sum of latitudes and sum of departures
    calculate BoSE

    Output:
    BoSE in Bearing From - up to decimal places at the seconds value

    Parameter:
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

    // Summ of Latitudes
    let LatSum = 0

    // calculating LatSum
    for (let i = 0; i < lat_of_lines.length; i++) {
        LatSum += lat_of_lines[i] ;
    }

    // list of calculated departures
    let dep_of_lines = [];
    
    // calculate latitude for each line
    for (let i1 = 0; i1 < lines.length; i1++) {
        let distance = lines[i1][0];
        let azimuth_n = lines[i1][1];
        let departure = (distance*sin(radians*azimuth_n))
        dep_of_lines.push(departure);
    }
    // Sum of Departures
    let DepSum = 0

    // calculate departure for each line
    for (let i1 = 0; i1 < dep_of_lines.length; i1++) {
        DepSum += dep_of_lines[i1];
    }

    // Calculating for the BoSE - based on difference cases
    if (LatSum < 0 && DepSum < 0){
        let BoSE_mag = atan(DepSum/LatSum)*degrees
        let BoSE_degs = parseInt(BoSE_mag)
        let BoSE_mins = parseInt((BoSE_mag - BoSE_degs)*60)
        let BoSE_secs = ((((BoSE_mag - BoSE_degs)*60)- BoSE_mins)*60).toFixed(2)
        let BoSE_dms = BoSE_degs + "-" + BoSE_mins + "-" + BoSE_secs
        let BoSE = "N " + BoSE_dms + " E"
        return BoSE
    }
    else if (LatSum < 0 && DepSum > 0){
        let BoSE_mag = atan(DepSum/LatSum)*degrees
        let BoSE_degs = parseInt(BoSE_mag)
        let BoSE_mins = parseInt((BoSE_mag - BoSE_degs)*60)
        let BoSE_secs = ((((BoSE_mag - BoSE_degs)*60)- BoSE_mins)*60).toFixed(2)
        let BoSE_dms = BoSE_degs + "-" + BoSE_mins + "-" + BoSE_secs
        let BoSE = "N " + BoSE_dms + " W"
        return BoSE
    }
    else if (LatSum > 0 && DepSum > 0){
        let BoSE_mag = atan(DepSum/LatSum)*degrees
        let BoSE_degs = parseInt(BoSE_mag)
        let BoSE_mins = parseInt((BoSE_mag - BoSE_degs)*60)
        let BoSE_secs = ((((BoSE_mag - BoSE_degs)*60)- BoSE_mins)*60).toFixed(2)
        let BoSE_dms = BoSE_degs + "-" + BoSE_mins + "-" + BoSE_secs
        let BoSE = "S " + BoSE_dms + " W"
        return BoSE
    }
    else if (LatSum > 0 && DepSum < 0){
        let BoSE_mag = atan(DepSum/LatSum)*degrees
        let BoSE_degs = parseInt(BoSE_mag)
        let BoSE_mins = parseInt((BoSE_mag - BoSE_degs)*60)
        let BoSE_secs = ((((BoSE_mag - BoSE_degs)*60)- BoSE_mins)*60).toFixed(2)
        let BoSE_dms = BoSE_degs + "-" + BoSE_mins + "-" + BoSE_secs
        let BoSE = "S " + BoSE_dms + " E"
        return BoSE
    }
    else if (LatSum == 0 && DepSum < 0){
        let BoSE = "Due East"
        return BoSE
    }
    else if (LatSum == 0 && DepSum > 0){
        let BoSE = "Due West"
        return BoSE
    }
    else if (DepSum == 0 && LatSum < 0){
        let BoSE = "Due North"
        return BoSE
    }
    else if (DepSum == 0 && LatSum > 0){
        let BoSE = "Due South"
        return BoSE
    }
    else {
        let BoSE = "ERROR: 404"
        return BoSE
    }
}