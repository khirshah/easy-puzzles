/*Determine the number where the 2 sequences meet = value of element is the same*/

var r1 = 32;
var r2 = 47;

function nextItem(num){
    return num + parseInt(num
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0))
}

while(r1!=r2){
    r1 < r2 ? r1 = nextItem(r1) : r2 = nextItem(r2)
}

console.log(r1);