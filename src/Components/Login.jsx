import { useRef } from "react";
import { useState } from "react"
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";
const Login=()=>{
    const [username,setuserName]=useState('');
    const navigate=useNavigate()
    const handleNameChange=(e)=>{
        setuserName(e.target.value)
    }
    
    const passwordref=useRef('')
    const handleSubmitButton=async (e)=>{
        e.preventDefault()
        
        // Validation
        if (!username || !passwordref.current.value) {
            toast.error('Email and password are required')
            return
        }
        
        try {
            console.log(username,passwordref.current.value) 
            const {data}=await axios.post(`http://localhost:3000/auth/login`,{
                email:username,
                password:passwordref.current.value
            })
            console.log("response=>",data)
            toast.success(data.message)
            sessionStorage.setItem('token',data.token)
            sessionStorage.setItem('userId',data.userId)
            sessionStorage.setItem('isLoggedIn',true)
            sessionStorage.setItem('role',data.role)
            localStorage.setItem('userId',data.userId)
            navigate('/admin')
        } catch (error) {
            console.error('Login error:', error.response?.data || error.message)
            toast.error(error.response?.data?.message || 'Login failed. Please try again.')
        }
    }

    return(
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">    
            <div className="w-full max-w-md flex flex-col justify-center shadow-2xl shadow-slate-950/70 rounded-2xl bg-slate-900 border border-slate-800 items-center px-8 py-10">    
                <form className="flex flex-col items-center w-full">
                    <h1 className="text-center text-2xl font-bold my-2 text-slate-100">Login</h1>
                    <input type="text" id="email" name="E-MAIL" placeholder="Username" value={username} className="border border-slate-800 bg-slate-950 text-slate-100 rounded-lg p-3 w-full my-2 focus:border-slate-600" onChange={handleNameChange}/>
                    <input type="password" id="pass"name="PASSWORD" placeholder="Password" ref={passwordref} className="border border-slate-800 bg-slate-950 text-slate-100 rounded-lg p-3 w-full my-2 focus:border-slate-600"/>
                    <button className="bg-slate-100 text-slate-900 mx-auto my-2 p-3 rounded-lg w-full font-semibold hover:bg-slate-200 transition" onClick={handleSubmitButton}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Login