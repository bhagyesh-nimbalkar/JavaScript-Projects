class Person
{
      constructor(firstname,lastname)
      {
           this.first=firstname;
           this.second = lastname;
      }
      fullName()
      {
          return this.first+" "+this.second;
      }
}
class Human extends Person
{
     constructor(firstname,lastname,age)
     {
            super(firstname,lastname);
            this.age=age;
     }
     info(){
          return  this.fullName()+" "+this.age;
     }
}
const  Son = new Person("ABC","XYZ");
Person.prototype.nationality="Indian";
console.log(Son.nationality);
console.log(Son.fullName());
const p = new Human("bhagyesh","Nimbalkar",22);
console.log(p.info());
console.log(p.fullName());

// Static Methods 

class Car {
       constructor(name)
       {
            this.name=name;
       }
       static hello(x){
            return "hello "+x.name;
       }

}
const obj = new Car("BMW");
console.log(Car.hello(obj));
