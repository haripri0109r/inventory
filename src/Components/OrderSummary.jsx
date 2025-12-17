const OrderSummary=(props)=>{
  const {quantity,setQuantity}=props
  const subtotal = 4000*quantity;
  const discount = (subtotal*10/100);
  const finalPrice = subtotal - discount;

  return (
    <div className="w-[300px] bg-slate-900 border border-slate-800 rounded-2xl shadow-xl shadow-slate-950/60 p-6 flex flex-col gap-4 text-slate-100">

      <h2 className="text-2xl font-semibold">Order Summary</h2>

      <div className="flex justify-between text-lg text-slate-200">
        <span>Subtotal:</span>
        <span className="font-medium">₹{subtotal}</span>
      </div>

      <div className="flex justify-between text-lg text-emerald-300">
        <span>Discount:</span>
        <span className="font-bold">- ₹{discount}</span>
      </div>

      <hr className="my-2" />

      <div className="flex justify-between text-xl font-bold text-slate-50">
        <span>Total:</span>
        <span>₹{finalPrice}</span>
      </div>

      <button className="w-full mt-4 py-2 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200">
        Checkout
      </button>

    </div>
  );
}

export default OrderSummary;