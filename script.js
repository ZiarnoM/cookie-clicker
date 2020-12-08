var sum = 10000;
var cpt = 1;
var amount =0;
var cost = 10; 
var cps = 0;
var cost10,costp = 0;

// persecond call
window.setInterval(function(){
  perSecond();
}, 1000);

// add cookie
function add(){
    sum+= cpt;
    // blockCreate();
    textUpdate();
}

// pop-up divs - TODO
/* function blockCreate(){
    var posX = window.event.clientX;
    var posY = window.event.clientY;
    let div = document.createElement('div');
    div.classList.add('proba');
    let text = document.createTextNode('+'+ cpt);
    div.appendChild(text);
    document.body.appendChild(div);
    document.querySelector('.proba').style.top= posY +"px";
    document.querySelector('.proba').style.left= posX + "px";
    /* document.createElement("div").className = 'animacja';
    document.querySelector(".animacja").innerHTML = 'huj'; 
} 
*/

// upgrade earning by 1 cpt
function upgrade1(){
    if(sum>=cost){
        cpt = cpt+1;
        sum -= cost;
        cost = parseInt(Math.ceil(cost*1.15))
        amount++;
        textUpdate();
    }
}
function costUpdate(){
    // calculate cost of 10 upgrades
    costp = parseInt(Math.ceil(cost*1.15));
    cost10 = parseInt(cost + costp);
    for(i=0;i<8;i++){  
        costp = parseInt(Math.ceil(costp*1.15));
        cost10 = parseInt(cost10 +  costp);
    }

}
// upgrade earning by 10 cpt
function upgrade10(){
    if(sum>=cost10){
        cpt = cpt+10;
        sum -= cost10;
        amount+=10;
        cost = parseInt(Math.ceil(costp*1.15));
        textUpdate();
    }

}

// update text on website
function textUpdate(){
    costUpdate() 
    document.querySelector(".total").innerHTML=sum+" cookies";
    document.querySelector(".upgrade1").innerHTML="+ 1 cpt <br> cost " + cost + " cookies";
    document.querySelector(".upgrade10").innerHTML="+ 10 cpt <br> cost " + cost10 + " cookies";
    document.querySelector(".mpt").innerHTML= cpt + " cpt";
    document.querySelector(".ilosc").innerHTML = "Kupiłeś już: " + amount;
    /* document.querySelector(".komunikat").innerHTML = "Pozycja myszki <br> X: " + posX +"<br> Y: " + posY; */
}

function perSecond(){
    sum += cps;
    textUpdate();
}