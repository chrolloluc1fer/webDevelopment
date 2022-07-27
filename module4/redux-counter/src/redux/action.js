export const incrementCounter = ()=>{
    return{
        type:"INCREMENT",
    }
}

export const decrementCounter = () => {
    return {
        type :"DECREMENT"
    }
}


export const loginCreator = () =>{
    return{
        type:"LOGIN"
    }
}

export const logoutCreator = () => {
    return{
        type:"LOGOUT"
    }
}