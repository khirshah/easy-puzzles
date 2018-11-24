/*same as number_of_squares.js but with a different approach for finding the squares*/

const N = 5;
var points = [[0,0],[0,2],[1,0],[2,0],[2,2]];
var NumberofSquares=0;

function iterPoints(){
    points.map((point) => {
        var currP = points[0]
        points = points.slice(1)
        calcDistances(currP, points)
    })
}

function calcDistances (P,PArr){
    
    var D = []
    PArr.map((point) => {
        
        var dist = Math.sqrt(Math.pow(P[0]-point[0],2)+Math.pow(P[1]-point[1],2));
        D.push(dist);
    })

    checkValues(P,D)
}

function checkValues(P,D) {
    for (var i2 in D){
    let j = parseInt(i2)+1;
    
        while (j<parseInt(D.length)){
            
            let value = D[i2]
            let i3 = D.indexOf(value,j);

            if (i3 == -1) {
                j=parseInt(D.length);
            }
            else{

                let diam =  Math.sqrt(Math.pow(points[i2][0]-points[i3][0],2)+Math.pow(points[i2][1]-points[i3][1],2));
                
                let k=0;
                while (k<D.length){
                    let i4 = D.indexOf(diam,k);
    
                    if (i4 == -1) {
                        
                        k=parseInt(D.length);
                    }
                    else {
                        
                        let dist2to4 = Math.sqrt(Math.pow(points[i2][0]-points[i4][0],2)+Math.pow(points[i2][1]-points[i4][1],2));
                        let dist3to4 = Math.sqrt(Math.pow(points[i3][0]-points[i4][0],2)+Math.pow(points[i3][1]-points[i4][1],2));
                        
                        if (dist2to4 == D[i2] && dist3to4 == D[i2]) {
                            NumberofSquares++;
                        }
                        
                        k=parseInt(i4)+1;
                    }
                }
                j=parseInt(i3)+1;
            }
        }
    }
}


iterPoints()

console.log(NumberofSquares)