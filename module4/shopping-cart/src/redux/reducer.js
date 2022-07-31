import './action'


let intitialState = [{
    id: 0,
    name:"iPhone 12 Pro Max",
    img: "https://m.media-amazon.com/images/I/71fJ-gmBZtL._SL1500_.jpg",
    price: 129000,
    qty: 1
}, {
    id: 1,
    name:"Kia Seltos",
    img: "https://www.kia.com/content/dam/kia2/in/en/images/home/seltos_new_masthead.png",
    price: 1129000,
    qty: 1
}, {
    id: 2,
    name:"AlienWare",
    img: "https://static.techspot.com/images/products/2019/laptops/org/2019-07-15-product-2.png",
    price: 249000,
    qty: 1
}]

let reducer = (state = intitialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let cp = state.map((el) => el);
            let id = action.payload;
            cp[id].qty = cp[id].qty + 1;
            return cp;
        case "REMOVE_FROM_CART":
            cp = state.map((el) => el);
             id = action.payload;
             if(cp[id].qty > 0)
             cp[id].qty = cp[id].qty - 1;
             return cp; 
        default:
            return state;

    }
}

export default reducer