let canvas,ctx;

window.addEventListener('load',function(){

 var data=[1,12,20,14,13,9,5,6,18];
 var color=["red","green","blue","orange","pink","purple","brown","black","grey"]

 canvas=document.querySelector("#myCanvas")
 ctx=canvas.getContext("2d");

var x=0;


 for(var i=0; i<data.length;i++){

     drawHistogram(x,data[i],color[i])
     x+=50;
 }

})
function drawHistogram(x,y,color){

let increment=20;
let widthFigures=40;
let posY=0;
ctx.save()

ctx.fillStyle=color;
ctx.font = '10pt Calibri'
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.translate(95,500);
ctx.rotate(Math.PI)
  
 if(x==0){
  ctx.fillRect(-20,posY, widthFigures, y*increment);
  ctx.strokeRect(-20,posY, widthFigures, y*increment)
  ctx.rotate(Math.PI)
  ctx.fillText(y,-5,20)
  }else {ctx.fillRect(-(x+20),posY,widthFigures,y*increment);
  	ctx.strokeRect(-(x+20),posY,widthFigures,y*increment);
  	ctx.rotate(Math.PI*5)
  ctx.fillText(y,x-5,20)}
  ctx.restore();

}