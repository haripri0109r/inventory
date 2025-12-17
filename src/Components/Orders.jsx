import React from "react";

const Orders = () => {
  const orders = [
    {
      id: 1,
      product: "Smart Watch",
      orderId: "#00124",
      date: "10 Dec 2025",
      price: 5000,
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Smartwatch-828786.jpg"
    },
    {
      id: 2,
      product: "Wireless Earbuds",
      orderId: "#00125",
      date: "12 Dec 2025",
      price: 2500,
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Wireless_3.0_Earbuds_Transparent_3.png"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen p-8 text-slate-100">
      <h1 className="text-4xl font-bold text-center text-slate-50 mb-10">
        My Orders
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {orders.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900 border border-slate-800 shadow-xl shadow-slate-950/60 rounded-xl p-6 flex items-center gap-6"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.product}
              className="w-32 h-32 object-cover rounded-lg"
            />

            {/* Product Details */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{item.product}</h2>
              <p className="text-slate-300">Order ID: {item.orderId}</p>
              <p className="text-slate-300">Ordered on: {item.date}</p>
              <p className="text-lg font-bold text-slate-100 mt-2">
                ₹{item.price}
              </p>
            </div>

            {/* Button */}
            <button className="px-6 py-2 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-slate-200">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
