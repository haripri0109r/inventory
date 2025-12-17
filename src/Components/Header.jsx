import { Link } from "react-router-dom"
import logo from "../../images.png"    

const Header = () => {
    return (
        <>
            <nav className="flex flex-wrap items-center justify-between bg-slate-950 border-b border-slate-800 px-8 py-4 text-slate-100">
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        className="h-[64px] w-[64px] rounded-full border-2 border-amber-400 object-cover shadow-lg shadow-amber-500/20"
                        alt="Lion logo"
                    />
                    <span className="text-lg font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Hari's  Shop</span>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-3">
                    <Link to="/" className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 font-semibold hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/20 transition">
                        Home
                    </Link>
                    <Link to="/products" className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 font-semibold hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/20 transition">
                        Products
                    </Link>
                    <Link to="/cart" className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 font-semibold hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/20 transition">
                        Cart 🛒
                    </Link>
                    <Link to="/orders" className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 font-semibold hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/20 transition">
                        Orders
                    </Link>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <Link to="/login" className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold hover:from-amber-500 hover:to-yellow-600 shadow-lg shadow-amber-500/30">
                        Login
                    </Link>
                    <Link to="/login" className="px-4 py-2 rounded-lg border border-slate-700 font-semibold hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/20 transition">
                        Signup
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Header