// let a = 10;


// function func(x){
//     x++;
//     return x;
// }

// let b = func(a);
// console.log(b);
// console.log(a);


// Higher Order Function => functions which accepts a function as a parameter or returns a function

// request("url",cb)


// let a = [1,2,3]
// a[3] = a;
// function f(a){
// a[1] = a[1] + 1;
// console.log(a);
// }

// f(a);
// console.log(a);

let arr = [1,2,3,4,5,6,7,8,9]

// //map
// let newArr  = arr.map(cb);
// console.log(newArr)
// function cb(x){
// return 5*x;
// }

//filter

// let nArr = arr.filter(cb);
// function cb(x){
//     if(x < 5)
//     return x;

// }

// console.log(nArr)

//Reduce

// let sum = arr.reduce(function(prev,ele){
//     return prev + ele;
// })

// console.log(sum);




//implement map

// function mymap(arr,cb){
//     let newarr=[];
//     for(let i = 0; i < arr.length;i++){
//         newarr.push(cb(arr[i]));
//     }

//     return newarr;
// }

// function cb(x){
//     return x * 5;
// }

// console.log(mymap(arr,cb));


//implement filter

// function myfilter(arr,cb){
//     let newArr=[]
//     for(x in arr){
//         if(cb(arr[x]))
//         newArr.push(arr[x])
//     }

//     return newArr
// }

// function cb(x){
//    return x % 2 == 1
    
// }

// console.log(myfilter(arr,cb));


//----------------------set Timeout ----------------------------//

// setTimeout(function(){
//     console.log("hello")
// },1000)

// console.log("world")


//-------------------setInterval-----------------------------//
// let setId = setInterval(function(){
// console.log("heyy")
// },1000)


// setTimeout(function(){
//     clearInterval(setId)
// },3000)

setTimeout(function(){
    console.log("wassup")
},1000)


let count = 1;
while(true){
    console.log(count++);
}
