let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second");
let ap = document.getElementById("tz");
setInterval(function(){
     const d = new Date();
     let ti = d.getHours();
     let mi = d.getMinutes();
     let si = d.getSeconds();
     let timezone = "";
     if(ti>=12)
     {
          ti%=12;
          timezone="PM";
     }
     else  timezone="AM";

     if(ti.toString().length == 1)
             ti="0"+ti;
     if(mi.toString().length==1)
             mi="0"+mi;
     if(si.toString().length == 1)
             si="0"+si;
     
     h.innerHTML = ti;
     m.innerHTML = mi;
     s.innerHTML = si;
     ap.innerHTML = timezone;
},1000);

