console.log("start")

function longOperation(WaitMs=2000){
    console.log("longOperation start")
    let WaitUntil = new Date(new Date().getTime() + WaitMs);
    while(new Date() < WaitUntil){
        //do nothing
    }
    console.log("longOperation end")
}

longOperation(5000)



console.log("end")