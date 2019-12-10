function setup() {
	createCanvas(800,600);
}

function draw() {
	background(225);
	var x = 75;
	var y = 75;
	for (var i = 0; i < hour(); i++) {
		if (i == hour() - 1) {
			drawBattery(x, y, false);
		} else {
			drawBattery(x, y, true);
		}
		if (i % 4 == 3) {
			// return to next line
			y += 75;
			x = -100;
		}
		if (i == 11) {
			// make line to separate am/pm
			y -= 25;
			stroke(0);
			line(75, 300, 705, 300);
			y += 50;
		}
		x += 175;
	}
}

function drawBattery(x, y, full) {
	stroke(0);
	strokeWeight(0.25);
	fill(255);
	rect(x, y, 100, 45, 10);

	noStroke();
	if (full) {
		fill(0, 255, 0);
		rect(x+3, y+3, 94, 39, 8);
	} else {
		if (second() < 30) {
			fill(255, 255 * second() / 30, 0); // red to yellow
		} else {
			fill(255 * (60-second()) / 30, 255, 0); // yellow to green
		}
		rect(x+3, y+3, 94 * minute() / 60, 39, 8);
		drawLightning(x+35, y-5)
	}

	fill(0);
	rect(x+100, y+12, 5, 20, 0, 5, 5, 0); // battery stub
}

function drawLightning(x, y) {
	fill(0);
	beginShape();
	vertex(x+20, y);
	vertex(x+2, y+38);
	vertex(x+16, y+33);
	vertex(x+10, y+60);
	vertex(x+28, y+22);
	vertex(x+14, y+27);
	endShape(CLOSE);
}