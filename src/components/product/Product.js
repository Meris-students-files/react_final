import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../redux/cart/actions'
import { toggleWhishList } from '../../redux/whishlist/actions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Product(props) {
    const dispatch = useDispatch()
    const whishList = useSelector(state=>state.whishList)
    const cart = useSelector(state=>state.cart)
    return (
        <div className="wrapper">
            <div className=" product">
                <div>
                    <picture>
                        <a href={'/images/' + props.image} download> 
                        <Link state={props} to='/product'>
                            <img src={'./images/' + props.image} alt={props.title} />
                        </Link>
                        </a>
                    </picture>
                </div >
                <div className="produc-body">
                    <h4 className="title">{props.title}</h4>
                    <div className="flex between">
                        <p>{props.category}</p>
                        <div className="flex">
                            <div className="discount">{props.discount}</div>
                            <div className="price">{props.price}</div>
                        </div>
                    </div>
                    <div className="flex">
                    {(cart.items.find(item => item.id === props.id) ? <Link className="btn" to='/cart'>Go to Cart</Link> : <button className="btn" onClick={() => dispatch(addToCart(props))}>Add to cart</button> )}
                   
                        <FontAwesomeIcon onClick={() => dispatch(toggleWhishList(props))} icon={faHeart} className={(whishList.items.find(item => item.id === props.id)) ? 'active' : ''}/>
                        </div>
                </div>
            </div>
        </div>
    )
}