// Array
// const arr = [1,2,4];
// let [a,b,c,d] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// object

// let obj = {
//     name:"shubham",
//     age:22,
//     pincode:110084,
   
// }

// var{
//     name,pincode,age
// } = obj

// var{
//     name:firstName,pincode,age
// } = obj



//nested object
let obj={
    name:"adam",
    address:{
        country:"US",
        state:{
            stateName:"washington",
            pincode:110084
        }
    }
}



let {address:{country:cd}} = obj;
console.log(cd)

let {address:{state:{pincode}}} = obj

console.log(pincode);