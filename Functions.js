/*const obj = 
{
      first:"ABC",
      age:20,
      last:"XYZ",
      fullName:function(){
         return this.first+" "+this.last;
      } 
      get fullName(){
         return this.first+" "+this.last;
      } 
}
obj.fullName = function(){
     return this.first+" "+this.last;
}
console.log(obj.fullName()); */


// JS call() method
"use strict";
const person = {
      firstName:"John",
      lastName:"Doe",
      fullName: function(){
         return this.firstName+" "+this.lastName;
      }
}
const Father = {
        firstName:"ABC",
        lastName:"XYZ"
}
console.log(person.fullName());
console.log(person.fullName.call(Father));


const Add = {
       show:function(x,y){
             return `Addition of ${this.a} and ${this.b} = `+(this.a+this.b)+` and the square of given numbers are:\n ${x}*${x} = `+x*x+` and ${y}*${y} = `+y*y;
       }
}
const Numbers= {
      a:10,
      b:20
}

console.log(Add.show.call(Numbers,40,9));
console.log(Math.max.apply(null,[1,2,3]));