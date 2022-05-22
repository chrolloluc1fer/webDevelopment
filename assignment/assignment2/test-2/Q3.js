// Q - Write a function f that returns product of x and y with both of the following function calls

// f(x, y)
// f(x)(y)



// function f(x,y){
//   return x*y;
// }

// console.log(f(2,4));




function f(x){

  return function(y){
    return x*y;
  }
}
console.log(f(4)(2));










// Solution:

function f(y, x) {
  if (arguments.length == 1) {
    return function (x) {
      return y * x;
    }
  } else {
    return x * y;
  }
}

