var arabaSayi;
var arabalar;
var arabaMarka;
var arabaMarkaRastgele;
var arabaRenk;
var arabaRenkRastgele;
var arabaHiz;
var arabaHizRastgele;
var gecenArabaSayi;
var i;
arabaSayi = 0;
gecenArabaSayi = 0;
function arabaEkle() {
    arabalar = document.getElementById("arabalar");
    arabaMarka = ["BMW", "FIAT", "DACIA", "FORD", "FERRARI", "KIA", "JEEP", "MINI", "MAZDA", "OPEL", "SKODA", "VOLVO", "ROVER", "NISSAN", "TATA", "AUDI", "DACIA", "TOYOTA", "SUZUKI", "TOFAS", "RENAULT", "MAZDA", "LADA", "JAGUAR", "DFM", "CITROEN", "CHEVROLET", "ROMEO"];
    arabaRenk = ["LIGHTCORAL", "CRIMSON", "MEDIUMVIOLETRED", "ORANGERED", "TOMATO", "DARKORANGE", "DARKKHAKI", "DARKVIOLET", "PURPLE", "LIMEGREEN", "SEAGREEN", "TEAL", "MAROON"];
    arabaHiz = ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    arabaMarkaRastgele = parseInt(Math.random()*arabaMarka.length);
    arabaRenkRastgele = parseInt(Math.random()*arabaRenk.length);
    arabaHizRastgele = parseInt(Math.random()*arabaHiz.length);
    if(arabaSayi < 5){
        arabaSayi++;
        arabalar.innerHTML += '<div id="'+arabaHiz[arabaHizRastgele]+'" style="left: 30px; margin-top: '+arabaSayi*80+'px;  background-color: '+arabaRenk[arabaRenkRastgele]+'" class="araba">'+arabaMarka[arabaMarkaRastgele]+'<div class="araba-sol-far"></div><div class="araba-sag-far"></div><div class="araba-on-sol-tekerlek"></div><div class="araba-on-sag-tekerlek"></div><div class="araba-arka-sol-tekerlek"></div><div class="araba-arka-sag-tekerlek"></div><div class="araba-egzoz"></div><div class="araba-egzoz-efekt"></div></div>';
    }else{
        alert("En fazla 5 araba!");
    }
}
function arabaTemizle() {
    if(arabaSayi > 0){
        arabalar.innerHTML = '';
        arabaSayi = 0;
    }else{
        alert("Temizlenecek araba yok!");
    }

}
var araba = document.getElementsByClassName("araba");

function basla() {
    if(arabaSayi > 1){
        document.getElementById("baslangic").style.visibility = "hidden";
        var arabaSagFar = document.querySelectorAll(".araba-sag-far");
        for (i = 0; i < arabaSagFar.length; i++){
            arabaSagFar[i].style.backgroundColor = "white";
        }
        var arabaSolFar = document.querySelectorAll(".araba-sol-far");
        for (i = 0; i < arabaSolFar.length; i++){
            arabaSolFar[i].style.backgroundColor = "white";
        }
        var arabaEgzozEfekt = document.querySelectorAll(".araba-egzoz-efekt");
        for (i = 0; i < arabaEgzozEfekt.length; i++){
            arabaEgzozEfekt[i].style.visibility = "visible";
        }
        setInterval(function () {
            for (i = 0; i < window.araba.length; i++) {
                hareket(i);
            }
        }, 20);
    }else{
        alert("En az 2 araba olmalı!");
    }
}
function hareket(i) {
    if(parseInt(window.araba[i].style.left) > "1060"){
        gecenArabaSayi++;
        document.getElementById("skorlar").innerHTML += '<hr><h2>'+gecenArabaSayi+' - '+window.araba[i].textContent+' ^ '+window.araba[i].id+'KM/h</h2>';
        window.araba[i].remove();
    }else{
        window.araba[i].style.left = (parseInt(window.araba[i].style.left) + parseInt(window.araba[i].id)) + "px";
    }
    if (arabaSayi === document.querySelectorAll("#skorlar h2").length){
        document.getElementById("skor").style.visibility = "visible";
    }
}
