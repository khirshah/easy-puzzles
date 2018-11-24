/*Rotate an array given number of times so that # caracters fall on the bottom*/

var inputstring = "................. ................. ...##...###..#... .####..#####.###. #################".split(" ");
var inputs = "17 5".split(' ');
const width = parseInt(inputs[0]);
const height = parseInt(inputs[1]);
var count = 1
var arr = [];
console.log("input:")
for (let i = 0; i < height; i++) {
     arr.push(inputstring[i]);
     console.log(inputstring[i])
}

function transpose(a) {
    return Object.keys(a[0]).map((col) => {
        return a.map((row) => {
            return row[col];
        });
    });
}

while (count>0) {
    arr = transpose(arr.map((line)=> {
            return line.split("")
        }).map((line) => {
            return line.sort()
        })).map((line)=>{
            return line.join("")
        }).reverse()
        count--
}    
console.log("output:")

arr.map((line) =>{
    console.log(line);
})