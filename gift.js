const gifts= ['avocado','christmas','abracadabra'];

let Max=0;
let len = gifts.find((value)=>{
     if(value.length>Max) Max=value.length;
});
let strlen=Max+2;
const ans=[];
for(let i=0;i<gifts.length;i++)
{
    let str="";
    for(let j=0;j<strlen;j++) str+="*";
    console.log(str); str="";
    let half1 = Math.floor((strlen-gifts[i].length)/2);
    let half2 = (strlen-gifts[i].length)-half1;
    for(let j=0;j<half1;j++) str+="*";
    str+=gifts[i];
    for(let j=0;j<half2;j++) str+='*';
    console.log(str); str="";
    for(let j=0;j<strlen;j++) str+="*";
    console.log(str); str="";
}