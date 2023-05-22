// class Animal {
//     private name: string;
//     protected age: number;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Parent = /** @class */ (function () {
    function Parent(publicProperty, protectedProperty) {
        this.publicProperty = publicProperty;
        this.protectedProperty = protectedProperty;
    }
    Parent.prototype.publicMethod = function () {
        console.log('This is a public method.');
    };
    Parent.prototype.protectedMethod = function () {
        console.log('This is a protected method.');
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(publicProperty, protectedProperty) {
        var _this = _super.call(this, publicProperty, protectedProperty) || this;
        console.log(_this.publicProperty); // Accessible, as it is public
        console.log(_this.protectedProperty); // Accessible, as it is protected
        _this.publicMethod(); // Accessible, as it is public
        _this.protectedMethod(); // Accessible, as it is protected
        return _this;
    }
    return Child;
}(Parent));
var Chid_obj = new Child("Adesh", "Tayde");
console.log(Chid_obj);
// Accessible, as it is public
