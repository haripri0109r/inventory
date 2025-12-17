import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const ProductList = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch(`http://localhost:3000/products`)
            const data=await response.json()
            setProducts(data)
        }
        fetchData()
    },[])
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-10 py-10">
        <h1 className="text-3xl font-bold text-slate-50 mb-8 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">All Products</h1>
        <div className="flex flex-row gap-10 flex-wrap">
        {products.map((product)=>{
            return (
                <ProductCard
                  key={product._id || product.id}
                  id={product._id || product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
            )
        })}
        </div>
    </div>
    )
}


export default ProductList;