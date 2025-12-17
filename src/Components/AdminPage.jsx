import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const AdminPage=()=>{
    const [productname,setproductname]=useState('');
    const [image,setimage]=useState('');
    const [sellingprice,setsellingprice]=useState('');

    const [products,setProducts]=useState([])
    
    useEffect(()=>{
        fetchProducts();
    },[])
    
    const fetchProducts = async()=>{
        try{
            const response=await fetch(`http://localhost:3000/products`)
            const data=await response.json()
            setProducts(data)
        }catch(error){
            console.error('Error fetching products:', error)
            toast.error('Failed to fetch products')
        }
    }
    const handleProductname = (e) => {
        setproductname(e.target.value)
    }

    const handleImage = (e) => {
        setimage(e.target.value)
    }

    const handleSellingprice= (e) => {
        setsellingprice(e.target.value);
    }

    const addProduct = async (name, imageUrl, price) => {
        try {
            console.log('Adding product:', { name, imageUrl, price });

            const newProduct = {
                name: name,
                image: imageUrl,
                price: parseFloat(price)
            };

            console.log('Sending to backend:', newProduct);

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 8000);

            const response = await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);

            if (!response.ok) {
                throw new Error(`Failed to add product: ${response.status}`);
            }

            const data = await response.json();
            console.log('Response data:', data);

            toast.success('Product added successfully!');
            setproductname('');
            setimage('');
            setsellingprice('');
            fetchProducts();
        } catch (error) {
            console.error('Error adding product:', error);
            console.error('Error name:', error.name);
            if (error.name === 'AbortError') {
                toast.error('Request timeout - Backend not responding');
            } else {
                toast.error('Failed to add product: ' + error.message);
            }
        }
    }

    const handleAdd = (e) => {
        e.preventDefault();
        console.log('Handle Add called');
        console.log('Form values:', { productname, image, sellingprice });
        
        if(!productname || !image || !sellingprice) {
            console.log('Validation failed');
            toast.warning('Please fill name, image, and price');
            return;
        }
        console.log('Validation passed, calling addProduct');
        addProduct(productname, image, sellingprice)
    }


    return (
        <>
            <div className="mt-10 w-[500px] max-w-full flex flex-col mx-auto p-6 bg-slate-900 border border-slate-800 shadow-xl shadow-slate-950/60 rounded-2xl">
                <form onSubmit={handleAdd} className="flex flex-col gap-4 text-slate-100">
                <h1 className="font-bold text-2xl text-center">Add Product</h1>
                <label className="font-bold text-sm uppercase tracking-wide text-slate-300">Name</label>
                <input type="text" placeholder="Product name" className="border border-slate-800 bg-slate-950 text-slate-100 p-3 rounded-lg focus:border-slate-600" 
                value={productname} onChange={handleProductname}/>
                <label className="font-bold text-sm uppercase tracking-wide text-slate-300">Image Url</label>
                <input type="text" placeholder="Product image url" className="border border-slate-800 bg-slate-950 text-slate-100 p-3 rounded-lg focus:border-slate-600" 
                value={image} onChange={handleImage}/>
                <label className="font-bold text-sm uppercase tracking-wide text-slate-300">Price</label>
                <input type="number" placeholder="Price" className="border border-slate-800 bg-slate-950 text-slate-100 p-3 rounded-lg focus:border-slate-600"
                value={sellingprice} onChange={handleSellingprice} />
                <button type="submit" className="bg-slate-100 text-slate-900 text-lg p-3 rounded-lg font-semibold hover:bg-slate-200 transition">Add</button>
                </form>
                </div>
        </>
    )
}
export default AdminPage