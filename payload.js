const initialConter = {
counter:0
}

const INCREMENT = "INCREMENT"

const incrementAction = (increment) =>{
    return {
        type:INCREMENT,
        payload:increment
    }
}

const counterReducer = (state=initialConter, action)=>{
    switch (action.type) {
        case INCREMENT:
            
            return{
                ...state,
                counter:state.counter + action.payload
            }
    
        default:
            state;
    }
}

const {createStore} = require("redux")

const store = createStore(counterReducer)

store.subscribe(() =>{
    console.log(store.getState())
})
store.dispatch(incrementAction(5))
store.dispatch(incrementAction(50))
store.dispatch(incrementAction(5))