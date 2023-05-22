// An example of getter and setter
class myClass {
	private _x: number;
  
  	get x() {
    	return this._x;
    }
  
 	// in this example we'll try to set _x to only numbers higher than 0
  	set x(value) {
      	this._x = value;
    }
}
let test = new myClass();
test.x = 50; // You'll be getting an error
console.log(test.x)