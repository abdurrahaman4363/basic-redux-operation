
/**
 * steps of redux project setup
 * -----------------------------
 * 0. create folder and open with vs code
 * 1. npm init -y
 * 2. npm i redux
 */


// state, action, reducer, store

const { createStore } = require("redux")

// state is an object
const initialCounterState = {
    count:0,
}

/* const initialUserState = {
    users:[
        {name:"rahaman"}
    ]
} */

// action is an object.It has two things one is type and another is payload
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"

const incratementCounterAction = () => {
    return{
        type:INCREMENT
    }
}

const decratementCounterAction = () => {
    return{
        type:DECREMENT
    }
}

/* const addUserAction = () => {
    return{
        type:ADD_USER,
        payload:{name:'abdur'}
    }
} */

/* const addDynamicUserAction = (user) => {
    return{
        type:ADD_USER,
        payload:user
    }
} */

// reducer 

const counterReducer = (state=initialCounterState, action) =>{
  switch (action.type) {
    case INCREMENT:
        return{
            ...state,
            count:state.count + 1
        }

    case DECREMENT:
        return{
            ...state,
            count:state.count - 1
        }
  
    default:
        state;
  }
}

// store -- subscribe(), getState(), dispatch()

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incratementCounterAction())
store.dispatch(incratementCounterAction())
store.dispatch(incratementCounterAction())
store.dispatch(incratementCounterAction())
store.dispatch(decratementCounterAction())
