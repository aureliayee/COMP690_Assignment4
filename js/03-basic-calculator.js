let x
let y
let operation

// ADD A FUNCTION CALLED CALCULATE
const calculate = function(x,y,operation) {
    let result=eval(`${x} ${operation} ${y}`);
    return result
}

function operationContinue() {
    // COLLECT FIRST NUMBER FROM USER
    do {
       x = parseInt(prompt('Please choose a number:'))
    } while (isNaN(x))

    // COLLECT SECOND NUMBER FROM USER
    do {
         y = parseInt(prompt('Please choose another number:'))
    } while (isNaN(y))
    operation = prompt('Please choose an operation (+,-,*,/):')

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    if (operation === '+'  || operation === '-' || operation === '*' || operation === '/') {
        operation = operation
    } else {
        alert('Please enter a correct operation (+,-,*,/)')
    }
}

do {   
    operationContinue()
} while (operation !== '+'  && operation !== '-' && operation !== '*' && operation !== '/')


// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
alert(calculate(x,y,operation))
