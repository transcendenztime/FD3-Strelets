class Scales {

    products:Array<IScalable> = [];

    constructor(){

    }

    add(_product:IScalable):void {
        this.products.push(_product);
    }

    getSumScale():number {
        
        let _sumScale:number = 0;
        this.products.forEach( p => { 
            _sumScale += p.getScale()
        });

        return _sumScale;

    }

    getNameList():Array<string> {
    
        let _nameList:Array<string> = [];
        this.products.forEach( p => {
            _nameList.push(p.getName());
        });
        return _nameList;
    }

}

interface IScalable {
 
    getScale():number;
    getName():string;
    
}

//Apple
class Apple implements IScalable {

    scale:number;
    name:string;

    constructor(_scale:number, _name:string) {
        this.scale = _scale;
        this.name = _name;
    }

    getScale():number {
        return this.scale;
    }

    getName():string {
        return this.name;
    }

}

//Apple
class Tomato implements IScalable {

    scale:number;
    name:string;

    constructor(_scale:number, _name:string) {
        this.scale = _scale;
        this.name = _name;
    }

    getScale():number {
        return this.scale;
    }

    getName():string {
        return this.name;
    }

}

let scales:Scales = new Scales();

let apple1:Apple = new Apple(150,"Малиновка");
let apple2:Apple = new Apple(280,"Антоновка");
let apple3:Apple = new Apple(180,"Каштеля");

let tomato1:Tomato = new Tomato(90,"Черри");
let tomato2:Tomato = new Tomato(140,"Сливка");
let tomato3:Tomato = new Tomato(200,"Раджа");

scales.add(apple1);
scales.add(apple2);
scales.add(apple3);
scales.add(tomato1);
scales.add(tomato2);
scales.add(tomato3);

console.log("Суммарный вес продуктов: " + scales.getSumScale() + ".");
console.log("Названия продуктов: " + scales.getNameList() + ".");