// class Animal {
//     private name: string;
//     protected age: number;
  
//     constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//     }
  
//     private getName(): string {
//       return this.name;
//     }
  
//     protected getAge(): number {
//       return this.age;
//     }
//   }
  
//   class Cat extends Animal {
//     constructor(name: string, age: number) {
//       super(name, age);
//     }
  
//     public getInfo(): string {
//       // Accessing protected property and method from the parent class
//       return `The cat's name is ${this.name} and it is ${this.age} years old.`;
//     }
//   }
  
//   const myCat = new Cat('Whiskers', 3);
//   console.log(myCat.getInfo()); // Output: The cat's name is Whiskers and it is 3 years old.
class Parent {
    public publicProperty: string;
    protected protectedProperty: string;
  constructor( publicProperty: string,
 protectedProperty: string){
    this.publicProperty=publicProperty;
    this.protectedProperty=protectedProperty
 }
    public publicMethod() {
      console.log('This is a public method.');
    }
  
    protected protectedMethod() {
      console.log('This is a protected method.');
    }
  }
  
  class Child extends Parent {
    constructor(publicProperty: string,
        protectedProperty: string) {
      super(publicProperty,protectedProperty);
      console.log(this.publicProperty); // Accessible, as it is public
      console.log(this.protectedProperty); // Accessible, as it is protected
      this.publicMethod(); // Accessible, as it is public
      this.protectedMethod(); // Accessible, as it is protected
    }
  }
 const Chid_obj = new Child("Adesh","Tayde")
 console.log(Chid_obj) 
 
  // Accessible, as it is public
  