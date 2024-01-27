import initialState from './store'

export default function whishListReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TO_WHISHLIST':{
            let newState = [...state.items];
            let elID = newState.findIndex(el => el.id === action.payload.id)
            if(elID !== -1){
                return state;
            }
            else{
                return{
                    ...state, items: [...state.items, action.payload]
                }
            }
        }
        case 'REMOVE_TO_WHISHLIST':{
            let newState = [...state.items]
            let removeID = newState.findIndex(el => el.id === action.payload)
            newState.splice(removeID,1)
            return{
                ...state,
                items: [...newState, action.payload]
            }
        }
        default:
            return state;
    }
}