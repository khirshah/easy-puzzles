var inputs = "300 10,1500 10,3000 10".split(",")
const speedLimit = parseInt(90);
var speed = speedLimit;
const lightCount = 3;
var data = [];

for (let i = 0; i < lightCount; i++) {
    puts = inputs[i].split(' ');
    data.push({distance: parseInt(puts[0]),duration: parseInt(puts[1])});
}

var pass=false;
while (pass==false && speed > 0){
	var pass = lightCount;
	for (var i in data) {
		var light = data[i]
		var duration = light.distance/(speed/3.6)

		if (parseInt(duration/light.duration)%2==0){
			pass = true;

		}
		else {
			pass=false;
			speed--
			break;
		}
	}
}

console.log("speed:", speed)