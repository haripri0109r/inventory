import { Link } from "react-router-dom"

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: 5000,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Gaming Headset",
      price: 3500,
      image:
        "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=400&fit=crop",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-10 py-10 border-b border-slate-800">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">New Drop</p>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Featured Products</h1>
            <p className="text-sm text-slate-400">Curated picks to refresh your everyday carry.</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <span className="px-3 py-1 rounded-full bg-slate-800/70 border border-amber-400/50 shadow-sm shadow-amber-500/20">2-day shipping</span>
            <span className="px-3 py-1 rounded-full bg-slate-800/70 border border-amber-400/50 shadow-sm shadow-amber-500/20">Easy returns</span>
          </div>
        </header>

        <main className="flex-1 px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
            {products.map((item) => (
              <div
                key={item.id}
                className="w-[300px] p-4 flex flex-col rounded-2xl bg-slate-900 border border-slate-800 shadow-xl shadow-slate-950/60 hover:border-amber-400 hover:shadow-amber-500/20 transition"
              >
                <div className="rounded-xl overflow-hidden bg-slate-800">
                  <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                </div>

                <div className="p-4 flex flex-col gap-2">
                  <h2 className="text-xl font-semibold text-slate-50">{item.name}</h2>
                  <p className="text-lg font-bold text-amber-400">${item.price}</p>
                  <button className="mt-2 inline-flex justify-center rounded-lg bg-slate-100 text-slate-900 font-semibold py-2 hover:bg-slate-200 transition">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Seasonal pick</p>
              <h3 className="text-2xl font-bold text-slate-50">Bundle and save 15%</h3>
              <p className="text-sm text-slate-300">Pair any two audio products and the discount applies at checkout.</p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/products"
                className="px-5 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold hover:from-amber-500 hover:to-yellow-600 shadow-lg shadow-amber-500/30 transition"
              >
                Explore catalog
              </Link>
              <Link
                to="/offers"
                className="px-5 py-3 rounded-lg border border-amber-400/50 text-slate-100 hover:border-amber-400 hover:shadow-amber-500/20 transition"
              >
                View offers
              </Link>
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-slate-950 border-t border-slate-800 px-10 py-8 text-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div>
            <h1 className="font-bold text-xl mb-2">About</h1>
            <p>Your trusted store for quality products at the best prices.</p>
            <p className="text-slate-400 mt-2">©2025 All Rights Reserved</p>
          </div>

          <div>
            <h1 className="font-bold text-xl mb-2">Support</h1>
            <ul className="space-y-1 text-slate-300">
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Help</li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold text-xl mb-2">Contact</h1>
            <p>E-Mail: shop@gmail.com</p>
            <p>Phone: +91 7687646547</p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">Quick Links</h3>
            <ul className="space-y-1 text-slate-300">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Shop</Link></li>
              <li><Link to="/offers">Offers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home