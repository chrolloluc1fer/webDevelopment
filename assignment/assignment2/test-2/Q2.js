// Q - Convert the following function "f" to a pure function and create an impure function g which is a higher order function which take result of f and print it like f does it here.

let obj = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  length: 5,
};

// function f() {
//   for (let i = 1; i < obj.length; i++) {
//     obj[i] = obj[i] + 1;
//   }
//   delete obj["length"];
//   for (let x in obj) {
//     console.log(`at index ${x} we have value ${obj[x]}`);
//   }
// }

// f();


// function f(){
//   let nobj = {};
//   for(let i = 1; i <= obj.length;i++){
//     nobj[i] = obj[i] + 1;
//   }
//   for(x in nobj){
//   console.log(`at index ${x} we have value ${nobj[x]}`);
//   }
// }

// f();

function g(obj ,cb){
  let nobj = cb(obj);
  for(x in nobj){
    console.log(`at index ${x} we have value ${nobj[x]}`);
    }
}


function cb(x){
  let nobj={};
  for(let i = 1; i <= x.length;i++){
    nobj[i] = x[i] + 1;
  }
  return nobj;
}

g(obj,cb);


// Solution:

// function f(obj) {
//   let nObj = JSON.parse(JSON.stringify(obj));
//   for (let i = 1; i < nObj.length; i++) {
//     nObj[i] = nObj[i] + 1;
//   }
//   delete nObj["length"];
//   return nObj;
// }

// function g(obj, callback) {
//   obj = callback(obj);
//   for (let x in obj) {
//     console.log(`at index ${x} we have value ${obj[x]}`);
//   }
// }

// g(obj, f);
