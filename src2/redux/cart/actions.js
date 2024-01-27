export function addToCart(product){
    return(
        {type: 'ADD_TO_CART',
        payload: product}
   )
}
export function removeFromCart(id){
    return(
        {type: 'REMOVE_FROM_CART',
        payload: id}
   )
}
export function increment(id){
    return(
        {type: 'INCREMENT',
        payload: id}
   )
}
export function decrement(id){
    return(
        {type: 'DECREMENT',
        payload: id}
   )
}