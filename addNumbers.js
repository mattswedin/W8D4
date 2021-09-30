// const { SlowBuffer } = require('buffer');
let readline = require('readline')

let reader = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

    // if (numsLeft === 0) {
    //     return completionCallback(sum);
    // }

    if (numsLeft > 0) {
        reader.question('Please input a number!', function (numStr) {
            const thisNumber = parseInt(numStr);
            sum += thisNumber;
            console.log("Partial sum: " + sum);
            addNumbers(sum, numsLeft - 1, completionCallback);
        })

    } else {completionCallback(sum)}
    // return addNumbers(sum, numsLeft, completionCallback);
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));