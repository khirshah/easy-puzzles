/*make the # chars in the input fall to the bottom of the grid*/

var inputstring = "...#...#.#.#...#. .#..#...#....#... ..........#...... ..###...###..##.. #################".split(" ");
var inputs = "17 5".split(' ');
const width = parseInt(inputs[0]);
const height = parseInt(inputs[1]);
var arr = [];
console.log("input:")
for (let i = 0; i < height; i++) {
	console.log(inputstring[i])
    arr.push(inputstring[i].split(""));
}
console.log("output")

function transpose(a) {
    return Object.keys(a[0]).map((col) => {
        return a.map((row) => {
            return row[col];
        });
    });
}


transpose(transpose(arr).map((line) =>{
    return line.sort()
    })).map((line)=>{
        return line.join("")
    }).reverse().map((line) =>{
    console.log(line);
    })