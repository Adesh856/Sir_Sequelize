var Singleton = /** @class */ (function () {
    function Singleton() {
        // Private constructor to prevent instantiation from outside the class
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
// Usage
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
console.log(instance1);
console.log(instance2);
console.log(instance1 === instance2); // Output: true
