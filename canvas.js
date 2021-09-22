var win = document.getElementById("gamewin");
//var square = $("#square");
var square = $("<img src = 'square.png' id = 'square'/>");
square.parent("#gamewin");

var mousexraw = 0;
var mouseyraw = 0;
var mouseposa = [];
var following=0;
var topcorner = [0,0];
var maxW=1;
var IMAGE_WIDTH = 20;
var IMG_SRC = "'square.png'";
var md=false;

$(document).ready(function(){
    topcorner=[$("#gamewin").position().left, $("#gamewin").position().top]
    $("#gamewin").append(square);
    square.hide();

    $(document).on("mousemove", function(e){
        mousexraw=e.pageX;
        mouseyraw = e.pageY;
        mouseposa = [mousexraw-topcorner[0], mouseyraw-topcorner[1]];



        
    })
    $("#amogus").click(function(){
        IMG_SRC="'amogus.png'";
        $("#square").attr("src", "amogus.png");
    });
    $("#rectangol").click(function(){
        IMG_SRC="'square.png'";
        $("#square").attr("src", "square.png");
    });

    $("#troll").click(function(){
        IMG_SRC="'troll.png'";
        $("#square").attr("src", "troll.png");

    });


    $("#gamewin").click(function(){
        if(md){
            md=false;
        }else{
            md=true;
        }
    })

    $("#gamewin").on("mouseenter", function(){
        console.log("following!");
        following=1;
        looper();

    })
    $("#gamewin").on("mouseleave", function(){
        console.log("no longer following!");
        md=false;
        square.hide();
        following=0;
    })
    $("#reset").click(function(){
        location.reload();
    })

    
    
    

})

function addimageatmouse(type){
    if (type==0){
        var newimg = $("<img src = "+IMG_SRC+ "id = 'cursor'/>");
    }else{
        var newimg = $("<img src = "+IMG_SRC+ "id = 'squareclone'/>");
    }
    
    newimg.css({maxWidth: IMAGE_WIDTH, position: "absolute", top:mouseposa[1]-IMAGE_WIDTH, left:mouseposa[0]-IMAGE_WIDTH});
    
    if(!outofbounds(mouseposa)){
        $("#gamewin").append(newimg);
    }

}

function timer(ms){
    return new Promise(res => setTimeout(res, ms));
}

async function looper(){
    while (following==1){
        console.log("####################################")
        followMouse(mouseposa);
        if(md){
            addimageatmouse(1);
    
        }
        if(($("#cursor")==null)){
            addimageatmouse(0);
            console.log("WEEEEE")
        }
        await(timer(17));
    }
}

function followMouse(mouseposa){
    var pos = square.position();
    console.log("square position: ("+pos.left+","+pos.top+")");
    console.log("mouse position: ("+mouseposa[0]+","+mouseposa[1]+")");
    //console.log("mouse position: ("+mousexraw+","+mouseyraw+")");
    var adj = [mouseposa[0]-20, mouseposa[1]-20];
    if (outofbounds(mouseposa)){
        console.log("ouch");
    
    }else{
        square.css({top: adj[1], left: adj[0]});
        square.show();
        console.log("moved it");
    }
    
}

function outofbounds(pos){
    if (mouseposa[0]>(500-IMAGE_WIDTH)){
        return true;
    }else if(mouseposa[1]>=(500-IMAGE_WIDTH)){
        return true;
    }else if (mouseposa[0]<=IMAGE_WIDTH){
        return true;
    }else if (mouseposa[1]<=IMAGE_WIDTH){
        return true;
    }
}

function moveSquare(){
    console.log("moved square!");
    var pos = $("#square").position()
    console.log("("+pos.left+","+pos.top+")");
    $("#square").css({top: pos.top, left: pos.left+5});
    document.getElementById("square").style.left+=10;
}
