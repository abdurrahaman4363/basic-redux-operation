//state
const initialCounterState = {
    count: 0,
}


// action
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

const incrementCounterAction = (increment) =>{
    return{
        type:INCREMENT,
        payload:increment
    }
}

const decrementCounterAction = (decrement) =>{
    return{
        type:DECREMENT,
        payload:decrement
    }
}
// reducer
const counterReducer = (state=initialCounterState,action) =>{
        switch (action.type) {
            case INCREMENT:
                return{
                    ...state,
                    count:state.count + action.payload
                }
            case DECREMENT:
                return{
                    ...state,
                    count:state.count - action.payload
                }
        
            default:
                state;
        }
}

// store

const {createStore} = require('redux')

const store = createStore(counterReducer)

store.subscribe(() =>{
    console.log(store.getState())
})


store.dispatch(incrementCounterAction(2))
store.dispatch(incrementCounterAction(8))
store.dispatch(decrementCounterAction(5))
