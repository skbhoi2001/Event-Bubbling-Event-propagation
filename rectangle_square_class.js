class Rectangle{
    #l;
    #b;
    constructor(l,b){
        this.#l=l;
        this.#b=b;
    }
    area(){
        return this.#l * this.#b
    }
}

const res = new Rectangle(2,4)
console.log(res.area())


class Square extends Rectangle{
    constructor(l){
        super(l,l)
    }
}

const area = new Square(5)
console.log(area.area())