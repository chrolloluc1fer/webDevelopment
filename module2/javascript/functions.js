function sayHello(){
    console.log("Hello");
}
sayHello();


function sum(num1,num2){
    let addition=num1+num2;
console.log("Addition of given number = "+addition);
 }
 sum(5,10);



 //function with return type
 function multiply(num1,num2)
 {
     return num1*num2;
 }
 console.log(multiply(3,6));



//storing function in variable
//function are considered first class citizen because we can store function in variable
 let a=function minus(num1,num2){
     return num1-num2;
 }
 console.log(a(10,5));

 //IIFE Immediatly invoked function Expression
 (function(){
     console.log("Hello");
 })();

 //IIFE with parameter
 (function(num1,num2){
     console.log(num1/num2)
 })(10,5);