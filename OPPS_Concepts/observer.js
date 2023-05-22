var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.attach = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.detach = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    };
    Subject.prototype.notify = function (data) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(data);
        }
    };
    return Subject;
}());
var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver() {
    }
    ConcreteObserver.prototype.update = function (data) {
        console.log("Received update with data: ".concat(data));
    };
    return ConcreteObserver;
}());
// Usage
var subject = new Subject();
var observer1 = new ConcreteObserver();
var observer2 = new ConcreteObserver();
subject.attach(observer1);
subject.attach(observer2);
subject.notify("Hello, observers!");
