import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard=(props)=>{
    const {id,name,price,image}=props
     const handleAdd= async (e) => {
        e.preventDefault();
        const userId=localStorage.getItem('userId');
        if(!userId){
            toast.error('Please login first');
            return;
        }
        try {
            const res=await axios.post(`http://localhost:3000/cart`,{
                userId:userId,
                productId: id,
                quantity: 1
            });
            console.log('axios=>',res)
            toast.success('Added to cart!')
        } catch (error) {
            console.error('Add to cart error:', error.response?.data || error.message)
            toast.error(error.response?.data?.message || 'Failed to add to cart')
        }
    }
    return(
        <Link to={`/products/${id}`}>
        <div className="w-[300px] p-4 flex flex-col rounded-2xl m-5 bg-slate-700/30 border border-slate-800 shadow-xl shadow-slate-950/60 hover:border-amber-400 hover:shadow-amber-500/20 transition" >
            <div className="rounded-xl overflow-hidden bg-slate-800">
                <img src={image} alt={name} className="w-full h-[200px] object-cover" />
            </div>
            <div className="p-4 flex flex-col gap-3">
                <h1 className="text-xl font-semibold text-slate-50">{name}</h1>
                                <p className="text-xl text-right font-bold text-amber-400">
                                        ${
                                            (() => {
                                                const num = typeof price === 'number' ? price : parseFloat(price);
                                                return !isNaN(num) ? num.toFixed(2) : '';
                                            })()
                                        }
                                </p>
                <button className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg w-full font-semibold hover:bg-slate-200 transition" onClick={handleAdd}>Add to Cart</button>
            </div>
        </div>
        </Link>
    )
}

export default ProductCard;