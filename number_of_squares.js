/*Given the possible integer positions for the pegs, 
in how many ways can the farmer pick 4 distinct positions to form a square?

Note that we do not require the squares to be axis-aligned.*/

const n = 5;
var points = [[0,0],[0,2],[1,0],[2,0],[2,2]]
var NumberofSquares=0;
//main function to iterate the points and delete the one we take as base point
function iterPoints(){
    points.map((point) => {
        
        var currP = points[0];
        points=points.slice(1);
        calcDistances(currP, points);
    });
}
//function to calculate the distances from our base
function calcDistances (P,PArr){

    var D = [];
    
    PArr.map((point) => {
        
        var dist = Math.sqrt(Math.pow(P[0]-point[0],2)+Math.pow(P[1]-point[1],2));
        D.push(dist);
    });

    checkValues(P,D);
}
//function to check if values match certain criteria
function checkValues(P,D) {
    //take the next ditstance
    for (var i2 in D){
    
        let j = parseInt(i2)+1;
        //check if there is identical value in distances array
        while (j<parseInt(D.length)) {

            let value = D[i2];
            let i3 = D.indexOf(value,j);
            //no match, we jump to the next index2 value
            if (i3 == -1) {
                
                j=parseInt(D.length);
            }
            //another one found
            else{

                //create vectors
                var v1 = [points[i2][0]-P[0],points[i2][1]-P[1]];
                var v2 = [points[i3][0]-P[0],points[i3][1]-P[1]];
                //check if they form 90 degrees with our base point being the vertex
                var angle = checkAngle(v1,v2);
                
                if (angle == 90) {
                    //yaay, 90 degrees, let's measure the diameter
                    let diam =  Math.sqrt(Math.pow(points[i2][0]-points[i3][0],2)+Math.pow(points[i2][1]-points[i3][1],2));
                    let k=0;
                    //find a point with diameter distance from the base point
                    while (k<D.length) {
                        
                        let i4 = D.indexOf(diam,k);
        
                        if (i4 == -1) {
                            
                            k=parseInt(D.length);
                        }
                        else {
                            //found one, check the 2 vertices lying on it if they are both 90 degrees
                            v1 = [points[i2][0]-points[i4][0],points[i2][1]-points[i4][1]];
                            v2 = [points[i3][0]-points[i4][0],points[i3][1]-points[i4][1]];
                            
                            var angle2 = checkAngle(v1,v2);
                            
                            v1 = [points[i4][0]-points[i2][0],points[i4][1]-points[i2][1]];
                            v2 = [P[0]-points[i2][0],P[1]-points[i2][1]];
                            
                            var angle3 = checkAngle(v1,v2);
                            
                            if (angle2 == 90 && angle3==90) {
                                //we have a square
                                NumberofSquares++;
                            }
                            //continue with same diameter, there may be others
                            k=parseInt(i4)+1;
                        }
                    }
                }
                //continue with same distance from base point, there may be others
                j=parseInt(i3)+1;
            }
        }
    }
}

//function to measure the angle between 2 vectors
function checkAngle(v1,v2){
    
    let mult = v1[0]*v2[0]+v1[1]*v2[1]
    let scalar = Math.sqrt(Math.pow(v1[0],2)+Math.pow(v1[1],2))*Math.sqrt(Math.pow(v2[0],2)+Math.pow(v2[1],2))
    let A = Math.round(Math.acos(mult/scalar)*57.2957795)
    return A
    
}


iterPoints()

console.log(NumberofSquares)