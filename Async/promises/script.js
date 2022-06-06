const getSomething = ()=>{
    return new Promise((resolve,reject)=>{
        //fetch something
        resolve("some data")
        //if error
        reject("error")
    });
}


// getSomething().then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// });



const getToDos = (resoure)=>{

    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange",()=>{
            if(request.readyState === 4 && request.status === 200){
               resolve(request.responseText)
            }else if(request.readyState === 4){
               reject("Error occured")
            }
        })
        
        request.open('GET',resoure);
        request.send();
    })
   
}

let url1 = 'todos/1.json'
let url2 = 'todos/2.json'
let url3 = 'todos/3.json'




// p.then(onFulfilled[, onRejected]);

// p.then(value => {
//   // fulfillment
// }, reason => {
//   // rejection
// });




getToDos(url1).then(null,(data)=>{
    console.log(data);
    return getToDos(url2)
}).then((data)=>{
    console.log(data)
    return getToDos(url3)
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

