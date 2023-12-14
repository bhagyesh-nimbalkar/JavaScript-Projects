const chessboard=[
    [8,9,10,11,12,10,9,8],
    [7,7,7,7,7,7,7,7],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [6,6,6,6,6,6,6,6],
    [5,4,3,2,1,3,4,5]
]
let Spaces=[];
const Cell = document.querySelectorAll('.block');
let PlayerStatus=-1,prev;
function vanish()
{
    for(let t=0;t<Spaces.length;t++)
    { 
      let celN = (Spaces[t][0]*8)+(Spaces[t][1]);
      Cell[celN].classList.remove('selected');
      Cell[celN].classList.remove('danger');
    }
    Spaces=[];
}
function Move(i,j,num,pi,pj,p)
{
    console.log("yes");
    let ans = Spaces.filter((ele)=>{
         return ele[0]===i && ele[1]===j;
    });
    if(ans.length==0) return;
    console.log(ans);
    let celN = (ans[0][0]*8)+(ans[0][1]);
    console.log(celN);
    Cell[celN].innerHTML = "";
    Cell[prev].innerHTML = "";
    Cell[celN].innerHTML = `<i class="fa-solid fa-chess-pawn ${p}">`;
    chessboard[i][j]=num;
    chessboard[pi][pj]=0;
    Cell[prev].classList.remove('current');
    vanish();
    Spaces=[];
    console.log(chessboard);
}
Cell.forEach((ele,k)=>{
      ele.addEventListener('click',()=>{
          let i= parseInt(k/8);
          let j = parseInt(k%8);
          let cell  = chessboard[i][j];
          if(PlayerStatus!==-1)
          {    
                if(PlayerStatus==1)
                {
                      if(cell>6 && cell!=0)
                      {
                          Cell[prev].classList.remove('current');
                          vanish();
                          showOption(i,j,k);
                      }
                      else 
                      {
                         let pi = parseInt(prev/8);
                         let pj = parseInt(prev%8);
                          Move(i,j,chessboard[pi][pj],pi,pj,"p2");
                      }
                }
                else {
                    if(cell<=6 && cell!=0)
                    {
                        Cell[prev].classList.remove('current');
                        vanish();
                        showOption(i,j,k);
                    }
                    else 
                    {
                        let pi = parseInt(prev/8);
                        let pj = parseInt(prev%8);
                          Move(i,j,chessboard[pi][pj],pi,pj,"p1");
                    }
                }
          }
        else 
        {
            if(cell===0)
            {
               return;
            }
            if(cell<=6){
                 PlayerStatus=2;
            }
            else 
            {
                 PlayerStatus=1;
            }
            showOption(i,j,k);
        }
      });
});
function Pawn(i,j,oi,oj,arr)
{
       if(chessboard[oi][oj]=== 6 || chessboard[oi][oj]===7)
       { 
             if(i>=8 || i<0) return;
             if(j>=8 || j<0) return;
             if(chessboard[i][j]===0)
             {
                  arr.push([i,j,'B']);
                  return;
             }
             if(chessboard[i][j]<=chessboard[oi][oj])
             {
                  return;
             }
     }
}
function Pawn2(i,j,oi,oj,arr)
{
    if(i>=8 || i<0) return;
    if(j>=8 || j<0) return;
    if(chessboard[i][j]===0)
    {
         return;
    }
    if(chessboard[oi][oj]=== 6)
       { 
             if(chessboard[i][j]<=chessboard[oi][oj])
             {
                  return;
             }
             arr.push([i,j,'E']);
       }
       else 
       {
            if(chessboard[i][j]>=chessboard[oi][oj])
            {
                return;
            }
             arr.push([i,j,'E']);
       }
}
function showOption(i,j,k)
{
     prev=k;
     Cell[k].classList.add('current');
     if(chessboard[i][j]==6 || chessboard[i][j]==7)
     {
          if(PlayerStatus==1)
          {
            Pawn(i+1,j,i,j,Spaces);
          }
          else{
            Pawn(i-1,j,i,j,Spaces);
          }
          Pawn2(i+1,j+1,i,j,Spaces);
          Pawn2(i+1,j-1,i,j,Spaces);
          Pawn2(i-1,j-1,i,j,Spaces);
          Pawn2(i-1,j+1,i,j,Spaces);
          console.log(Spaces);
          for(let t=0;t<Spaces.length;t++)
          {
                let celN = (Spaces[t][0]*8)+(Spaces[t][1]);
                if(Spaces[t][2]==='B')
                {
                      Cell[celN].classList.add('selected');
                }
                else 
                {
                      Cell[celN].classList.add('danger');
                }
          }
     }
}