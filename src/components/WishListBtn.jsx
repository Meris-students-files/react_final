import { useSelector } from "react-redux";

export default function WishListBtn(){
    const store = useSelector(state=>state.whishList);
    return(
        <span>WishList <sup>{store.items.length}</sup></span>
    )
}