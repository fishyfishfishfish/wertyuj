var mouseevent="empty";
var lastX,lastY;
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="red";
var width=4;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    currentX=e.clientX-canvas.offsetLeft;
currentY=e.clientY-canvas.offsetTop;

if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;

ctx.moveTo(lastX,lastY);
ctx.lineTo(currentX,currentY);
ctx.stroke();
}
lastX=currentX;
lastY=currentY;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
}