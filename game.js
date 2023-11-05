//? rastgele bir sayı tuttu 1 ile 20 arası
let rasgeleSayı=Math.ceil(Math.random()*20)
console.log(rasgeleSayı);

let mesaj= document.querySelector(".msg")
let skor=10;
// skoru index html den çekebilirdik çok kullanacağımız için bu daha tercih edilen bir yol
let enYuksekSkor=localStorage.getItem("top-score") || 0;

document.querySelector(".top-score").textContent=enYuksekSkor

// her Ckeck butonuna basıldığında yapılacaklar

document.querySelector(".check").addEventListener("click",(e)=>{
    const tahmin=document.querySelector(".guess").value
    //tahmin girmeden butona basıldı ise
    if(!tahmin){
        mesaj.textContent="Lütfen bir Sayı Giriniz"
        //tahmin doğru ise
    }else if(tahmin==rasgeleSayı){
        mesaj.textContent="Tebrikler Bildiniz🙌"
        document.querySelector("body").style.backgroundColor= "green"
        document.querySelector(".number").textContent=rasgeleSayı
        document.querySelector(".check").disabled=true


    //!top score kontrolü

        if (skor>enYuksekSkor) {

                localStorage.setItem("top-score", skor)

            enYuksekSkor=skor;
            document.querySelector(".top-score").textContent=enYuksekSkor
            
        }

     //!tahmin yanlış ise   
    }else{
        // skor 1 den büyük olduğu sürece tahmin hakkım var

        if (skor>1) {
            skor--;
            document.querySelector(".score").textContent=skor
            tahmin<rasgeleSayı ? 
            mesaj.textContent="Artır" : 
            mesaj.textContent="Azalt"
            
        }else{
            mesaj.textContent="Oyunu Kaybettiniz😣"
            document.querySelector(".score").textContent=0
            document.querySelector("body").style.backgroundColor="red"
            
            
            //oyunu kaybettiniz

        }


    }
})

// again butonuna basınca ayrlar başlangıç ayarına gelsin. Arka plan #2d3436 olsun

document.querySelector(".again").onclick=()=>{
    document.querySelector("body").style.backgroundColor="#2d3436"
    rasgeleSayı=Math.ceil(Math.random()*20)
    skor=10;
    document.querySelector(".score").textContent=skor
    document.querySelector(".number").textContent="?"
    document.querySelector(".guess").value=""
    mesaj.textContent="Oyun yeni oyuncu için başlıyor"
    document.querySelector(".check").disabled=false
}

//!enter 
// klavyeden eneter tuşun absıldığında check butonu çalışsın
document.addEventListener("keydown", function(e){
    if (e.key==="Enter") {
        // enter tuşuna basıldığında check butonunu tıkla
        document.querySelector(".check").click()
        
    }
})

document.querySelector(".check").addEventListener("click", ()=>{
    tahmin= document.querySelector(".guess").value
    const tahminSayı= parseInt(tahmin);
    if (tahminSayı>=1 && tahminSayı<=20 && !isNaN(tahminSayı)) {
        //doğru sayı girilmişse onu devam ettir
        
    }else{
        mesaj.textContent="Geçersiz sayı girdiniz, 1 ile 20 arasında bir sayı giriniz"
        skor++
    }
})
