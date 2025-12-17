import { useParams } from "react-router"
const ProductDetails=()=>{
    const {id}=useParams()
 return(
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-10 py-10 text-slate-100">
        <h1 className="text-3xl font-bold">Product ID: <span className="text-amber-400">{id}</span></h1>
    </div>
 )
}
export default ProductDetails