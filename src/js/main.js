let choose=confirm("Dark mode secilsin?")
if(choose==true){
  
    document.body.style.backgroundColor="black";
    
}else{
    document.body.style.backgroundColor="white"


let a= Number(prompt("Xahis olunur yasinizi girin"));
if(a<18){
    alert("sehifeye giris qadagandir!!!!");
}else{
  
let ad=prompt("adinizi daxil edin");
let soyad=prompt("soyadinizi daxil edin");
let password=prompt("parolunuzu daxil edin");

class userInfo{
    constructor(ad,soyad,password){
        this.ad=ad;
        this.soyad=soyad;
        this.password=password;
    }
       fullname(){
        return `${this.ad} ${ this.soyad}`;
    }
}
const User=new userInfo(ad,soyad,password);
document.getElementById("body").innerHTML=User.fullname().toUpperCase();
}
}
