 // Imports "Relevant functions outside python"
 const { abs, floor, cos, sin, atan, sqrt, pow } = Math
 const radians = Math.PI/180
 const degrees = 180/Math.PI

 // CALCULATING NORTHING FOR PLOT
function getCoords(lines){
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
