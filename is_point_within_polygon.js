/*Find out if a given point is within the lines of a convex polygon
Works for polygons with any number of vertices*/

const N = 4;
const polygon = [{"x":-100,"y":-100},{"x":100,"y":-100},{"x":100,"y":100},{"x":-100,"y":100}]
const M = 5;
const shoots = [{"x":0,"y":0},{"x":99,"y":99},{"x":101,"y":101},{"x":80,"y":-101},{"x":0,"y":-100}]
var triangles = [];

//fan triangulation - any convex polygon can be split into N-2 triangles
for (let i = 1; i < N-1; i++) {

	triangles.push([{"A":polygon[0],"B":polygon[i]},{"A":polygon[i],"B":polygon[i+1]},{"A":polygon[i+1],"B":polygon[0]}])
	
}
//check if point intersects with any of the given lines
function isPointWithin(triangle,shoot) {

	var centroid = {"x":(triangle[0].A.x+triangle[1].A.x+triangle[2].A.x)/3,"y":(triangle[0].A.y+triangle[1].A.y+triangle[2].A.y)/3}
	var r = {"x":shoot.x-centroid.x,"y":shoot.y-centroid.y}

	var intersects = false;
	
	triangle.map((edge) => {

		var s = {"x":edge.B.x-edge.A.x,"y":edge.B.y-edge.A.y}

		var u = (-s.y*(edge.A.x-centroid.x)+s.x*(edge.A.y-centroid.y))/(-r.x*s.y+s.x*r.y)
		var t = (r.x*(edge.A.y-centroid.y)-r.y*(edge.A.x-centroid.x))/(-r.x*s.y+s.x*r.y)

		//if it does, point is out of triangle
		if (u>=0 && u<1 && t>=0 && t<1){

			intersects = true;
		}
	})

	return (intersects)
}



shoots.map((shoot) => {
	var hitOrMiss = "no";
	triangles.map((triangle) => {
		var result = isPointWithin(triangle,shoot);
		//if one of triangles contains the point, we have a hit
		result == false ? hitOrMiss="yes" : null;
	})
	console.log(hitOrMiss);
})