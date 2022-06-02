const getToDos = (resoure,callback)=>{
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange",()=>{
        if(request.readyState === 4 && request.status === 200){
            let data = JSON.parse(request.responseText)
            callback(undefined,data);
        }else if(request.readyState === 4){
            callback('could not fetch data',undefined);
        }
    })
    
    request.open('GET',resoure);
    request.send();
}




let url1 = 'todos/1.json'
let url2 = 'todos/2.json'
let url3 = 'todos/3.json'
getToDos(url1,(err,data)=>{
    console.log("callback Fired")
    if(err){
        console.log(err)
    }else {
        console.log(data);
    }
    getToDos(url2,(err,data)=>{
        console.log("callback Fired")
        if(err){
            console.log(err)
        }else {
            console.log(data);
        }
        getToDos(url3,(err,data)=>{
            console.log("callback Fired")
            if(err){
                console.log(err)
            }else {
                console.log(data);
            }
        })
    })
})
