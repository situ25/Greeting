var flagCursor=false;

var p1=0;
var wr=document.getElementById("write");
wr.innerHTML="changesd ";
writeText();

function writeText(){
    var canvas=document.getElementById("canvas1");
    if(canvas.getContext){
     
        var ctx=canvas.getContext('2d');
        ctx.font="20px Georgia";
        ctx.fillText("Hello World",100,100);
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
        ctx.fillStyle='rgb(0,240,0)';
        ctx.globalAlpha=0.2;
        var pos=getMousePos(canvas,ev);
        var borderWidth=parseInt(getComputedStyle(document.getElementById("canvas1")).borderWidth);
        //ctx.beginPath();
        //ctx.arc(pos.x-borderWidth,pos.y-borderWidth,10,0,2*Math.PI);
        //ctx.fill();
        //ctx.clearRect(30,40,100,200);
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
