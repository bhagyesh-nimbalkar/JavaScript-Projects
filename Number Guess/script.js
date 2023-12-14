const box = document.querySelector('#box');
const res = document.querySelector('#Ans'); 
const btn  = document.querySelector('.btn3');
const chance = document.querySelector('.chance');
const btn2 = document.querySelector('.btn2');
const Generate = ()=>{
     return Math.floor(Math.random()*100);
}
let Num = Generate();
let Attempts = 10;
console.log(Num);
btn.addEventListener('click',()=>{
      location.reload();
})
const Display = (x)=>{
      res.innerHTML = x;
      chance.innerHTML=`${Attempts}/10`;
}
btn2.addEventListener('click',()=>{
       if(Attempts === 1)
       {
          alert("You Lost.");
          location.reload();
          return;
       }
       if(parseInt(box.value)===Num)
       {
           Display("Correct Answer.");
       }
       else if(parseInt(box.value)>Num)
       {
           Attempts--;
           Display("Lower");
       }
       else {
          Attempts--;
          Display("Higher");
       }
});