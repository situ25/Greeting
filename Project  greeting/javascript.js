var flagCursor=false;

var p1=0;
var inputColor=document.getElementById("colorInput").value;
var message=document.getElementById("messageInput").value;
var wr=document.getElementById("write");
var from=document.getElementById("from").value;
var to=document.getElementById("to").value;
wr.innerHTML+=message;
fillCanvas();

function fillTo()
{
    to=document.getElementById("to").value;
    fillCanvas();  
    wr.innerHTML+=to;
}
function fillFrom()
{
    from=document.getElementById("from").value;
    fillCanvas();
    wr.innerHTML+=from;  
}
function changeTextInput()
{
    //window.alert("Hi there");    
  message=document.getElementById("messageInput").value;
  fillCanvas();
  wr.innerHTML+=message;
}

function changeColor(val)                 //    !!!!!!TO cmplete to change color of background
{
    inputColor=val;
    fillCanvas();
    wr.innerHTML+=inputColor;
}


function fillCanvas()
{
    var canvas=document.getElementById("canvas1");
    if(canvas.getContext){
     
        var ctx=canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle=inputColor;
        ctx.globalAlpha=1;
        ctx.fillRect(0,0,canvas.width,canvas.height);
        writeText();
    }
}

function writeText(){
    var canvas=document.getElementById("canvas1");
    if(canvas.getContext){
     
        var ctx=canvas.getContext('2d');
        
        ctx.font="40px Georgia";                          
        ctx.textAlign="center";  
        ctx.fillText(message,canvas.width/2,canvas.height/2);                       //Write text again
       
        ctx.save();
        ctx.textAlign="end";
        ctx.fillText(from,canvas.width-30,canvas.height-30);
        ctx.restore();
        ctx.save();
        ctx.textAlign="start";
        ctx.fillText(to,30,30);
        ctx.restore();       
    }
}


function mouseOver(event){                //No use presently
    //wr.innerHTML+="mouseOver";
    
}

function mouseMove(ev) {
    if(!flagCursor)
    return;
    fillpos(ev);
}

function mouseOut() {
    flagCursor=false;
//    document.getElementById("write").innerHTML = "";
}


function init(ev){
    flagCursor=!flagCursor;                        //So that when while drawing we click again then it must stop
    //var ev=window.event;
    fillpos(ev);
    
}

function fillpos(ev){
    var canvas=document.getElementById("canvas1");
    if(canvas.getContext)
    {
        
        var ctx=canvas.getContext('2d');
        ctx.fillStyle=inputColor;
        ctx.globalAlpha=0.2;
        var pos=getMousePos(canvas,ev);
        var borderWidth=parseInt(getComputedStyle(document.getElementById("canvas1")).borderWidth);
        
        var imagedata=ctx.getImageData(pos.x,pos.y,40,40);
        
        for(var i=0;i<imagedata.data.length;i+=4)
        {
            imagedata.data[i+3]=100;
        }
        ctx.putImageData(imagedata,pos.x,pos.y);
        writeText();
        
        //ctx.beginPath();
        //ctx.arc(pos.x-borderWidth,pos.y-borderWidth,10,0,2*Math.PI);
        //ctx.fill();
        //ctx.clearRect(30,40,150,150);
        //ctx.fillRect(pos.x-borderWidth-25,pos.y-borderWidth-25,50,50);                       //-25 to take to the center of the size of square
    }
}

function getMousePos(canvas,e){

    
    var rect=canvas.getBoundingClientRect();
    return{
        x: e.clientX-rect.left,
        y: e.clientY-rect.top
    };
    
   /*
    return{
        
        x: e.clientX-canvas.offsetLeft,
        y: e.clientY-canvas.offsetTop
    };
    */
}
