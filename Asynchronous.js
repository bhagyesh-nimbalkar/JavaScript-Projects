// Asynchronous Program

// This function calls resolve or reject function on the status of the job.
function job(){
     let status = parseInt(Math.random()*5);
     console.log(status);
     return new Promise(function(resolve,reject){
           if(status%2==0) resolve("Job Done.");
           else reject("Job Fail!");
     });
}


const promise = job();

// This is where the resolve and rejects both functions are written.
promise.then(
    function(resolve){console.log(resolve);},
    function(reject){console.log(reject);}
);