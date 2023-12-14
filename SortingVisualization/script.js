const container = document.querySelector('#container');
const blocks = document.querySelectorAll('.block');
const rad = document.querySelector('.btn1');
const start = document.querySelector('.btn2');
const lst = document.querySelector('#lst');
rad.addEventListener('click',()=>{
      container.innerHTML="";
      RandomGenerate();
});
start.addEventListener('click',()=>{
   if(lst.value === "Bubble Sort")
   {
        BubbleSort();
   }
   else if(lst.value === "Selection Sort")
   {
        SelectionSort();
   }
   else {
         quickSort(0,arr.length-1);
         console.log(arr);
   }
   rad.classList.add('disable');
   start.classList.add('disable');
   const timeoutId = setTimeout(()=>{
       rad.classList.remove('disable');
       start.classList.remove('disable');
       clearTimeout(timeoutId);
   },23000);
});
const arr=[];
function quickSort(l,h)
{
        if(l<h)
        {
            pivot=arr[l];
            i=l-1;
            j=h+1;
            let p = -1;
            const IId = setInterval(()=>{
                   i++;
                   ChangeColor('skyblue','orangered',[i]);
                   if(i>=j){
                        p=j;
                        clearInterval(IId);
                   }
                   if(arr[i]>pivot)
                   {
                        clearInterval(IId); 
                   }
            },100);
            const IId2 = setInterval(()=>{
                  j--;
                  ChangeColor('skyblue','orangered',[j]);
                  if(i>=j){
                        p=j;
                        clearInterval(IId2);
                   }
                   if(arr[i]<pivot)
                   {
                        clearInterval(IId2); 
                   }

            },100);
              quickSort(l,p);
              quickSort(p+1,h);
        }
}
function SelectionSort()
{
      let i=0,j=0,index=0,Max=500;
      for(let k=0;k<15;k++){
              if(arr[k]<Max)
              {
                    Max=arr[k];
                    index=k;
              }
      }
      let big = setInterval(()=>{
            let small = setInterval(()=>{
                  ChangeColor('skyblue','orangered',[i,j]);
                  if(arr[j]<Max)
                  {
                      Max= arr[j];
                      index=j;
                  }
                  j++;
                  if(j>=15)
                  {
                   clearInterval(small);
                   j=i;
                  }
            },100);
            let temp = arr[i];
            arr[i]=arr[index];
            arr[index]=temp;
            ChangeColor('skyblue','green',[i,index]);
            index=0;
            Max=500;
            i++;
            j=i;
            if(i>=14) 
            {
                clearInterval(big);
            }
      },1500);
}
function BubbleSort()
{
      let i=0,j=0;
      let big = setInterval(()=>{
            let small = setInterval(()=>{
                  ChangeColor('skyblue','orangered',[i,j]);
                  if(arr[i]<=arr[j])
                  {
                      let temp = arr[i];
                      arr[i]=arr[j];
                      arr[j]=temp;
                      ChangeColor('skyblue','green',[i,j]);
                  }
                  j++;
                  if(j>=15)
                  {
                   clearInterval(small);
                   j=0;
                  }
            },100);
            i++;
            if(i>=14) 
            {
                clearInterval(big);
            }
      },1500);
}
function ChangeColor(prev,newColor,index)
{
       container.innerHTML="";
       let str="";
       for(let i=0;i<15;i++)
       {
           if(index.includes(i))
           {
                str+=`<div class='block' style='grid-area:1/${i+1};background-color:${newColor};
                height:${arr[i]}px;'></div>`;
           }
           else 
           {
                str+=`<div class='block' style='grid-area:1/${i+1};background-color:${prev};
                height:${arr[i]}px;'></div>`;
           }
       }
       container.innerHTML=str;
}
function createElement(color,h,index)
{
    let str="";
     str=`<div class='block' style='grid-area:1/${index+1};background-color:${color};
      height:${h}px;'></div>`;
     container.innerHTML+=str;
}
function NumGenerator(min,max)
{
        return Math.floor(Math.random()*(max-min))+min;
}
function RandomGenerate()
{
       for(let i=0;i<15;i++)
       {
           let x = NumGenerator(50,350);
           arr[i]=x;
           createElement('skyblue',x,i);
       }
       console.log(arr);
}
RandomGenerate();