import { useSelector } from "react-redux";

export default function CartButton(){
    const store = useSelector(state=>state.cart);
    return(
        <span>Cart <sup>{store.items.length}</sup></span>
    )
}