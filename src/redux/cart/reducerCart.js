import initialState from './store'

export default function cartReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TO_CART':{
            let newState = [...state.items];
            let elID = newState.find(el => el.id === action.payload.id)
            if(elID){
                elID.quantity += 1;
                localStorage.setItem('cart', JSON.stringify(newState))
                return{
                    ...state, items: [...newState]
                }
            }
            else{
                let newItem = {...action.payload};
                newItem.quantity = 1;
                newState.unshift(newItem)
                localStorage.setItem('cart', JSON.stringify(newState))
                return{
                    ...state, 
                    items: [newItem, ...state.items]
                }
            }
        }
        case 'REMOVE_FROM_CART':{
            let newState = [...state.items]
            let removeID = newState.findIndex(el => el.id === action.payload)
            newState.splice(removeID,1)
            localStorage.setItem('cart', JSON.stringify(newState))

            return{
                ...state,

                items: [...newState]
            }
        }
        case 'INCREMENT':{
            let newState = [...state.items];
            let elID = newState.findIndex(el => el.id === action.payload)
            if(elID !== -1){
                newState[elID].quantity++;
                localStorage.setItem('cart', JSON.stringify(newState))

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
                localStorage.setItem('cart', JSON.stringify(newState))

                return{
                    ...state, items: [...state.items]
                }
            }
            else{
                return state;
            }
        }
        default:
            return state;
    }
}