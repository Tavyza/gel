// il gelju midea þušy au sa ni naran
const kadenon = ["seðysa", "ysto", "šomi", "þaša", "koža"]
const kanan = ["ukeð", "tersi", "naki", "sosaš", "zeža", "kasað", "mešto", "yntaija", "ðesoðo", "sasað", "þareið", "retað"]
function jazh_lakaz() {
    //const d = new Date;
    var time = ((Date.now() / 1000)-14000)+10438416000;
    const zh = Math.floor(time / 1.728) % 50;
    const he = Math.floor(time / 86.4) % 100;
    const ke = Math.floor(time / 8640) % 10;  
    document.getElementById("sana").textContent=ke.toFixed(0) + ":" + he.toFixed(0) + ":" + zh.toFixed(0);
    var num;
    //date
    const hykos = time / 31556926;
    //if (hykos % 4 == 0 && hykos % 400 == 0 && hykos % 100 != 0) {
    //    const num = 366;
    //    const mon = 4;
    //} else {
    //    const num = 365;
    //    const mon = 5;
    //};
    const kana = time / 86400 % 73;
    const kadeno = time / 6307200 % 5;
    document.getElementById("reky").textContent=Math.floor(kana)+"/"+Math.floor(kadeno)+"/"+Math.floor(hykos)
}

//while (true) {
//    jazh_lakaz()
//}
setInterval(jazh_lakaz,1);
