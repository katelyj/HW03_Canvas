
var ctx = c.getContext("2d");

c.addEventListener("click", function(e) {
    ctx.fillRect(e.pageX, e.pageY, 50, 50);});

b.addEventListener("click", function(e) {
    ctx.clearRect( 0, 0, c.width, c.height);
});
