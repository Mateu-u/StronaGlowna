//ZEGAR
function odliczanie() 
{
    var dzisiaj = new Date();
    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth() + 1;
    var rok = dzisiaj.getFullYear();

    var godzina = dzisiaj.getHours();
    if (godzina < 10) godzina = "0" + godzina;
    var minuta = dzisiaj.getMinutes();
    if (minuta < 10) minuta = "0" + minuta;
    var sekunda = dzisiaj.getSeconds();
    if (sekunda < 10) sekunda = "0" + sekunda;
    document.getElementById("zegar").innerHTML = rok + "/" + miesiac + "/" + dzien + "/" + godzina + ':' + minuta + ':' + sekunda;

    setTimeout(function() { odliczanie(); }, 1000);

};

//Tryb ciemny
const checkbox = document.getElementById("checkbox");
const drop = document.getElementById("posun");

function zmien_kolor(){
    if (document.getElementById("checkbox").checked){
        //zmiana napisu i koloru dropdown
        document.getElementById("tryby").innerHTML = "Tryb jasny";
        document.getElementById("tryby").style.color = "white";

        //różne elementy na stronie
        document.getElementById("hamburger").style.color = "white";
        document.getElementById("zegar").style.color = "white";
        document.getElementById("pliki").style.color = "white";
        document.getElementById("więcej").style.color = "white";
        document.getElementById("BODY").style.backgroundImage = 'linear-gradient(to right, black, rgb(36, 36, 36))';

        //tryby dropdown
        document.getElementById("posun").style.backgroundColor = "black";
        document.getElementById("posun").style.borderColor = "white";

        //autor dropdown
        document.getElementById("posun1").style.backgroundColor = "black";
        document.getElementById("posun1").style.borderColor = "white";
        document.getElementById("posun1").style.color = "white";

        //ramka header
        document.getElementById("HEADER").style.borderColor = "white";
        document.getElementById("pliki").style.borderColor = "white";
        document.getElementById("tytul").style.borderColor = "white";
        
    } else {
        //zmiana napisu i koloru dropdown
        document.getElementById("tryby").innerHTML = "Tryb ciemny";
        document.getElementById("tryby").style.color = "black";

        //różne elementy na stronie
        document.getElementById("hamburger").style.color = "black";
        document.getElementById("zegar").style.color = "black";
        document.getElementById("pliki").style.color = "black";
        document.getElementById("więcej").style.color = "black";
        document.getElementById("BODY").style.backgroundImage = 'linear-gradient(to right, blue, lightblue)';

        //tryby dropdown
        document.getElementById("posun").style.backgroundColor = "rgb(62, 62, 207)";
        document.getElementById("posun").style.borderColor = "black";

        //autor dropdown
        document.getElementById("posun1").style.backgroundColor = "rgb(62, 62, 207)";
        document.getElementById("posun1").style.borderColor = "black";
        document.getElementById("posun1").style.color = "black";

        //ramka header
        document.getElementById("HEADER").style.borderColor = "black";
        document.getElementById("pliki").style.borderColor = "black";
        document.getElementById("tytul").style.borderColor = "black";
    }
}

//Dropdown

function show() {
    var x = document.getElementById("posun");
    if (x.style.display === "none") {
        x.style.display = "flex";
        document.getElementById("hamburger").innerHTML = "Close";
    } else {
        x.style.display = "none";
        document.getElementById("hamburger").innerHTML = "Menu";
    }
    var y = document.getElementById("posun1");
    if (y.style.display === "none") {
        y.style.display = "flex";
    } else {
        y.style.display = "none";
    }
}

//Slider

function shrek1() {
    document.getElementById("shrekP1").style.display = "flex";
    document.getElementById("shrekP2").style.display = "none";
    document.getElementById("shrekP3").style.display = "none";
}

function shrek2() {
    document.getElementById("shrekP2").style.display = "flex";
    document.getElementById("shrekP1").style.display = "none";
    document.getElementById("shrekP3").style.display = "none";
}

function shrek3() {
    document.getElementById("shrekP3").style.display = "flex";
    document.getElementById("shrekP1").style.display = "none";
    document.getElementById("shrekP2").style.display = "none";
}
