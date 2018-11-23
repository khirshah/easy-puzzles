/*Given a GL diagram, find out which top label 
is connected with which bottom label. List all connected pairs.*/

var inputs = "7 7".split(' ');
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);

var table = "A  B  C|  |  ||--|  ||  |--||  |--||  |  |1  2  3".match(/.{1,7}/g);
var A = [];

for (let i = 0; i < H; i++) {
    
    i ==0 || i == H-1 ? A.push(table[i].split("  ")): A.push(table[i]);

}

const symbols = [A[0],A[A.length-1]]
rows = A.slice(1,-1)

symbols[0].map((symb,i) => {
    var colIndex = i*3
    rows.map((row) => {
        if (colIndex+1 < W-1 && row[colIndex+1] == "-"){
            colIndex += 3;         
        }
        else if (colIndex-1 >= 0  && row[colIndex-1] == "-"){
            colIndex -= 3;
        }
        
    })

    console.log(symbols[0][i]+symbols[1][colIndex/3])
})