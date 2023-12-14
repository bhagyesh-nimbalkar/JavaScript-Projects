const input = document.querySelector("input");
const modal = document.querySelector("#modal");
const btn = document.querySelector('.btn');
const img = document.querySelector('.img');
const temp = document.querySelector("#main h1");
const cityname = document.querySelector("#main h2");
const desc = document.querySelector("#main p");
const icn1 = document.querySelector(".hum");
const icn2 = document.querySelector(".win");
const humidity = document.querySelector(".humidity h3");
const windspeed = document.querySelector(".wind-speed h3");
const hum_msg = document.querySelector(".humidity p");
const win_msg = document.querySelector(".wind-speed p");
function kc(x)
{
       return x-273.15;
}
btn.addEventListener('click',()=>{
     let str = input.value.toString();
     if(str.length === 0){
        error();
        return;
     } 
let inp = input.value.toString();
const request =  new XMLHttpRequest();
request.open("GET",`http://api.openweathermap.org/geo/1.0/direct?q=${inp}&appid=667ea8b141d5b90f05d15b8329cb6a64`);
request.send();
request.onload = ()=>{
      if(request.status === 200)
      {
        const res= JSON.parse(request.response);
            if(res.length===0)
            {
                error();
                return;
            }
           let latitude = res[0].lat;
           let longitude = res[0].lon;
           const data = new XMLHttpRequest();
           data.open("GET",`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=667ea8b141d5b90f05d15b8329cb6a64`);
           data.send();
           data.onload = ()=>{
            if(data.status===200)
            {
                const res = JSON.parse(data.response);
                if(res.length===0)
                {
                     error();
                     return;
                }
                console.log(res);
                console.log(res['weather'][0].icon);
                img.src=`http://openweathermap.org/img/wn/${res['weather'][0].icon}@2x.png`;
                img.style.width="150px";
                img.style.height="150px";
                temp.innerHTML = `${kc(res['main'].temp).toFixed(1)}<sup>o</sup>C`;
                cityname.innerHTML = `${inp.toUpperCase()},${res['sys'].country}`;
                desc.innerHTML = `${res['weather'][0].main}`;
                icn1.classList.add("fa-solid");
                icn1.classList.add("fa-water");
                icn1.style.fontSize="35px";
                icn1.style.color="white";
                humidity.innerHTML=`${res['main'].humidity}`;
                hum_msg.innerHTML = "Humidity";
                icn2.classList.add("fa-solid");
                icn2.classList.add("fa-wind");
                icn2.style.fontSize="35px";
                icn2.style.color="white";
                windspeed.innerHTML=`${res['wind'].speed} kph`;
                win_msg.innerHTML = "Wind Speed";
            }
        }
      }
}
});
function error()
{
    modal.classList.add("active");
    setTimeout(()=>{
       modal.classList.remove('active');
    },1000);
}
window.addEventListener('keyup',()=>{
     input.style.textTransform="uppercase";
});