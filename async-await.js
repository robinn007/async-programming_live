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

async function main(){
    try {
    let resultPromise = longOperation(5000)
    let result = await resultPromise;
    console.log("result:",result)
    let result2 = await longOperation(200)
    console.log("result2:",result2)
} catch(error){
    console.log(error)
}finally {
    
}console.log("finally called")
}
main()
console.log("end")