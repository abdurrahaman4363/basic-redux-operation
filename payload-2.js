const initialConter = {
    users:['rahaman'],
    counter:1
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
                    users:[...state.users, action.payload],
                    counter:state.counter + 1
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
    store.dispatch(incrementAction("abdur"))
    store.dispatch(incrementAction("sagor"))
    
    