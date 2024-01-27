export function addToWishList(product){
    return(
        {type: 'ADD_TO_WHISHLIST',
        payload: product}
   )
}
export function removeFrom(id){
    return(
        {type: 'REMOVE_TO_WHISHLIST',
        payload: id}
   )
}