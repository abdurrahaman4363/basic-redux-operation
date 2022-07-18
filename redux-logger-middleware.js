
const {createStore ,applyMiddleware} = require("redux")
const { default: logger } = require("redux-logger")

const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2
}


const ADD_PRODUCT = "ADD_PRODUCT"
const GET_PRODUCT = "GET_PRODUCT"


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


const store = createStore(productReducer, applyMiddleware(logger))

store.subscribe(() =>{
    console.log(store.getState())
})

store.dispatch(getProduct())
store.dispatch(addProduct("lobon"))
store.dispatch(addProduct("water"))



