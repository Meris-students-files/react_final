import initialState from './store'

export default function cartReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TO_CART':{
            let newState = [...state.items];
            let elID = newState.findIndex(el => el.id === action.payload.id)
            if(elID !== -1){
                newState[elID].quantity++;
                return{
                    ...state, items: [...state.items]
                }
            }
            else{
                return{
                    ...state, items: [...state.items, action.payload]
                }
            }
                
            
        }
        case 'REMOVE_FROM_CART':{
            let newState = [...state.items]
            let removeID = newState.findIndex(el => el.id === action.payload)
            newState.splice(removeID,1)
            return{
                ...state,

                items: [...newState, action.payload]
            }
        }
        case 'INCREMENT':{
            let newState = [...state.items];
            let elID = newState.findIndex(el => el.id === action.payload)
            if(elID !== -1){
                newState[elID].quantity++;
                return{
                    ...state, items: [...state.items]
                }
            }
            break;
        }
        case 'DECREMENT': {
            let newState = [...state.items];
            let elID = newState.findIndex(el => el.id === action.payload)
            if(elID !== -1 && newState[elID].quantity>1){
                newState[elID].quantity--;
                return{
                    ...state, items: [...state.items]
                }
            }
            break;
        }
        default:
            return state;
    }
}