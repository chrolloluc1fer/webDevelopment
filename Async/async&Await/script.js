const getToDos = async()=>{

    const response = await fetch('todos/1.json')
    const data = await response.json()
    console.log(data)
    const response2 = await fetch('todos/2.json')
    const data2 = await response2.json()
    console.log(data2)
    const response3 = await fetch('todos/3.json')
    const data3 = await response3.json()
    console.log(data3)
      
};
 


