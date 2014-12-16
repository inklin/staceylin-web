//Global variables
int X, Y;

//Setup the Processing Canvas
void setup()
{
	size(550, 550);
	background(0, 0, 0);
	fill(0, 0, 0);
	noLoop();
	PFont fontA = loadFont("courier");
	textFont(fontA, 14);
}

//Drawing
void draw(){
	// No Lines
	noStroke();

// Tail
	// Grey Tail
	rotate(PI/5.0);
	translate(200, -270)
	fill(121, 120, 104);
	ellipse(300, 390, 120, 50);
	resetMatrix();
	// Stripe on Tail
	translate(-153, 280);
	rotate(-PI/4.5);
	fill(105, 105, 105);
	ellipse(300, 390, 50, 25);
	resetMatrix();
	translate(-122, 305);
	rotate(-PI/4.5);
	ellipse(300, 390, 42, 20);
	resetMatrix();

	// Head Top and Bottom
	fill(139, 137, 112);
	quad(200, 100, 300, 100, 320, 200, 180, 200)
	quad(180, 200, 320, 200, 300, 230, 200, 230)
	// Ear1
	triangle(295, 100, 330, 90, 305, 130);
	// Ear2
	triangle(170, 90, 205, 100, 195, 130);
	// Neck
	rect(225, 230, 50, 10);
	// Left Arm
	rect(170, 240, 30, 150);
	// Right Arm
	rect(300, 240, 30, 150);
	// Upper Body
	fill(139, 71, 38);
	quad(170, 240, 330, 240, 300, 340, 200, 340);
	// Lower Body
	fill(238, 64, 0);
	rect(200, 340, 100, 50);
	fill(139, 137, 112);
	// Left Leg
	rect(200, 390, 40, 100);
	// Right Leg
	rect(260, 390, 40, 100)
	// Slanted Left Arm
	//quad(170, 240, 185, 290, 150, 380, 135, 365);
	// Slanted Right Arm
	//quad(330, 240, 365, 365, 350, 380, 315, 290);

// Face Details
	// White Face
	fill(255, 255, 240);
	ellipse(250, 180, 120, 100);
	// Darker Grey Face
	fill(105, 105, 105);
	ellipse(250, 190, 120, 85);
	// White Mouth
	fill(255, 255, 240);
	ellipse(250, 200, 80, 30);
	// Bridge
	fill(105, 105, 105);
	rect(242, 130, 20, 50);
	// White mouth
	//fill(255, 255, 240);
	//ellipse(250, 210, 50, 20);
	// Black Nose
	fill(0, 0, 0);
	ellipse(250, 200, 25, 18);
	//Left Eye
	//fill(0, 0, 0);
	//ellipse(230, 170, 25, 25);
	//Right Eye
	//ellipse(270, 170, 25, 25);

// Base Clothes
	// Orange pants left side
	fill(255, 69, 0);
	rect(200, 390, 40, 50);
	// Orange pants right side
	rect(260, 390, 40, 50);
	// Orange bottom
	rect(200, 350, 100, 40);
	// Orange top
	rect(200, 240, 100, 100);

// Clothes Details
	// Left Strap 1
	fill(102, 51, 0);
	rect(200, 260, 30, 20);
	// Left Strap 2
	rect(200, 290, 30, 20);
	// Left Strap 3
	rect(200, 320, 30, 20);
	// Right Strap 1
	rect(270, 260, 30, 20);
	// Right Strap 2
	rect(270, 290, 30, 20);
	// Right Strap 3
	rect(270, 320, 30, 20);

// Gun
	// Big Gun part
	fill(190, 190, 190);
	rect(420, 100, 60, 250);
	// Smaller Lower part
	rect(420, 400, 30, 50);
	// Arch
	fill(190, 190, 190);
	arc(450, 450, 60, 70, 0, PI);
	// Arch (Shadow)
	fill(0, 0, 0);
	arc(450, 450, 40, 40, 0, PI);
	//fill(190, 190, 190);
	//rect(440, 480, 20, 10);

// Gun Details
	fill(142, 142, 141);
	// Barrel
	rect(410, 350, 80, 70);
	// Top
	rect(420, 120, 75, 85);

// Mini Groot Pot
	fill(49, 148, 164);
	//rect(70, 440, 70, 50);
	quad(70, 440, 130, 440, 125, 490, 75, 490);

// Mini Groot
	// Body
	fill(140, 162, 142);
	rect(93, 400, 15, 40);
	// Head
	rect(85, 370, 30, 30);
	// Right Arm
	rect(100, 420, 30, 10);
	// Left Arm
	rect(70, 410, 30, 10);
	// Leaf Head
	fill(22, 125, 32);
	rect(85, 360, 30, 10);
}