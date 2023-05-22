class Car {
  name: string;
  brand: string;

  constructor(name: string, brand: string) {
    this.name = name;
    this.brand = brand;
  }

  showDetails() {
    console.log(`${this.name} ${this.brand}`);
  }
}

class SUV1 extends Car {
  buyer: string;

  constructor(name: string, brand: string) {
    super(name, brand);
    this.buyer = 'swanand';
  }
}

class NewSUV extends SUV1 {
  type: string;

  constructor(name: string, brand: string) {
    super(name, brand);
    this.type = 'mini-suv';
    this.showDetails(); // Call the showDetails() method here
  }
}

var car2 = new NewSUV('duster', 'renault');
console.log(car2);
