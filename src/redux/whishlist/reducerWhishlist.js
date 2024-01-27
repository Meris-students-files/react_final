import initialState from './store'

export default function whishListReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_WHISHLIST': {
            let newState = [...state.items];
            let elID = newState.findIndex(el => el.id === action.payload.id)

            if (elID !== -1) {

                newState.splice(elID, 1)
                localStorage.setItem('wish', JSON.stringify(newState))

                return {
                    ...state,
                    items: [...newState]
                }
            }
            else {
                newState.unshift(action.payload)
                localStorage.setItem('wish', JSON.stringify(newState))

                return {
                    ...state, items: [...newState]
                }
            }

        }
        default:
            return state;
    }
}