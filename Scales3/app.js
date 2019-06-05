var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.items = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        var index = this.items.length;
        this.items.push(item);
        console.log("сохранён объект"
            + " весом " + item.getScale() + " гр,"
            + " названием " + item.getName());
        return index;
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.items[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.items.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    //items:Array<Product>;
    function ScalesStorageEngineLocalStorage() {
        //let items = [];
        var items = [];
        var serialItems = JSON.stringify(items);
        localStorage.setItem("items", serialItems);
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var items = JSON.parse(localStorage.getItem("items"));
        items.push(item);
        var serialItems = JSON.stringify(items);
        localStorage.setItem("items", serialItems);
        console.log("сохранён объект"
            + " весом " + item.getScale() + " гр,"
            + " названием " + item.getName());
        return items.length;
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var items = JSON.parse(localStorage.getItem("items"));
        var item = new Product(items[index].scale, items[index].name);
        return item;
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var items = JSON.parse(localStorage.getItem("items"));
        return items.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var Scales = /** @class */ (function () {
    function Scales(_products) {
        this.products = _products;
    }
    Scales.prototype.add = function (_product) {
        this.products.addItem(_product);
    };
    Scales.prototype.getSumScale = function () {
        var _sumScale = 0;
        for (var i = 0; i < this.products.getCount(); i++) {
            _sumScale += this.products.getItem(i).getScale();
        }
        return _sumScale;
    };
    Scales.prototype.getNameList = function () {
        var _nameList = [];
        for (var i = 0; i < this.products.getCount(); i++) {
            _nameList.push(this.products.getItem(i).getName());
        }
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
localStorage.clear();
console.log("Работа с массивом:");
var product1 = new Product(350, "Яблоко");
var product2 = new Product(50, "Слива");
var product3 = new Product(250, "Помидор");
//Объект для хранения продуктов в массиве
var StorageEngineArray = new ScalesStorageEngineArray;
var ScaleInArray = new Scales(StorageEngineArray);
ScaleInArray.add(product1);
ScaleInArray.add(product2);
ScaleInArray.add(product3);
console.log("Суммарный вес продуктов в массиве: " + ScaleInArray.getSumScale() + ".");
console.log("Названия продуктов в массиве: " + ScaleInArray.getNameList() + ".");
console.log("\n" + "Работа с localStorage:");
var product4 = new Product(150, "Огурец");
var product5 = new Product(30, "Вишня");
var product6 = new Product(3000, "Арбуз");
//Объект для хранения продуктов localStorage
var StorageEngineLocalStorage = new ScalesStorageEngineLocalStorage;
var ScaleInLocalStorage = new Scales(StorageEngineLocalStorage);
ScaleInLocalStorage.add(product4);
ScaleInLocalStorage.add(product5);
ScaleInLocalStorage.add(product6);
console.log("Суммарный вес продуктов в массиве: " + ScaleInLocalStorage.getSumScale() + ".");
console.log("Названия продуктов в массиве: " + ScaleInLocalStorage.getNameList() + ".");
localStorage.clear();
//# sourceMappingURL=app.js.map