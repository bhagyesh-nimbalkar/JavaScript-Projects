async function Function(x){
     const promise = new Promise(function(resolve,reject)
     {
           if(x==0) resolve("hello World!");
           else reject("Error");
     });
     console.log(await promise);
}
Function(0);