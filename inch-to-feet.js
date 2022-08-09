function inchToFeet(value){
    const result = (value / 12).toFixed(2);
    return result;
}

const result = inchToFeet(133);
console.log(result);
