var suma = 0
var ppt = 1
var koszt = 10


function add(){
    suma+= ppt;
    textUpdate();
}

function upgrade(){
if(suma>=koszt){
    ppt = ppt*2;
    suma = suma - koszt;
    koszt= koszt*3;
    textUpdate();
}
}


function textUpdate(){
    document.getElementById("p").innerHTML=suma+" points";
    document.getElementById("upgrade").innerHTML="+" + ppt+" <br> koszt " + koszt + " monet";

    document.getElementById("mpt").innerHTML= ppt + " ppt";
}