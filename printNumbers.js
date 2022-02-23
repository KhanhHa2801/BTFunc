function printNumbers(from, to) {
    setTimeout(function printN() {
        if(from > to){
            return
        }
        else{
            console.log(from)
            from++
            setTimeout(printN, 2000)
        }
    }, 2000);
}
printNumbers(5, 10);

//use setInteval
function printNumbers2(from, to){
    let call = setInterval(function printN(){
        if(from>to){
            clearInterval(call)
            return
        }
        else{
            console.log(from)
            from++
        }
    }, 2000)
}
printNumbers2(5, 10);