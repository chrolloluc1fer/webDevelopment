// //Generator function

// function* abc(){
//     console.log(1);
//     console.log(2);
//     yield 1
//     console.log("Bye")
//     console.log("Hi again")
//     yield 2;
// }

// let a = abc();
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());

// function* reachInfinite(){
//     let i = 0;
//     while(true){
//         yield i;
//         i++;    
//     }
    
// }

// let num =  reachInfinite()
// console.log(num.next().value);
// console.log(num.next().value);

// async function inc(x) {
//     x = x + await 1
//     return x;
// }

// async function increment(x){
//     x = x + 1
//     return x
// }

// inc(1).then(function(x){
//     console.log(increment(x))
// })

// async function f1() {
//     console.log(1);
//   }
  
//   async function f1() {
//     console.log(2);
//   }
  
//   console.log(3);
//   f1();
//   console.log(1);


let userObj = {
    private:{
        dob:"12/3/4"
    },
    public:{
        name:"Anas"
    }
}


let handler = {
    get:function(target, prop){
        if(prop == "private")
        return  "Access not granted"
        else
        return target.prop
    }
}

let p =  new Proxy(userObj,handler)  // proxy object

console.log(p.private)