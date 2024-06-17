 // Imports "Relevant functions outside python"
 const { abs, floor, cos, sin, atan, sqrt, pow } = Math
 const radians = Math.PI/180
 const degrees = 180/Math.PI

 // CALCULATING NORTHING FOR PLOT
function getNorthings(lines){
    // list of calculated latitudes
    let lat_of_lines = [];
    
    // calculate latitude for each line
    for (let i = 0; i < lines.length; i++) {
        let distance = row[i][0]
        let azimuth_n = row[i][1]
        let latitude = (distance*cos(radians*azimuth_n))
        lat_of_lines.push(latitude);
    }

    // list of cumulative LatSums
    let LatSums = 0
    let cumulativeLatSums = [];

    for (let j = 0; j < lat_of_lines.length; j++) {
        LatSums += lat_of_lines[j]
        cumulativeLatSums.push(LatSums)
    }

    // list of Northings (P1northing - 20000)
    let Northings = [20000];

    // calculate Northings
    for (let k = 0; k < cumulativeLatSums; k++) {
        let N_coord = 20000 + cumulativeLatSums[k]
        Northings.push(N_coord)
    }
}

var data = [
    [13.23, 124.795], 
    [15.57, 14.143], 
    [43.36, 270.000], 
    [23.09, 188.169], 
    [10.99, 180.000], 
    [41.40, 50.562], 
]

Northing = getNorthings(data)
console.log(Northing)
