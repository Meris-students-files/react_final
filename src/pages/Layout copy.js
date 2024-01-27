import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartButton from "../components/CartButton";
import WishListBtn from "../components/WishListBtn";
export default function Layout() {
    const store = useSelector(state=>state.cart)

    return (
        <>
            <header>

                <div className='row'>
                    <div className="col">
                        <nav>
                            <ul className="flex">
                                <li><Link to="home" underline="none"> Home </Link></li>
                                <li><Link to="cart" underline="none"><CartButton/></Link></li>
                                <li> <Link to="whishlist" underline="none"><WishListBtn /></Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col">
                        <div>
                            <button id="basic-button" >
                                Dashboard
                            </button>
                        </div>
                    </div>

                </div>
            </header>
            <Outlet></Outlet>
            <footer></footer>
        </>
    )
}