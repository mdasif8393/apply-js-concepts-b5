function detectEvenOdd(number){
    let result = '';
    if(number%2===0){
        result = 'Even Number'
    }
    else{
        result = 'Odd Number'
    }
    return result;
}

const result = detectEvenOdd(11);
console.log(result);