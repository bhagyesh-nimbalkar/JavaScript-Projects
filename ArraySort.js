const arr=[100,32,1,60,23];
console.log(arr.sort(function(a,b){return a-b;}));

const obj = [
    {type:"ZMW",year:2016},
    {type:"Mercedes",year:2010},
    {type:"Toyota",year:2001}
];

console.log(obj.sort(function(a,b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();

    if(x<y) return -1;
    if(x>y) return 1;
    return 0;
}));