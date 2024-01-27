import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartButton from "../components/CartButton";
import WishListBtn from "../components/WishListBtn";
export default function Layout() {
    const cart = useSelector(state => state.cart)
    
    const [showMenu, setShowMenu] = useState(false)
    const showInner = (menu) => {
        setShowMenu(menu)
    }
    const hideInner = (menu) => {
        setShowMenu(false)
    }
    // const menu = ['home', 'shop', 'about', 'blog', 'contact', 'pages']
    const menu = [
        { name: 'home', link: 'home', inner: false },
        {
            name: 'shop', link: 'shop', inner: {
                name: 'Product Categories',
                items: [
                    { name: 'Bedroom', link: 'bedroom', inner: false },
                    { name: 'Outdoor', link: 'outdoor', inner: false },
                    { name: 'Decoration', link: 'decoration', inner: false },
                    { name: 'Kitchen', link: 'kitchen', inner: false },
                    { name: 'Lighting', link: 'lighting', inner: false },
                    { name: 'Table', link: 'table', inner: false },
                    { name: 'Decor', link: 'decor', inner: false },
                ]
            }
        },
        
        { name: 'about', link: 'about', inner: false },
        { name: 'products', link: 'products', inner: false },
        { name: 'blog', link: 'blog', inner: false },
        { name: 'contact', link: 'contact', inner: false },
        { name: 'pages', link: 'pages', inner: {
            name: 'Product Categories',
            items: [
                { name: 'Bedroom', link: 'bedroom', inner: false },
                { name: 'Outdoor', link: 'outdoor', inner: false },
                { name: 'Decoration', link: 'decoration', inner: false },
                { name: 'Kitchen', link: 'kitchen', inner: false },
                { name: 'Lighting', link: 'lighting', inner: false },
                { name: 'Table', link: 'table', inner: false },
                { name: 'Decor', link: 'decor', inner: false },
            ]
        }, 
     },
     { name: 'user', link: 'user/list', inner: {
        name: 'User actions',
        items: [
            { name: 'Create', link: 'user/create', inner: false },
            { name: 'List', link: 'user/list', inner: false }
        ]
    }, 
 }
    ]
   
   
    return (
        <>
            <header>
            <div className='red'></div>

                <div className="row justify-content-between">
                    <div className="col"><Link to="/">Logo</Link></div>
                    <div className="col">
                        <nav>
                            <ul className="flex">
                                {menu.map((el, index) => {
                                    return (
                                        <li key={index} onMouseEnter={() => showInner(index) } onMouseLeave={() => hideInner(index)}>

                                            <Link to={`/${el.name}`}>{el.link}</Link>
                                            {(showMenu === index && el.inner) ? 
                                            <>
                                                <ul className="open">
                                                    <li>{el.inner.name}</li>
                                                    {el.inner.items.map((elmnt,key) => <li key={key}><Link to={`/${elmnt.link}`}>{elmnt.name}</Link></li>)}
                                                </ul>
                                            </> : null}

                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                    <div className="col"><nav>
                        <ul className="flex">
                        <li><Link to="cart" underline="none"><CartButton/></Link></li>
                        <li> <Link to="whishlist" underline="none"><WishListBtn /></Link></li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </header>
            <Outlet />
            <footer></footer>
        </>
    )
}