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
var Abs = /** @class */ (function () {
    function Abs() {
    }
    return Abs;
}());
var Abstrac = /** @class */ (function (_super) {
    __extends(Abstrac, _super);
    function Abstrac(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Abstrac.prototype.main = function () {
        console.log("Hello, ".concat(this.name));
    };
    return Abstrac;
}(Abs));
var check = new Abstrac("Adesh");
check.main();
