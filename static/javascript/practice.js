class Header {
	constructor() {
		this.outlineContext = this.#getContext(0, 0, "#555555");
		this.topContext = this.#getContext(0, 0, "#FFFFFF", true);
		this.w = window.innerWidth/20.5;
		this.h = window.innerHeight/24.5;
		this.matrix = this.#createMatrix(this.w, this.h);
		this.cellSize = 20;
		this.padding = 0.5;
		this.running = false;
		this.area = document.getElementById("area");
	}

	#createMatrix = (w, h) => {
		let matrix = [];
		for(let i = 0; i<h; i++){
			for(let j = 0; j<w; j++){
				if(!matrix[i]){
					matrix[i] = [];
				}
				matrix[i][j] = 0;
			}
		}
		return matrix;
	}

	#getCenter(w, h) {
		return {
			x: 0 + "px",
			y: 0 + "px"
		};
	}

	updateMatrix() {
		for (let row = 0; row < this.matrix.length; row ++) {
			for (let col = 0; col < this.matrix[row].length; col ++) {
				this.outlineContext.fillStyle = this.matrix[row][col] > 0 ? "#FFFFFF" : "#000000";
				this.outlineContext.fillRect(col * (this.cellSize + this.padding),
				row * (this.cellSize + this.padding),
				this.cellSize, this.cellSize);
			}
		}
	}

	getNeighbors(elem) {
		const temp = elem.split(",");
		
		var i = parseInt(temp[0]);
		var j = parseInt(temp[1]);

		var nb = []
		var tuple;
		const W = Math.floor(this.w);
		const H = Math.floor(this.h);

		if(i-1 >= 0) {
			tuple = [i-1, j].toString();
			nb.push(tuple);
		}
		if(i-1>=0 && j-1>=0) {
			tuple = [i-1, j-1].toString();
			nb.push(tuple);
		}
		if(i-1>=0 && j+1<=W){
			tuple = [i-1, j+1].toString();
			nb.push(tuple);
		}
		if(j-1>=0) {
			tuple = [i, j-1].toString();
			nb.push(tuple);
		}
		if(j-1>=0 && i+1<=H){
			tuple = [i+1, j-1].toString();
			nb.push(tuple);
		}
		if(j+1<=W) {
			tuple = [i, j+1].toString();
			nb.push(tuple);
		}
		if(j+1<=W && i+1<=H){
			tuple = [i+1, j+1].toString();
			nb.push(tuple);
		}
		if(i+1<=H){
			tuple = [i+1, j].toString();
			nb.push(tuple);
		}
		// console.log(nb)
		return nb;
	}

	#getContext(w, h, color = "#000", isTransparent = false) {
		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext("2d");
		this.width = this.canvas.width = w;
		this.height = this.canvas.height = h;
		this.canvas.style.position = "absolute";
		this.canvas.style.background = color;
		if (isTransparent) {
			this.canvas.style.backgroundColor = "transparent";
		}
		const center = this.#getCenter(w, h);
		this.canvas.style.marginLeft = center.x;
		this.canvas.style.marginTop = center.y;
		document.body.appendChild(this.canvas);

		return this.context;
	}


	render() {
		const w = (this.cellSize + this.padding) * this.matrix[0].length - (this.padding);
		const h = (this.cellSize + this.padding) * this.matrix.length - (this.padding);

		this.outlineContext.canvas.width = w;
		this.outlineContext.canvas.height = h;

		const center = this.#getCenter(w, h);
		this.outlineContext.canvas.style.marginLeft = center.x;
		this.outlineContext.canvas.style.marginTop = center.y;

		this.topContext.canvas.style.marginLeft = center.x;
		this.topContext.canvas.style.marginTop = center.y;

		this.updateMatrix();
	}
}

var life = new Header();
life.render();

var flag = 0;
var restart = document.getElementsByClassName("restart");

setInterval(function() {
	
	if(life.running){
		let x = Math.floor(life.h);
		let y = Math.floor(life.w);

		var dict = {};

		for(let i = 0; i<x; i++){
			for(let j = 0; j<y; j++){
				const elem = [i, j].toString();
				if(life.matrix[i][j] == 1) {
					if(!dict[elem]){
						dict[elem] = 0;
					}
					// console.log(dict);
					const nb = life.getNeighbors(elem);
					nb.forEach((item, index) => {
						if(!dict[item]){
							dict[item] = 1;
						}
						else {
							dict[item] = dict[item] + 1;
						}
					});
				}
				
			}
		}

		for(var cell in dict) {
			var k = cell.split(",");
			var i = parseInt(k[0]); var j = parseInt(k[1]);
			// console.log(i, j, dict[k]);
			if(dict[cell]<2 || dict[cell] > 3){
				life.matrix[i][j] = 0;
			}
			else if (dict[cell] == 3) {
				life.matrix[i][j] = 1;
			}
		}

		life.render();
	}
}, 20);


life.area.addEventListener("click", function() {
	if(!life.running && flag>0){
		const cellWidth = life.cellSize + 0.5;
		let col = Math.floor(event.clientX / cellWidth);
		let row =  Math.floor((event.clientY - 116 - 20) / cellWidth);

        if(life.matrix[row][col] == 0){
            life.matrix[row][col] = 1;
        }
        else {
            life.matrix[row][col] = 0;
        }
        console.log(row , col);
        life.render();
	}
	else if(!life.running && flag==0) {
		flag=1;
	}
});

document.getElementById("play").addEventListener("click", function() {
	if(!life.running) {
		document.getElementById("play").style.backgroundImage = 'url(../static/img/pause.svg)';
	}
	else {
		document.getElementById("play").style.backgroundImage = 'url(../static/img/play.svg)';
	}
	life.running = !life.running;
	flag = 0;
	

});

restart[0].addEventListener("click", function() {
	life = new Header();
	life.running = false;
    life.render();

	flag = 0;
});