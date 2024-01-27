import { useSelector } from "react-redux/es/hooks/useSelector";
import '../components/cart.css'
import { toggleWhishList } from "../redux/whishlist/actions";
import { useDispatch } from "react-redux";

export default function WishList() {
    const state = useSelector(state => state.whishList)
    const dispath = useDispatch()
    return (
        <div className="cart">
            {state.items.map((item, index) => {
                return (
                    <div className="cartitem" key={index}>
                        <div className="row">
                            <div className="col"><picture>
                                <img src={`./images/${item.image}`} alt={item.title} />
                            </picture></div>
                            <div className="col">
                                <div>
                                    <span>{item.title}</span>
                                </div>
                                <div>
                                    <span>{item.price}$</span>
                                </div>
                                <span onClick={() => dispath(toggleWhishList(item))}>X</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}