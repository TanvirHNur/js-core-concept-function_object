
// in a function we can have multiple parameters if we want, 
// we will add and subtract and subtract from these parameters.
function addNumber(num1, num2){
    //  console.log(num1, num2);
     var total = num1 + num2;
     return total;
    // console.log(total);
}

var firstNumber = 10;
var secondNumber = 23;

result = addNumber(secondNumber, firstNumber);
console.log(result);

function multiplyToNumbers(num1, num2){
    var result = num1 * num2;
    return result;
}

var x = multiplyToNumbers(10, 30);
console.log( 'total = ', x);


// substruction
function substruction(num1, num2){
    var result = num1 * num2;
    return result;
}

var total = substruction(100, 50)
console.log('sub = ', total)

function division(num1, num2){
    var total = num1 / num2;
    return total;
}

var z = division(100,10);
console.log('it is division, man, you have to understand =  ', z);