function getFactorial(number){
    let sum = 1;
    let i =1;
    while(i<=number){
        sum = sum * i;
        i++;
    }
    return sum;
}
console.log(getFactorial(3));