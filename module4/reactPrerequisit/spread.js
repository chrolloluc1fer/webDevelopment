let arr = [1,2,3]
// let arr2 = arr;



let arr2 = arr.map((e)=>{
    return e;
})
arr[2] = 0;
console.log(arr2);

let obj = {a : "Shuabhm",
            b:{
                s:"candy"
            }}
 
let obj2 = JSON.parse(JSON.stringify(obj));



obj.b.s="shu"
console.log(obj,obj2)