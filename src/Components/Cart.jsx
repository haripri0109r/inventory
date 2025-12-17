import { useEffect, useState } from "react"
import Counter from "./Counter"
import Header from "./Header"
import OrderSummary from "./OrderSummary"
import axios from "axios"


const Cart = () => {
    const [products, setProducts] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`http://localhost:3000/cart`)
    //         const data = await response.json()
    //         setProducts(data)
    //     }
    //     fetchData()
    // }, [])
    // axios provides easy way to call api's
    useEffect(() => {
        const fetchData = async () => {
            const userId=localStorage.getItem('userId');
            if(!userId){
                console.log('No userId found');
                return;
            }
            const response = await axios.get(`http://localhost:3000/cart?userId=${userId}`)
            console.log(response.data)
            setProducts(response.data)
        }
        fetchData()
    }, [])
    const handleCancel=async (e, productId) => {
        e.preventDefault();
        try{
            const userId=localStorage.getItem('userId');
            const res=await axios.delete(`http://localhost:3000/cart/${productId}`, {
                data: { userId }
            })
            console.log('axios=>',res)
            setProducts(prev => prev.filter(item => (item._id ?? item.id ?? item.name) !== productId))
        }catch(err){
            console.error('Delete failed', err)
        }
    }
    const handleBuy=async (e, productId) => {
        e.preventDefault();
        try{
            const userId=localStorage.getItem('userId');
            const res=await axios.post(`http://localhost:3000/orders`, { userId })
            console.log('axios=>',res)
            setProducts(prev => prev.filter(item => (item._id ?? item.id ?? item.name) !== productId))
        }catch(err){
            console.error('Buy failed', err)
        }
    }

    const setProductQuantity = (productId) => async (nextQuantity) => {
        const safeQuantity = Math.max(1, nextQuantity)
        // Optimistically update UI
        setProducts((prev) =>
            prev.map((item) =>
                (item._id ?? item.id ?? item.name) === productId
                    ? { ...item, quantity: safeQuantity }
                    : item
            )
        )
        try{
            await axios.patch(`http://localhost:3000/cart/${productId}`, { quantity: safeQuantity })
        }catch(err){
            console.error('Quantity update failed', err)
        }
    }

    const totalQuantity = products.reduce(
        (sum, item) => sum + (Number(item.quantity) || 1),
        0
    )

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col lg:flex-row gap-8 p-10">
            <div className="flex-1 space-y-6">
                {products.length === 0 && (
                    <p className="text-lg text-slate-300">Your cart is empty.</p>
                )}

                {products.map((product) => {
                    const productKey = product._id ?? product.id ?? product.name
                    const currentQuantity = Number(product.quantity) || 1

                    return (
                        <div
                            key={productKey}
                            className="w-full bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl shadow-slate-950/60"
                        >
                            <div className="w-full bg-slate-900 rounded-2xl border border-slate-800 p-6 flex justify-between">
                                <div className="flex flex-row items-center gap-4">
                                    <div>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-40 h-40 object-contain rounded-lg shadow border border-slate-800"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold">{product.name}</h2>
                                        <Counter
                                            quantity={currentQuantity}
                                            setQuantity={setProductQuantity(productKey)}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-6">
                                    <button className="text-xl font-bold border border-slate-700 rounded-full w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-900 hover:bg-slate-200" onClick={(e) => handleCancel(e, productKey)}>
                                        ❌
                                    </button>
                                    <p className="text-2xl font-bold text-slate-100">{product.price}</p>
                                    <button className="px-10 py-2 border border-slate-700 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200" onClick={handleBuy}>
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="flex flex-col items-start justify-center bg-slate-900 border border-slate-800 p-10 rounded-xl shadow-xl shadow-slate-950/60">
                <OrderSummary quantity={totalQuantity} setQuantity={() => {}} />
            </div>
        </div>
    )
}

export default Cart