let screen = document.getElementById("display");
function check()
{
      let key = event.key;
      const keynum=["1","2","3","4","5","6","7","8","9","0"];
      const oper=["*","/","+","-","%"];
      for(let i=0;i<keynum.length;i++)
      {
           if(key==keynum[i])
           {
            digit(keynum[i]);
            return;
           }
      }
      for(let i=0;i<oper.length;i++)
      {
           if(key==oper[i])
           {
            op(oper[i])
            return;
           }
      }
      if(key==".")
      {
        dot(".");
        return;
      }
      if(key=="Enter")
      {
         final("Enter");
         return;
      }
      if(key=="Delete")
      {
         del("Delete");
      }
}
function precedence(x)
{
       if(x=='/') return 3;
       if(x=='*') return 3;
       if(x=='%') return 3;
       if(x=='+') return 2;
       if(x=='-') return 2;
}
function clr()
{
     screen.value="";
}
function del()
{
    let str = screen.value.toString();
    str = str.substr(0,str.length-1);
    screen.value=str;
}
function op(x)
{
    let str = screen.value.toString();
    if(str.length==0 && x.innerHTML!="-") return;

    if((str[str.length-1]=="+") || (str[str.length-1]=="-") || (str[str.length-1]=="/") || (str[str.length-1]=="%") || (str[str.length-1]=="*"))
    {
        if(str.length==1) return;
        str=str.substr(0,str.length-1);
        screen.value = str+x.innerHTML;
        return;
    }
    if(typeof(x)=="string")
    {
               screen.value=str+x;
               return;
    }
    screen.value = str+x.innerHTML;
}
function digit(x)
{
    let str = screen.value.toString();
    if(typeof(x)=="string")
    {
          screen.value=str+x;
          return;
    }
    if(str=='0' && ((x.innerHTML=="00") || (x.innerHTML=="0"))) return;
    if(x.innerHTML == "00")
    {
         if(str.length==0)
         {
             screen.value="0";
             return;
         }
    }
    screen.value=str+x.innerHTML;
}
function dot(x)
{
      let str = screen.value.toString();
      let temp="";
      for(let i=0;i<str.length;i++)
      {
          if((str[i]=='+') || (str[i]=='-') || (str[i]=='*') || (str[i]=='/') || (str[i]=='%'))
          {
                temp="";
          }
          else 
          {
             temp+=str[i];
          }
      }
      if(temp.includes(".")) return;
      if(temp.length == 0)
      {
          screen.value=str+"0.";
          return;
      }
      if(typeof(x)=="string")
      {
             screen.value = str+x;
             return;
      }
      screen.value = str+x.innerHTML;
}
function compute(a,b,x)
{
      switch(x)
      {
          case '+':
           return a+b;
          case '-':
           return a-b;
          case '/':
           return a/b;
          case '*':
           return a*b;
          case '%':
           return a%b;
      }
      return 0;
}
function final(x)
{
      let str = screen.value;
      if((str[str.length-1]=="+") || (str[str.length-1]=="-") || (str[str.length-1]=="/") || (str[str.length-1]=="%") || (str[str.length-1]=="*")) return;
      let temp="";
      const nums=[];
      const stack=[];
      let k=0;
      if(str[0]=='-')
      {
          temp+=str[0];
          k++;
          while((k<str.length) && ((str[k]!='+') && (str[k]!='-') && (str[k]!='*') && (str[k]!='/') && (str[k]!='%')))
          {
                temp+=str[k];
                k++;
          }
          nums.push(parseFloat(temp));
          temp="";
      }
      for(let i=k;i<str.length;i++)
      {
        if((str[i]=='+') || (str[i]=='-') || (str[i]=='*') || (str[i]=='/') || (str[i]=='%'))
        {
             if(temp.length>0) 
             {
                nums.push(parseFloat(temp));
                temp="";
             }
             if(stack.length==0)
             {
                  stack.push(str[i]);
             }
             else if(precedence(str[i])>stack[stack.length-1])
             {
                  stack.push(str[i]);
             }
             else 
             { 
                  while(stack.length!= 0 && precedence(stack[stack.length-1])>=precedence(str[i]))
                  {
                        nums.push(stack[stack.length-1]);
                        stack.pop();
                  }
                  stack.push(str[i]);
             }
        }
        else 
        {
              temp+=str[i];
        }
    }
    if(temp.length>0) 
    {
       nums.push(parseFloat(temp));
       temp="";
    }
    while(stack.length!=0)
    {
          nums.push(stack[stack.length-1]);
          stack.pop();
    }
    for(let i=0;i<nums.length;i++)
    {
         if((nums[i]==="+") || (nums[i]==="-") || (nums[i]==="*") || (nums[i]==="/") || (nums[i]==="%"))
         {
               let num1 = nums[i-2];
               let num2 = nums[i-1];
               let res = compute(num1,num2,nums[i]);

               nums.splice(i+1,0,res);
               nums.splice(i-2,3);
               i=0;
         }
    }
    console.log(nums);
    let p = nums[0].toString();
    for(let i=0;i<p.length;i++)
    {
          if(p[i]=='.')
          {
              if((p.length-i)>5)
              {
                  screen.value=nums[0].toFixed(5);
                  return;
              }
          }
    }
    screen.value=nums[0];
}