let paths = [];
let table, img, temp, table_1;
let inX, inY, t, angle, length;
let v1, v2, v3, v4, type;
let translateX, translateY;
let currentScript = document.currentScript;
let mapType;

function preload() {
	table = loadTable(currentScript.getAttribute('table_a'), 'csv', 'header');
	table_1 = loadTable(currentScript.getAttribute('table_b'), 'csv', 'header');
	img = loadImage(currentScript.getAttribute('image_loc'));
}

function setup() {
	ht = img.height;
	wd = img.width;
	createCanvas(wd, ht);
	image(img, 0, 0);
	frameRate(24);

	slider = createSlider(0, 255, 0);
	mapType = document.getElementsByTagName('h3')[0].innerText;

	if (mapType === 'Grid Iron') {
		translateX = 234;
		translateY = 146;
	} else if (mapType === 'Ring Radial') {
		translateX = 369;
		translateY = 187;
	} else if (mapType === 'Organic') {
		translateX = 300;
		translateY = 182;
	}
}

function keyTyped() {
	if (key == 'a' || 'A') {
		if (type == 0) {
			type = 1; //function to change color
		} else {
			type = 0;
		}
	}
}

function draw() {
	let toggle;
	if (type == 0) {
		toggle = 0;
	} else {
		toggle = 5;
	}

	const val = slider.value();
	image(img, 0, 0);
	background(255, val);

	translate(translateX, ht - translateY);
	inX = 0;
	inY = 0;
	t = 0;
	// console.log(table.columns[1]);
	for (const i = 0; i < 14; i++) {
		length = table.rows[0].arr[i];
		temp = table.rows[1].arr[i];
		angle = -radians(temp);

		if (mapType === 'Grid Iron') {
			v1 = table_1.getNum(i, 1);
			v2 = table_1.getNum(i, 2);
			v3 = table_1.getNum(i, 3);
			v4 = table_1.getNum(i, 4);
		} else if (mapType === 'Ring Radial') {
			v1 = table_1.getNum(i, 5);
			v2 = table_1.getNum(i, 6);
			v3 = table_1.getNum(i, 7);
			v4 = table_1.getNum(i, 8);
		} else if (mapType === 'Organic') {
			v1 = table_1.getNum(i, 9);
			v2 = table_1.getNum(i, 10);
			v3 = table_1.getNum(i, 11);
			v4 = table_1.getNum(i, 12);
		}

		const mX = mouseX - translateX;
		const mY = mouseY - ht + translateY;
		console.log(mouseX);

		push();
		translate(inX, inY);
		rotate(angle + t);
		// paths[i] = new path(0, 0, length);
		paths[i] = new path(length, v1, v2, v3, v4, toggle);
		paths[i].show();
		pop();

		inX = inX + length * cos(angle + t);
		inY = inY + length * sin(angle + t);
		// t = t + angle;
		const d = dist(mX, mY, inX, inY);
		if (d < 10) {
			noStroke();
			fill(200, 200);
			rect(mX, mY - 15, 120, 72);
			fill(50);
			textSize(14);
			text(
				'Center Bias: ' +
					v1 +
					'\n' +
					'Left: ' +
					v2 +
					'\n' +
					'Right: ' +
					v3 +
					'\n' +
					'Road: ' +
					v4 +
					'\n',
				mX + 3,
				mY
			);
		}
	}
}

class path {
	constructor(l, r1, r2, r3, r4, toggle) {
		this.len = l;
		this.cen = r1;
		this.lef = r2;
		this.rig = r3;
		this.rd = r4;
		this.toggle = toggle;
	}

	show() {
		stroke(50); // COLOR FOR PATH
		strokeWeight(this.toggle);
		line(0, 0, this.len, 0);
		noStroke();

		const radius_max = 35; //Scaling radius
		const max_value = 10; //maximum value from chart

		const rad1 = map(this.rig, 0, max_value, 0, radius_max);
		const rad2 = map(this.lef, 0, max_value, 0, radius_max);
		const rad3 = map(this.cen, 0, max_value, 0, radius_max);
		const rad4 = map(this.rd, 0, max_value, 0, radius_max);

		const dif = max(rad1, rad2);
		const dis = this.len;
		const padding = 5;

		const x1 = dis - dif / 2 - rad3 / 2;
		const y1 = rad1 / 2 + padding;
		const x2 = dis - dif / 2 - rad3 / 2;
		const y2 = -rad2 / 2 - padding;
		const x3 = dis - dif - rad3 / 2;
		const y3 = 0;
		const x4 = dis;
		const y4 = 0;

		fill(255, 245, 104, 255); //COLOR OF ELLIPSE
		ellipse(x1, y1, rad1, rad1); //right
		ellipse(x2, y2, rad2, rad2); //left
		ellipse(x3, y3, rad4, rad4); //road

		fill(200, 110, 100, 255); //COLOR FOR CENTER BIAS
		ellipse(x4, y4, rad3, rad3); //center bias
	}
}
