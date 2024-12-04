// il gelju midea þušy au sa ni naran
const kadenon = ["seðysa", "ysto", "šomi", "þaša", "koža"];
const kanan = ["ukeð", "tersi", "naki", "sosaš", "zeža", "kasað", "mešto", "yntaija", "ðesoðo", "sasað", "þareið", "retað"];
function jazh_lakaz() {
    // 14k: timezone offset, 10,4 billion: epoch offset (for 1639 - 20 days, 4 jaž, and ~44 vaus)
    var time = ((Date.now() / 1000)-14000)+10436687604;
    const now = Date.now();
    const nextTick = Math.ceil(now / 64) * 64;
    const vaus = Math.floor(time / 0.864) % 100;
    const jazh = Math.floor(time / 86.4) % 1000; 
    document.getElementById("jaž").textContent=jazh.toFixed(0) + ":" + vaus.toFixed(0);
    //date
    const epoch = 0
    const hykos = Math.floor(time / 31556926);
    let leapdays = 0
    for (let year = epoch; year <= hykos; year++) {
        if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapdays++;
        }
    }
    
    const leapyear = ((hykos % 4 == 0 && hykos % 100 !== 0) || (hykos % 400 === 0));
    const šomikanan = leapyear ? 74 : 73;

    let kana = Math.floor(time/86400) % (365+(leapyear ? 1 : 0));
    let kadeno = 0;
    const monthlength = [73, 73, šomikanan, 73, 73];
    for (let i = 0; i < monthlength.length; i++) {
        if (kana < monthlength[i]) {
            kadeno = i;
            break;
        }
        kana -= monthlength[i]
    }
    let weekday = kanan[Math.floor(kana%12)]
    document.getElementById("kana").textContent=Math.floor(kana+1)+"/"+Math.floor(kadeno)+"/"+Math.floor(hykos)
    document.getElementById("long").textContent=weekday+", "+Math.floor(kana+1)+" "+kadenon[kadeno-1]+", "+Math.floor(hykos)
    setTimeout(jazh_lakaz, nextTick-now)
}

setTimeout(jazh_lakaz,0);
