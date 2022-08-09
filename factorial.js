
function factorial(number){
    let sum = 1;
    for(let i = 1; i <=number; i++){
        sum = sum * i;
    }
    return sum;
}

const result = factorial(3);
console.log(result);