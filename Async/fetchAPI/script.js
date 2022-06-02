fetch('todos/1.json').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error);
})
