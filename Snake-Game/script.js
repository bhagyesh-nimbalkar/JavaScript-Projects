const board = document.querySelector("#board");
const container = document.querySelector("#container");
const txt1 = document.querySelector("h1");
const txt2 = document.querySelector("h2");
const sc = document.querySelector(".score");
const hsc = document.querySelector(".h-score");
const stats = document.querySelector("#stats");
let snakeBody=[];
let foodX=15,foodY=15,snakeX=15,snakeY=15,i=0,j=0,IntervalId;
let snakeSpeed=150;
let score=0,highscore=localStorage.getItem("High");
function check()
{  
      for(let i=0;i<snakeBody.length;i++)
      { 
          if(snakeBody[i][0]===foodX) return true;
          if(snakeBody[i][1]===foodY) return true;
      }
      return false;
}
function updateLocation()
{
    while(check())
    {
      foodX = Math.floor(Math.random()*30)+1;
      foodY = Math.floor(Math.random()*30)+1;
    }
      board.innerHTML += `<div class='food' style='grid-area:${foodX}/${foodY}'></div>`;
}
snakeBody.push([snakeX,snakeY]);
show();
function show()
{
let text= "";
text += `<div class='food' style='grid-area:${foodX}/${foodY}'></div>`;
for(let k=0;k<snakeBody.length;k++)
{
      if(k==0)
      {
         if(i==1)
         {
            text+=  `<div style='display:flex;justify-content:center;align-items:center;grid-area:${snakeBody[k][0]}/${snakeBody[k][1]};transition:all 0.5s ease;'><i class='fa-solid fa-play fa-rotate-90 face'></i></div>`;
         }
         else if(i==-1)
         {
          text+=  `<div style='display:flex;justify-content:center;align-items:center;grid-area:${snakeBody[k][0]}/${snakeBody[k][1]};transition:all 0.5s ease;'><i class='fa-solid fa-play fa-rotate-270 face'></i></div>`;
         }
         else if(j==1)
         {
          text+=  `<div style='display:flex;justify-content:center;align-items:center;grid-area:${snakeBody[k][0]}/${snakeBody[k][1]};transition:all 0.5s ease;'><i class='fa-solid fa-play face'></i></div>`;
         }
         else if(j==-1)
         {
          text+=  `<div style='display:flex;justify-content:center;align-items:center;grid-area:${snakeBody[k][0]}/${snakeBody[k][1]};transition:all 0.5s ease;'><i class='fa-solid fa-play fa-rotate-180 face'></i></div>`;
         }
         else 
         {
          text+=  `<div style='display:flex;justify-content:center;align-items:center;grid-area:${snakeBody[k][0]}/${snakeBody[k][1]};transition:all 0.5s ease;'><i class='fa-solid fa-play face'></i></div>`;
         }
      }
      else 
      {
      text += `<div style='display:flex;justify-content:center;align-items:center;grid-area:${snakeBody[k][0]}/${snakeBody[k][1]};'><i style='border-radius:50%;transition:all 0.5s ease;' class='face fa-solid fa-circle'></i></div>`;
      }
}
board.innerHTML = text;
sc.innerHTML = "Score:"+score.toString();
hsc.innerHTML = "High Score:"+highscore.toString();
} 
function check2()
{
  for(let i=0;i<snakeBody.length;i++)
  { 
      if(snakeBody[i][0]===snakeBody[0][0] && snakeBody[i][1]===snakeBody[0][1] && i!=0) return true;
  }
  return false;
}
function changeDirection(e)
{
        if(e.key === "ArrowDown" && i!=-1)
        {
            i=1;
            j=0;
        }
        if(e.key==="ArrowUp" && i!=1)
        {
            i=-1;
            j=0;
        }
        if(e.key === "ArrowLeft" && j!=1)
        {
            i=0;
            j=-1;
        }
        if(e.key === "ArrowRight" && j!=-1)
        {
             i=0;
             j=1;
        }
}
function GameOver()
{
  clearInterval(IntervalId);
  if(score>highscore)
  {
       localStorage.setItem("High",score);
  }
  txt1.classList.add("active");
  container.classList.add("active");
  stats.classList.add("active");
  board.classList.add("active");
  txt2.classList.remove("active");
  setTimeout(()=>{
     location.reload();
  },2000);
  return;
}
let col = snakeBody[0][1];
let row=snakeBody[0][0];
function init()
{
     if(row<1 || row>30) {
      GameOver();
     }
     if(col<1 || col>30)
     {
         GameOver();
     }
     if(check2())
     {
        GameOver();
     }
     if(row===foodX && col===foodY)
     {
        snakeBody.splice(0,0,[row,col]);
        updateLocation();
        score++;
     }
     else
     {
      snakeBody.pop();
      snakeBody.splice(0,0,[row,col]);
     }
     show();
     row+=i;
     col+=j;
     snakeSpeed  -= Math.floor(snakeBody.length/5);
}
updateLocation();
IntervalId=setInterval(init,snakeSpeed);
window.addEventListener('keyup',changeDirection);