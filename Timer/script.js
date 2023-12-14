window.onload = function()
{
const show  = document.querySelector(".show");
const start= document.querySelector(".btn1");
const stp= document.querySelector(".btn2");
const reset= document.querySelector(".btn3");
show.innerHTML = "00:00:00:00";
// Start Button Function 
function FixString(x)
{
     if(x.length<=1)
       return "0"+x;

    return x;
}
let hour=0,minute=0,second=0,mil=0;
function startTimer()
{
    mil++;
    if(mil>99)
    {
       mil=0;
       second++;
    }
    if(second>59){
         second=0;
         minute++;
    }
    if(minute>59)
    {
         minute=0;
         hour++;
    }
    show.innerHTML = FixString(hour.toString())+":"+FixString(minute.toString())+":"+FixString(second.toString())+
    ":"+FixString(mil.toString());
}
var Stopwatch;
start.onclick=function()
{
    clearInterval(Stopwatch);
    Stopwatch = setInterval(startTimer,10);
}
// Stop Button Function 
stp.addEventListener('click',()=>{
    clearInterval(Stopwatch);
});
// Reset button Function 
reset.addEventListener('click',()=>{
     location.reload();
});
}