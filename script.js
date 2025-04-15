let hr=document.getElementById("hour");
let mi=document.getElementById("min");
let se=document.getElementById("sec");
function displyaTime(){
      let date=new Date();

      let hh = date.getHours();
      let mm = date.getMinutes();
      let ss = date.getSeconds();
      

      let hrotation=30*hh+mm/2;
      let mrotation=6*mm;
      let srotation=6*ss;

      hr.style.transform=`rotate(${hrotation}deg)`;
      mi.style.transform=`rotate(${mrotation}deg)`;
      se.style.transform=`rotate(${srotation}deg)`;
}
setInterval(displyaTime,1000);
