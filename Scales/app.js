var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (_product) {
        this.products.push(_product);
    };
    Scales.prototype.getSumScale = function () {
        var _sumScale = 0;
        this.products.forEach(function (p) {
            _sumScale += p.getScale();
        });
        return _sumScale;
    };
    Scales.prototype.getNameList = function () {
        var _nameList = [];
        this.products.forEach(function (p) {
            _nameList.push(p.name);
        });
        return _nameList;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_scale, _name) {
        this.scale = _scale;
        this.name = _name;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
//Apple
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_scale, _name) {
        return _super.call(this, _scale, _name) || this;
    }
    return Apple;
}(Product));
//Tomato
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_scale, _name) {
        return _super.call(this, _scale, _name) || this;
    }
    return Tomato;
}(Product));
var scales = new Scales();
var apple1 = new Apple(150, "Малиновка");
var apple2 = new Apple(280, "Антоновка");
var apple3 = new Apple(180, "Каштеля");
var tomato1 = new Tomato(90, "Черри");
var tomato2 = new Tomato(140, "Сливка");
var tomato3 = new Tomato(200, "Раджа");
scales.add(apple1);
scales.add(apple2);
scales.add(apple3);
scales.add(tomato1);
scales.add(tomato2);
scales.add(tomato3);
console.log("Суммарный вес продуктов: " + scales.getSumScale() + ".");
console.log("Названия продуктов: " + scales.getNameList() + ".");
//# sourceMappingURL=app.js.map