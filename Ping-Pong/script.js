const box = document.querySelector("#canva");
/** @type {CanvasRenderingContext2D} */
let ctx = box.getContext("2d");
ctx.clearRect(0,0,box.clientWidth,box.clientHeight);
ctx.fillStyle="#FFF";

ctx.beginPath();
ctx.arc(box.clientWidth/2,15,10,50,360);
ctx.fill();
ctx.strokeStyle="#FFF";
ctx.stroke();
ctx.closePath();

ctx.lineCap="round";
ctx.fillRect(0,0,10,80);
ctx.fillRect(ctx.clientWidth-10,0,10,80);