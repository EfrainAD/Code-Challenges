'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine().trim(), 10);
    const binary = n.toString(2)
    
    let max = 0
    let count = 0
    
    for (let digit of binary) {
        if (digit === '1') {
            count++
            max = Math.max(count, max)
        }
        else {
            count = 0
        }
    }
    
    return console.log(max)
}
