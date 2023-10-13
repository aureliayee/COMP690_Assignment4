//STEP 1
function halfNumber() {
    let num = parseInt(prompt('Please enter a number:'))
    console.log(`Half of ${num} is ${num/2}.`)
}
// halfNumber()

//STEP 2
function squareNumber() {
    let num = parseInt(prompt('Please enter a number:'))
    console.log(`The result of squaring the number ${num} is ${num**2}.`)
}
// squareNumber()

//STEP 3
function percentOf() {
    let num1 = parseInt(prompt('Please enter a number:'))
    let num2 = parseInt(prompt('Please enter another number:'))
    let percent = (num1/num2)*100
    console.log(`${num1} is ${percent}% of ${num2}.`)
}
// percentOf()

//STEP 4
function findModulus() {
    let num1 = parseInt(prompt('Please enter a number:'))
    let num2 = parseInt(prompt('Please enter another number:'))
    let modulus
    if (num2>num1) {
        modulus = num2%num1
    } else {
        modulus = num1%num2
    }
    console.log(`${modulus} is the modulus of ${num1} and ${num2}.`)
}
findModulus()

//STEP 5