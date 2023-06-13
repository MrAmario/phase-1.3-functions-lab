// Code your solution in this file!

const hq=42;
let distance=Number;
function distanceFromHqInBlocks(distanceInBlocks){
    distance= distanceInBlocks - hq;
    if (distance>0){
        return distance
    }else if(distance<0){
        return distance * -1;
    }
    
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(_distanceInBlocks){
    distance=_distanceInBlocks- hq

    if(distance>0){
        return distance * 264;
    }else if(distance<0){
        return distance * -264;
    }
}
let journey=Number;
let start=Number;
let destination=Number;
function distanceTravelledInFeet(start, destination){
    journey=destination - start;
    if(journey<0){
        return journey * -264;
    }else {
        return journey * 264;
    }
    
}
distanceTravelledInFeet(43);

let chargingRate=Number;
let distanceCovered=Number;
function calculatesFarePrice(start, destination){
    journey=destination - start;
    if(journey>0){
        distanceCovered=(journey * 264);
        chargingRate=distanceCovered - 400;
        if(chargingRate<400){
            return 0;
        }else if(distanceCovered>2000){
            return 25;
        }
    }
    else if(journey<0){
        distanceCovered=(journey * - 264);
        chargingRate=distanceCovered - 400;
        if(chargingRate<2000){
            return chargingRate * 0.02;
        }}
    if(journey<0){
        distanceCovered=(journey * -264);
        if(distanceCovered>2500){
        return "cannot travel that far";
        }
    }
       
    
    }
    /*else if(2000<chargingRate){
            return chargingRate * 0.02;

        }
    }
    
}

  /*  }else if(){
        return (journey * 264)* 2;
    }else if(journey<=400){
        return 0
    }else if(400<(chargingRate-400)){
        return chargingRate * 2; 
    }*/
