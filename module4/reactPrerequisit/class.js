class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    welcome(){
        console.log("hello" + this.name);
    }
}

class teacher extends person{
    constructor(name,age,number){
        super(name,age)
        this.number = number;
    }
}

let p1 = new person("shubham",22);
let t1 = new teacher("Chrollo",22,65)
console.log(t1)