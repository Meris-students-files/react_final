import Product from "./Product";
import { useState,useEffect } from "react";
export default function Products(){
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('./Products.json').then(res=>res.json()).then(res=> setProducts(res))
    },[])
    return(
        <div className="row wrap products">
            {products.map(p=><Product key={p.id} {...p}/>)}
        </div>
    )
}