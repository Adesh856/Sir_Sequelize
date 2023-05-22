// An example of getter and setter
var myClass = /** @class */ (function () {
    function myClass() {
    }
    Object.defineProperty(myClass.prototype, "x", {
        get: function () {
            return this._x;
        },
        // in this example we'll try to set _x to only numbers higher than 0
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return myClass;
}());
var test = new myClass();
test.x = 50; // You'll be getting an error
console.log(test.x);
