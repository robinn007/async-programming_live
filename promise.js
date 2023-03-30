console.log("start");

function longOperation(WaitMs=2000){
    console.log("longOperation start")
    return new Promise (function(resolve,reject){
        setTimeout(function(){
            console.log("longOperation finished");
            resolve(100);
        },WaitMs)
    })
}

let resultPromise = longOperation()
console.log(resultPromise);

resultPromise.then(function(result){
    console.log("result:",result)
    return result * 7;
}).then(function(result2){
    console.log("result2",result2);
}).catch(function(error){
    console.error("something happend",error)
})

console.log("end")