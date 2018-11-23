/*The goal of this exercise is to make you find the closest point to given 
geographic coordinates (latitude and longitude). 
Your program must print the associated location name.

In this puzzle you will play a lot with conversion 
(degree to radian, coordinates to distance, string to float).
*/

const LON = parseFloat("3,879483".split(",").join("."))*(Math.PI/180);
const LAT = parseFloat("43,608177".split(",").join("."))*(Math.PI/180);
const N = parseInt(3);
const INPUT = ["1;Maison de la Prevention Sante;6 rue Maguelone 340000 Montpellier;;3,87952263361082;43,6071285339217",
"2;Hotel de Ville;1 place Georges Freche 34267 Montpellier;;3,89652239197876;43,5987299452849",
"3;Zoo de Lunaret;50 avenue Agropolis 34090 Mtp;;3,87388031141133;43,6395872778854"]
var defibObj = [];

for (let i = 0; i < N; i++) {
    const DEFIB = INPUT[i]
    const defibElements = DEFIB.split(";")
    const CoordsStrings = defibElements.slice(-2)
    const coordsRad = [parseFloat(CoordsStrings[0].split(",").join("."))*(Math.PI/180),parseFloat(CoordsStrings[1].split(",").join("."))*(Math.PI/180)]
    defibObj.push([defibElements.slice(1,2)[0],coordsRad[0],coordsRad[1]])
}

var d = 100;
var name = '';
defibObj.map((item) => {
    const D = Math.sqrt(Math.pow((item[1]-LON)*Math.cos((item[2]+LAT)/2),2)+Math.pow((item[2]-LAT),2))*6371;
    if (d > D){
        d = D
        name = item[0];
    }
})

console.log(name);