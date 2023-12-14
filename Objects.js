const myObj = 
{
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ],
   together: function()
   {
       return this.name+" "+this.age;
   }
}
  //delete myObj.cars;
  /* console.log(myObj.together.length);
   console.log(myObj);
  for(let i in myObj.cars)
  {
         console.log(myObj.cars[i].name);
         Object.values(myObj.cars[i]);
  }  */

 /* const person = {
       name:"abc",
       age:23,
       mar:0,
       get page(){
          return this.age;
       },
       set pname(x){
            this.name=x.toString().toUpperCase();
       }
  };
  console.log(person);
  person.pname="Bhagyesh";
  console.log(person.page);
  console.log(person.name);

  Object.defineProperty(person,"marks",{
     set: function(val){this.mar=val;}
  });
 person.marks=20;
 console.log(person.mar); */

 function Person(f,l,m,a)
 {
      this.firstName=f;
      this.lastName=l;
      this.marks=m;
      this.age=a;
}

const obj = new Person("abc","xyz",20,10);
const obj2 = new Person("lmn","pqr",23,53);

Object.defineProperty(obj,"fullName",{
      get: function(){return this.firstName+" "+this.lastName}
}); 

obj2.nationality="Indian";
console.log(obj2.nationality);
console.log(obj2.firstName);
console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj.marks);
console.log(obj.age);
console.log(obj.fullName);