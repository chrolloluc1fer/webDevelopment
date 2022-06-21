let obj = {name:"shubham",
  address:{
    house:33,
    gali:12
  }  
}


let obj2 = JSON.parse(JSON.stringify(obj))
obj2.address.gali = 13


console.log(obj)
console.log(obj2);
