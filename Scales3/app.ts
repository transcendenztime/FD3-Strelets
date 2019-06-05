interface IStorageEngine {
    
    addItem(item:Product):number;
    getItem(index:number):Product;
    getCount():number;

}

class ScalesStorageEngineArray implements IStorageEngine {

    items:Array<Product>;// = [];

    constructor() {
        this.items=[];
    }

    addItem(item:Product):number {
        let index:number=this.items.length;
        this.items.push(item);
        console.log("сохранён объект"
            +" весом "+item.getScale()+" гр,"
            +" названием "+item.getName()
        );
        return index;
    }

    getItem(index:number):Product {
        return this.items[index];
    }

    getCount():number {
        return this.items.length;
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {

    //items:Array<Product>;

    constructor() {
        //let items = [];
        let items:Array<Product> = [];
        let serialItems = JSON.stringify(items);
        localStorage.setItem("items", serialItems);
    }
    
    addItem(item:Product):number {
        let items:Array<Product> = JSON.parse(localStorage.getItem("items"));
        items.push(item);
        let serialItems = JSON.stringify(items);
        localStorage.setItem("items", serialItems);

        console.log("сохранён объект"
            +" весом "+item.getScale()+" гр,"
            +" названием "+item.getName()
        );

        return items.length;
    }

    getItem(index:number):Product {
        let items = JSON.parse(localStorage.getItem("items"));
        let item:Product = new Product(items[index].scale,items[index].name); 
        return item;
    }
    

    getCount():number {
        let items = JSON.parse(localStorage.getItem("items"));
        return items.length;
    }
    
}

class Scales<StorageEngine extends IStorageEngine> {

    products:StorageEngine;

    constructor(_products:StorageEngine){
        this.products = _products;
    }

    add(_product:Product):void {
        this.products.addItem(_product);
    }

    getSumScale():number {
        
        let _sumScale:number = 0;
        for(let i=0;i<this.products.getCount();i++){
            _sumScale += this.products.getItem(i).getScale();
        }

        return _sumScale;

    }

    getNameList():Array<string> {
    
        let _nameList:Array<string> = [];
        for(let i=0;i<this.products.getCount();i++){
            _nameList.push(this.products.getItem(i).getName());
        }

        return _nameList;
    }

}

class Product {

    private scale:number;
    private name:string;

    constructor(_scale:number, _name:string) {
        this.scale = _scale;
        this.name = _name;
    }

    public getScale():number {
        return this.scale;
    }

    public getName():string {
        return this.name;
    }

}

localStorage.clear();

console.log("Работа с массивом:");

let product1:Product = new Product(350,"Яблоко");
let product2:Product = new Product(50,"Слива");
let product3:Product = new Product(250,"Помидор");

//Объект для хранения продуктов в массиве
let StorageEngineArray = new ScalesStorageEngineArray;
let ScaleInArray = new Scales<ScalesStorageEngineArray>(StorageEngineArray);

ScaleInArray.add(product1);
ScaleInArray.add(product2);
ScaleInArray.add(product3);
console.log("Суммарный вес продуктов в массиве: " + ScaleInArray.getSumScale() + ".");
console.log("Названия продуктов в массиве: " + ScaleInArray.getNameList() + ".");

console.log("\n"+"Работа с localStorage:");

let product4:Product = new Product(150,"Огурец");
let product5:Product = new Product(30,"Вишня");
let product6:Product = new Product(3000,"Арбуз");
//Объект для хранения продуктов localStorage
let StorageEngineLocalStorage = new ScalesStorageEngineLocalStorage;
let ScaleInLocalStorage = new Scales<ScalesStorageEngineLocalStorage>(StorageEngineLocalStorage);

ScaleInLocalStorage.add(product4);
ScaleInLocalStorage.add(product5);
ScaleInLocalStorage.add(product6);
console.log("Суммарный вес продуктов в массиве: " + ScaleInLocalStorage.getSumScale() + ".");
console.log("Названия продуктов в массиве: " + ScaleInLocalStorage.getNameList() + ".");

localStorage.clear();