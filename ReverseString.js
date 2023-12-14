const str = "hello";
const Reverse = (s,i)=>{
       if(i===s.length) return;
       else Reverse(s,i+1);

       console.log(s[i],' '); 
}
Reverse(str,0);