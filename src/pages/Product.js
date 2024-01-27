import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Product from "../components/product/Product"
export default function ProductPage(){
    const product = useLocation()
    useEffect(()=>{
        console.log(product)
    })
    return(
        <Product {...product.state}/>
    )
}