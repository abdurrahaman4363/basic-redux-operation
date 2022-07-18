
const {createStore , combineReducers} = require("redux")

const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2
}
const initialCartState = {
    products: ["sugar"],
    numberOfProducts: 1
}

const ADD_PRODUCT = "ADD_PRODUCT"
const GET_PRODUCT = "GET_PRODUCT"

const ADD_CART = "ADD_CART"
const GET_CART = "GET_CART"

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

const getProduct = () => {
    return {
        type: GET_PRODUCT,
    }
}
///////////////
const addCart = (cart) => {
    return {
        type: ADD_CART,
        payload: cart
    }
}

const getCart = () => {
    return {
        type: GET_CART,
    }
}


const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:

            return {
               products:[...state.products,action.payload],
               numberOfProducts:state.numberOfProducts + 1
            }
        case GET_PRODUCT:

            return {
                ...state,
                
            }

        default:
           return state;
    }
}
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ADD_CART:

            return {
               products:[...state.products,action.payload],
               numberOfProducts:state.numberOfProducts + 1
            }
        case GET_CART:

            return {
                ...state,
                
            }

        default:
           return state;
    }
}




 const rootReducer =combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer
})

const store = createStore(rootReducer)

store.subscribe(() =>{
    console.log(store.getState())
})

store.dispatch(getProduct())
store.dispatch(getCart())

store.dispatch(addProduct("lobon"))
store.dispatch(addCart("lobon"))


//////////////////////

/* const store = createStore(productReducer)

store.subscribe(() =>{
    console.log(store.getState())
})

store.dispatch(getProduct())
store.dispatch(addProduct("lobon")) */ 
///////////////////
/* 
const {createStore} = require("redux")

const store = createStore(cartReducer)

store.subscribe(() =>{
    console.log(store.getState())
})

store.dispatch(getCart())
store.dispatch(addCart("lobon"))  */