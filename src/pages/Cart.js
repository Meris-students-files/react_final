import { useSelector } from "react-redux/es/hooks/useSelector";
import '../components/cart.css'
import { removeFromCart, increment, decrement } from "../redux/cart/actions";
import { useDispatch } from "react-redux";

export default function Cart() {
    const state = useSelector(state => state.cart)
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
                                    {/* <button className={item.quantity === 1 ? 'disabled':''} onClick={() => dispath(decrement(item.id))}>-</button> */}
                                    <button disabled={item.quantity === 1 ? true : false} onClick={() => dispath(decrement(item.id))}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispath(increment(item.id))}>+</button>

                                    <span>{item.quantity * item.price}$</span>
                                </div>
                                <span onClick={() => dispath(removeFromCart(item.id))}>X</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}