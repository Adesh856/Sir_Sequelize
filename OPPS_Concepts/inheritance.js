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
var Vehical = /** @class */ (function () {
    function Vehical(name, Vehical_type, price) {
        this.name = name;
        this.price = price;
        this.Vehical_type = Vehical_type;
    }
    Vehical.prototype.keyowner = function () {
        return this.name;
    };
    return Vehical;
}());
var Ducati = /** @class */ (function (_super) {
    __extends(Ducati, _super);
    function Ducati(name, Vehical_type, price, brand, year) {
        var _this = _super.call(this, name, Vehical_type, price) || this;
        _this.brand = brand;
        _this.year = year;
        return _this;
    }
    Ducati.prototype.startengine = function () {
        return "hrroomm";
    };
    return Ducati;
}(Vehical));
var NewCar = new Ducati("Adesh Tayde", "Bike", 1458621, "Ducati", 2023);
console.log(NewCar.keyowner());
