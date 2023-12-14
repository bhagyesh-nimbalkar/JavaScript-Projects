const arr = [0,0,0,0,0,0,0,0,0];
const btns = document.querySelectorAll(".btn");
const modal = document.querySelector("#modal");
const arena = document.querySelector("#arena");
const tile = document.querySelectorAll(".box");
const tab = document.querySelectorAll(".c_btn");
const title = document.querySelector("#upper h1");
const reset = document.querySelector("#res");
const container = document.querySelector("#container");

let Player = "";
let Bot="";
let playStatus="";
btns.forEach((ele,index)=>{
     ele.addEventListener('click',()=>{
         if(index===0) 
         {
            Player="X";
            Bot="O";
         }
         else 
         { 
            Player="O";
            Bot="X";
         }
         playStatus=Player;
         modal.classList.remove("active");
         arena.classList.add("active");
         check();
     });
});

function check()
{
      if(playStatus==="X")
      {
           tab[0].classList.add("active");
           tab[1].classList.remove("active");
      }
      else 
      {
          tab[0].classList.remove("active");
          tab[1].classList.add("active");
      }
      if(playStatus === Player) 
      {
          title.innerHTML = "Your's Turn";
      }
      else 
      {
          title.innerHTML = "Computer's Turn";
      }
}
function endGame(x)
{
      if((x===Player) || (x===Bot))
      {
           reset.firstElementChild.innerHTML = `Player ${x} has Won.!`;
      }
      else 
      {
          reset.firstElementChild.innerHTML = "Match has been drawn.!";
      }
      reset.classList.add("active");
      arena.classList.remove("active");
      return;
}
function Result(x)
{
      for(let i=1;i<x.length;i++)
      {
         if((x[i]!==x[i-1]) || (x[i]===0)) return false;
      }
      return true;
}
function simulate(temp)
{
    if(Result(temp)===true)
    {
        endGame(temp[0]);
        return true;
    } 
    temp.splice(0,temp.length);
}
function isValid()
{
        const temp = [];
        for(let i=0;i<3;i++) temp.push(arr[i]);
        if(simulate(temp)===true) return;
        for(let i=3;i<6;i++) temp.push(arr[i]);
        if(simulate(temp)===true) return;
        for(let i=6;i<9;i++) temp.push(arr[i]);
        if(simulate(temp)===true) return;
        
        temp.push(arr[0]);
        temp.push(arr[3]);
        temp.push(arr[6]);
        if(simulate(temp)===true) return;

        temp.push(arr[1]);
        temp.push(arr[4]);
        temp.push(arr[7]);
        if(simulate(temp)===true) return;

        temp.push(arr[2]);
        temp.push(arr[5]);
        temp.push(arr[8]);
        if(simulate(temp)===true) return;

        temp.push(arr[0]);
        temp.push(arr[4]);
        temp.push(arr[8]);
        if(simulate(temp)===true) return;

        temp.push(arr[2]);
        temp.push(arr[4]);
        temp.push(arr[6]);
        if(simulate(temp)===true) return;
        let flag=0;
        for(let i=0;i<arr.length;i++)
        {
              if(arr[i]===0)
              {
                    flag=1;
                    break;
              }
        }
        if(flag==0)
        {
              endGame(-1);
              return;
        }
}
function count(temp,x)
{
      let p_count=0,b_count=0;
      for(let i=0;i<temp.length;i++)
      {
          if(arr[temp[i]]===x) p_count++;
          else if(arr[temp[i]]===Bot) b_count++;
      }
      if(p_count==2 && b_count==0) 
       {
            for(let i=0;i<temp.length;i++)
            {
                  if(arr[temp[i]]===0) return i;
            }
       }
      return -1;
}
function again(temp,rIndex)
{
    if(Bot==="X")  
    {
         tile[temp[rIndex]].firstElementChild.classList.remove("fa-regualar");
         tile[temp[rIndex]].firstElementChild.classList.remove("fa-circle");
         tile[temp[rIndex]].firstElementChild.classList.add("fa-solid");
         tile[temp[rIndex]].firstElementChild.classList.add("fa-xmark");
    }
    else 
    {
         tile[temp[rIndex]].firstElementChild.classList.remove("fa-solid");
         tile[temp[rIndex]].firstElementChild.classList.remove("fa-xmark");
         tile[temp[rIndex]].firstElementChild.classList.add("fa-regular");
         tile[temp[rIndex]].firstElementChild.classList.add("fa-circle");
    }
    setTimeout(()=>{
     playStatus = Player;
     container.classList.remove("block");
     isValid();
     check();
    },200);
}
function runBot(stat)
{
        const temp = [];
        let x=0;
        for(let i=0;i<3;i++) temp.push(i);
        x=count(temp,stat);
        if(x!==-1)
        {
              arr[temp[x]]=Bot;
              again(temp,x);
              return true;
        } 
        temp.splice(0,temp.length);
        for(let i=3;i<6;i++) temp.push(i);
        x=count(temp,stat);
        if(x!==-1)
        {
              arr[temp[x]]=Bot;
              again(temp,x);
              return true;
        } 
        temp.splice(0,temp.length);
        for(let i=6;i<9;i++) temp.push(i);
        x=count(temp,stat);
        if(x!==-1)
        {
              arr[temp[x]]=Bot;
              again(temp,x);
              return true;
        } 
        temp.splice(0,temp.length);
        temp.push(arr[0]);
        temp.push(arr[3]);
        temp.push(arr[6]);
        x=count(temp,stat);
        if(x!==-1)
        {
              arr[temp[x]]=Bot;
              again(temp,x);
              return true;
        } 
        temp.splice(0,temp.length);

        temp.push(1);
        temp.push(4);
        temp.push(7);
        x=count(temp,stat);
        if(x!==-1)
        {
              arr[temp[x]]=Bot;
              again(temp,x);
              return true;
        } 
        temp.splice(0,temp.length);

        temp.push(2);
        temp.push(5);
        temp.push(8);
        x=count(temp,stat);
        if(x!==-1)
        {
              arr[temp[x]]=Bot;
              again(temp,x);
              return true;
        } 
        temp.splice(0,temp.length);

        temp.push(0);
        temp.push(4);
        temp.push(8);
        x=count(temp,stat);
        if(x!==-1)
        {
              arr[temp[x]]=Bot;
              again(temp,x);
              return true;
        } 
        temp.splice(0,temp.length);
        temp.push(2);
        temp.push(4);
        temp.push(6);
        x=count(temp,stat);
        if(x!==-1)
        {
              arr[temp[x]]=Bot;
              again(temp,x);
              return true;
        } 
        temp.splice(0,temp.length);
}
tile.forEach((ele,index)=>{
        ele.addEventListener('click',()=>{ 
             if(arr[index]!=0)
             {
                  ele.classList.add("error");
                  setTimeout(()=>{
                     ele.classList.remove("error");
                  },300);
                  return;
             }
             arr[index]=Player;
             if(Player==="X") 
             {
                ele.firstElementChild.classList.remove("fa-regualar");
                ele.firstElementChild.classList.remove("fa-circle");
                ele.firstElementChild.classList.add("fa-solid");
                ele.firstElementChild.classList.add("fa-xmark");
            }
             else 
             {
                ele.firstElementChild.classList.remove("fa-solid");
                ele.firstElementChild.classList.remove("fa-xmark");
                ele.firstElementChild.classList.add("fa-regular");
                ele.firstElementChild.classList.add("fa-circle");
             }
             setTimeout(()=>{
                playStatus=Bot;
                container.classList.add("block");
                isValid();
                check();
             },200);
             setTimeout(()=>{
                  let res = runBot(Bot);
                  if(res===true) return;
                 res =  runBot(Player);
                 if(res===true) return;
                 const temp=[];
            for(let i=0;i<arr.length;i++)
            {
                   if(arr[i]===0) temp.push(i);
            }
            let rIndex = Math.floor(Math.random()*temp.length);
            arr[temp[rIndex]]=Bot;
            again(temp,rIndex);
            return;
      },Math.floor(Math.random()*2000));
             
        });
});
reset.lastElementChild.addEventListener("click",()=>{
      location.reload();
});