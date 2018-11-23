/*The travelling salesman problem (TSP) asks the following question: 
"Given a list of cities and the distances between each pair of cities, 
what is the shortest possible route that visits each city exactly once and returns to the origin city?"*/

const N = 5;
var points = [[9, 12],[24, 15],[12, 30],[4, 3],[13, 27]];

var distSum = 0;
var currPoint = points[0]
var initPoint = currPoint;
var lastPoint = 0;

points = points.slice(1)

while (points.length>0){
    var shortestDist = 0;
    var closestPoint = [];
    points.map((point) => {
        
        var dist = Math.sqrt(Math.pow(currPoint[0]-point[0],2)+Math.pow(currPoint[1]-point[1],2))
        
        if (shortestDist === 0 || shortestDist>dist) {
           
           shortestDist = dist;
           closestPoint = point;
           points.length==1 ? lastPoint = point : null;
        }  
    })
    
    currPoint = closestPoint;
    points.splice(points.indexOf(closestPoint),1);
    distSum += parseFloat(shortestDist);
    
}

distSum += parseFloat(Math.sqrt(Math.pow(initPoint[0]-lastPoint[0],2)+Math.pow(initPoint[1]-lastPoint[1],2)))

console.log(Math.round(distSum));