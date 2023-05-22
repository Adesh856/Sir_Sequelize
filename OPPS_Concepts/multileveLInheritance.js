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
var car = /** @class */ (function () {
    function car(name, brand) {
        this.name = name;
        this.brand = brand;
    }
    car.prototype.showDetails = function () {
        console.log("".concat(this.name, " ").concat(this.brand));
    };
    return car;
}());
var SUV1 = /** @class */ (function (_super) {
    __extends(SUV1, _super);
    function SUV1(name, brand) {
        var _this = _super.call(this, name, brand) || this;
        _this.buyer = 'swanand';
        return _this;
    }
    return SUV1;
}(car));
var newSUV = /** @class */ (function (_super) {
    __extends(newSUV, _super);
    function newSUV(name, brand) {
        var _this = _super.call(this, name, brand) || this;
        _this.type = 'mini-suv';
        return _this;
    }
    return newSUV;
}(SUV1));
//var car1 = new SUV('duster', 'renault');
//console.log(car1);
var car2 = new newSUV('duster', 'renault');
console.log(car2);
