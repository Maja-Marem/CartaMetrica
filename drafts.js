
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
}

