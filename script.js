var changing = false;

async function changeColor(){
    var btn = document.getElementById('myb');
    console.log('hover');
    console.log(btn);
    if(btn){
        changing = true;
        while (changing){
            col = [Math.random()*255, Math.random()*255, Math.random()*255];
            btn.style.backgroundColor= "rgb("+col[0]+","+col[1]+","+col[2]+")";
            await timer(50);
        }
    }
}

function stopChangeColor(){
    changing=false;
}

function timer(ms){
    return new Promise(res => setTimeout(res, ms));
}