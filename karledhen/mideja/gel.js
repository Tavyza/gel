// il gelju midea þušy au sa ni naran
const kadenon = ["seðysa", "ysto", "šomi", "þaša", "koža"];
const kanan = ["ukeð", "tersi", "naki", "sosaš", "zeža", "kasað", "mešto", "yntaija", "ðesoðo", "sasað", "þareið", "retað"];
function jazh_lakaz() {
    var time = ((Date.now() / 1000)-14000)+10438416000;
    const vaus = Math.floor(time / 0.864) % 100;
    const jazh = Math.floor(time / 86.4) % 1000; 
    document.getElementById("jaž").textContent=jazh.toFixed(0) + ":" + vaus.toFixed(0);
    var num;
    //date
    const hykos = time / 31556926;
    if (hykos % 4 == 0 && hykos % 400 == 0 && hykos % 100 != 0) {
        const num = 366;
        const mon = 4;
    } else {
        const num = 365;
        const mon = 5;
    };
    const kana = time / 86400 % 73;
    const kadeno = time / 6307200 % 5;
    document.getElementById("kana").textContent=Math.floor(kana)+"/"+Math.floor(kadeno)+"/"+Math.floor(hykos)
}

setInterval(jazh_lakaz,64);
