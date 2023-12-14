const x = document.querySelector("#modal");
x.scrollTo(0,10);
const left = document.querySelector("#prev");
const right = document.querySelector("#next");
function check()
{
if(x.scrollLeft==0)
{
     left.style.display="none";
}
else 
  left.style.display="flex";

if(x.scrollLeft>=3000)
{
     right.style.display="none";
}
else 
  right.style.display="flex";

console.log(x.scrollLeft,x.scrollTop);
}
function Left(){
       x.scrollLeft-=1000;
}
function Right(){
      x.scrollLeft+=1000;
}
