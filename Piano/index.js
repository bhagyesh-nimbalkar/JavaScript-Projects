const toggle = document.querySelector("#toggle");
const btn = document.querySelector(".btn");
const ball =document.querySelector("#ball");
const span = document.querySelectorAll(".key span");
const key = document.querySelectorAll(".key");
const volume =document.querySelector("#volume input");
const chan = ()=>
{
       btn.classList.toggle("active");
       ball.classList.toggle("change");
       span.forEach((ele)=>{
             ele.classList.toggle("change");
       })
       
}
let audio = new Audio("notes/a.mp3");
let allkeys=[]
const playSound = (key)=>{
    console.log(key);
    audio.src=`notes/${key}.mp3`;
    audio.play(); 
}
key.forEach(ele=>{
      allkeys.push(ele.dataset.key);
      ele.addEventListener("click",()=>{
        playSound(ele.dataset.key);
  });
})
const check = (ele)=>{
      console.log(ele);
      if(allkeys.includes(ele.key))
      {
          playSound(ele.key);
          key[allkeys.indexOf(ele.key)].classList.add("shrink");
          setTimeout(()=>{
            key[allkeys.indexOf(ele.key)].classList.remove("shrink");
          },100);
      }
}
const changeVolume = (ele)=>{
       console.log(ele.value);
       audio.volume=ele.value;
       
}
document.addEventListener("keydown",check);
toggle.addEventListener("click",chan);
volume.addEventListener("click",()=>{
    changeVolume(volume);
})
changeVolume(volume);
