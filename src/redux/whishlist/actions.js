export function toggleWhishList(product){
    return(
        {
            type: 'TOGGLE_WHISHLIST',
            payload: product
        }
    )
}