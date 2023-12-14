function ca(a,b)
{
      return a*b;
}
setInterval(function(){
    let second = document.getElementById("seconds");
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    const d = new Date();
     let ti = d.getHours();
     let mi = d.getMinutes();
     let si = d.getSeconds();
     if(ti>=12)
     {
          ti%=12;
     }
     ti+=mi/60;
    second.style.transform=`rotate(${ca(si,6)}deg)`;
    hour.style.transform=`rotate(${ca(ti,30)}deg)`;
    minute.style.transform=`rotate(${ca(mi,6)}deg)`; 
},1000);