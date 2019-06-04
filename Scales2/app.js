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
            _nameList.push(p.getName());
        });
        return _nameList;
    };
    return Scales;
}());
//Apple
var Apple = /** @class */ (function () {
    function Apple(_scale, _name) {
        this.scale = _scale;
        this.name = _name;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
//Apple
var Tomato = /** @class */ (function () {
    function Tomato(_scale, _name) {
        this.scale = _scale;
        this.name = _name;
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
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