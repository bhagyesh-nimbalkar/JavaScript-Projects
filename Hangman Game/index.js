const q = ["There’s only one word in the dictionary that’s spelled wrong. What is it","I have a tail and a head, but no body. What am I","The English alphabet goes from A to Z but my name goes from Z to A. What am I","Remove my skin, and I won’t cry, but you might!","What has legs but cannot walk?"," If you drop me I’m sure to crack, but give me a smile and I’ll always smile back. What am I?","What can fill a room but takes up no space?","What has words, but never speaks?","I am not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I?","What has many teeth, but can’t bite?","When I’m ripe, I’m green, when you eat me, I’m red, and when you spit me out, I’m black. What am I?"];
const a = ["WRONG","COIN","ZEBRA","ONION","CHAIR","MIRROR","LIGHT","BOOK","FIRE","COMB","WATERMELON"];
const m=[];
let length=11;
let w = document.getElementById("question");
let b = document.getElementById("write");
function rndNumber(min,max)
{
      return Math.floor(Math.random() * (max-min+1)+min);
}
let index = rndNumber(0,length-1);
w.innerHTML ="Q. "+q[index];
let ansstr = a[index];
let str ="";
for(let i=0;i<ansstr.length;i++)
{
      str+=`<span class="char"></span>`;
}
b.innerHTML = str;
var mistake=0;
const boxfill=[];
let face = document.getElementById("face");
let torso = document.getElementById("torso");
let hand1 = document.getElementById("hand1");
let hand2 = document.getElementById("hand2");
let leg1 = document.getElementById("leg1");
let leg2 = document.getElementById("leg2");
let chance = document.getElementById("chance");
let resimg = document.getElementById("resimg");
let reshead = document.getElementById("reshead");
let resmsg = document.getElementById("resmsg");
let modl = document.getElementById("model");
function check()
{
      if(mistake>=6)
      {
        resimg.src="https://usagif.com/wp-content/uploads/2022/4hv9xm/crying-emoji-16.gif";
        reshead.innerHTML = "Try Again";
        resmsg.innerHTML = "Don't Lose Hope. Better Luck next time!";
        modl.style.visibility="visible";
      }
      if(boxfill.join("").toString()==ansstr)
      {
           resimg.src="https://media.tenor.com/OWvn6v0O3ssAAAAi/smile-sarcastic.gif";
           reshead.innerHTML = "Congrats!";
           resmsg.innerHTML = "You Played well!";
           modl.style.visibility="visible";
      }
      switch(mistake)
      {
           case 1:
            {
                  face.style.display="block";
                  chance.innerHTML = "1/6";
                  break; 
            }
           case 2:
            {
                  torso.style.display="block";
                  chance.innerHTML = "2/6";
                  break;
            }
           case 3:
            {
                   hand1.style.display="block";
                   chance.innerHTML = "3/6";
                   break;
            }
           case 4:
            {
                   hand2.style.display="block";
                   chance.innerHTML = "4/6";
                   break;
            }
           case 5:
             {
                  leg1.style.display="block";
                  chance.innerHTML = "5/6";
                  break;
             }
           case 6:{ 
                  leg2.style.display="block";
                  chance.innerHTML = "6/6";
                  break;
           }

      }
}
function inp(a)
{
     if(m.includes(a))
       return;
     
     m.push(a);
     const indarr=[];
     for(let i=0;i<ansstr.length;i++)
     {
          if(ansstr[i]==a)
          {
              indarr.push(i);
          }
     }
     if(indarr.length==0)
     {
          mistake++; 
     }
     else{
            
            let take = document.getElementsByClassName("char");
            let k=0;
            for(let i=0;i<take.length;i++)
            {
                  if(i==indarr[k])
                  {
                       take[i].innerHTML = a;
                       k++;
                       boxfill.splice(i,0,a);
                    
                  }   
            }
        }
     check();
}
function clear()
{
       modl.style.visibility="hidden";
}