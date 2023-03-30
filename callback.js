console.log("start")
function longOperation(WaitMs=5000){
    console.log("longOperation Start")
    setTimeout(function(){
        console.log("longopoeration finished");
    },WaitMs);
}

longOperation(5000)

console.log("end")