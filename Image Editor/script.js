const choose = document.querySelector('.file');
const decision = document.querySelector('#img');
const mainImg = document.querySelector('.main-img');
const right = document.querySelector('#right');
const left = document.querySelector("#left");
const reset = document.querySelector('.reset');
const save = document.querySelector('.save');
const filters = document.querySelectorAll("#box div");
const icns = document.querySelectorAll('.icn i');

const ObjectValue={};
const Rotations={};
function resetAll()
{
      for(let key in ObjectValue)
      {
           if(ObjectValue.hasOwnProperty(key))
           {
              delete ObjectValue[key];
           }
      }
}
icns.forEach((ele)=>{
         ele.addEventListener('click',()=>{
              if(ele.classList.contains('fa-rotate-left'))
              {
                   if(Rotations['leftRotate']!==undefined)
                   {
                         let x = Rotations['leftRotate'];
                         x-=90;
                         mainImg.style.transform=`rotate(${x}deg)`;
                         Rotations['leftRotate']=x;
                   }
                   else 
                   {
                        Rotations['leftRotate']=-90;
                        mainImg.style.transform=`rotate(-90deg)`;
                   }
              }
              
         });
});
choose.addEventListener('click',()=>{ 
     decision.addEventListener('change',()=>{
         if(decision.value.toString().length>0)
         {
               mainImg.src = URL.createObjectURL(decision.files[0]);
               mainImg.style.width="600px";
               mainImg.style.height="350px";
               left.classList.remove('disable');
               reset.classList.remove('disable');
               save.classList.remove('disable');
               right.classList.remove('active');
         }
     });
});
function removeAll(x)
{
    filters.forEach((ele)=>{
        ele.classList.remove(x);
  })
}
filters.forEach((ele)=>{
      ele.addEventListener('click',()=>{
            removeAll("selected");
            ele.classList.add('selected');
            if(ObjectValue[ele.innerHTML.toString()]===undefined)
            {
                  ObjectValue[ele.innerHTML.toString()]={
                     name:ele.innerHTML.toString(),
                     value:100
                  };
            }
            else 
            {
                 console.log(ObjectValue[ele.innerHTML.toString()]);
            }
      });
});
reset.addEventListener('click',()=>{
     resetAll();
     removeAll("selected");
});