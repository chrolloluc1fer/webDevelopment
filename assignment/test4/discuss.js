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


// let userObj = {
//     private:{
//         dob:"12/3/4"
//     },
//     public:{
//         name:"Anas"
//     }
// }


// let handler = {
//     get:function(target, prop){
//         if(prop == "private")
//         return  "Access not granted"
//         else
//         return target.prop
//     }
// }

// let p =  new Proxy(userObj,handler)  // proxy object

// console.log(p.private)


// let obj = {
//     a: {
//         b: { e: { string: "string" } },
//         c: { boolean: true },
//     },
//     d: {
//         f: {
//             g: {
//                 h: { null: null },
//                 i: { undefined: "defined" },
//             },
//         },  
//     },
// };

// let {
//     a: {
//         b: {
//             e: { string },
//         },
//     },
// } = obj;

// let {
//     d: {
//         f: {
//             g: {
//                 i: { undefined },
//             },
//         },
//     },
// } = obj;

// console.log(`${string}-${undefined}`);

// let a = {
//     a:Symbol()
    
// }

// a[ a] = 2
// a[ Symbol()] = 3;

// console.log(a[Symbol()]);


// let a = Symbol()
// console.log(a);

// let b = Symbol("Shubham")
// console.log(b.description)

// let c = Symbol("Js")
// console.log( b == c)
// b == c




// let a = [1, 2, 2, 3, 4, 5, 5];

// let s = new Set([...a]);

// console.log(s);

// for (let i = 1; i < 5; i++) {
//   s.delete(i);
// }

// console.log(s);

// s.clear();

// for (let i = 1; i < 5; i++) {
//   s.add(i);
// }

// console.log(s);

// for (let i = 1; i < 5; i++) {
//   s.add(i);
// }

// console.log(s);



let arr = [1,2,3,4,5]

let ans =  arr.map((element,index)=>{
   
    return {index: element}
})

console.log(ans);