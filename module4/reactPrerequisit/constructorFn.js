function car(name,color){
    this.name = name;
    this.color = color;
    this.test = function(){
        console.log(`I am driving${this.name}`)
    }
}

let car1 = new car("BMW","WHITE");
console.log(car1);

let car2 = new car("Mercedes","Red");
console.log(car2);