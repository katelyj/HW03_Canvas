var ctx = c.getContext("2d");


var rec = function(e) {
	ctx.fillRect(e.pageX, e.pageY, 50, 50);	
};

var clear = function(e) {
	e.preventDefault(); 
	ctx.clearRect( 0, 0, c.width, c.height);	
	ctx.beginPath();

};

var cir = function(e) {
	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, 15, 0, 2 * Math.PI);
	ctx.moveTo(e.offsetX, e.offsetY); 
	ctx.fill();
	ctx.stroke();
};


c.addEventListener("click", cir);

b.addEventListener("click", clear);
