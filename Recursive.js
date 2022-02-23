//sum
function sumTo(n){
    if(n===1)
        return 1
    else
        return n+sumTo(n-1)
}

console.log(sumTo(10))

//factorial
function factorial(n){
    if(n==1)
        return 1
    else{
        return n*factorial(n-1)
    }
}

console.log(factorial(4))

//fibonaci
function fib(n){
    if(n<=2)
        return 1
    if(n > 2){
        return fib(n-1)+fib(n-2)
    }
}
console.log(10)