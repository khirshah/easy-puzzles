/*Follow up of the num_sequences puzzle - 
is this number part of at least 2 number sequences?
next element = this element + sum of digits of this element*/

const r1 = 20

var startNum = r1-((r1.toString().split("").length-1)*9+parseInt(r1.toString()[0]))

function nextItem(num){
    return num + parseInt(num
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0))
}

var answer = "NO"
while(startNum < r1) {
    var riverP = startNum
    while (riverP<r1){
        riverP=nextItem(riverP)
    }
    riverP == r1 ? answer="YES" : null;
    startNum++
}


console.log(answer)