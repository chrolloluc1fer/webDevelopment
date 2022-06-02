setTimeout(function () {
  console.log(1);
});
setTimeout(function () {
  console.log(2);
});



setTimeout(() => {
  let p = new Promise(function (resolve, reject) {
    resolve();
  });
  p.then(function () {
    console.log(4);
  });
  
  p.then(function () {
    console.log(5);
  });
  
}, );

setTimeout(() => {
  console.log(3);
},);



setTimeout(function () {
  console.log(6);
});



let obj = {Name:"Shubham",class:12}

console.log(obj['Name'])

