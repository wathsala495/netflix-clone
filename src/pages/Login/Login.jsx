import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signUp } from '../../firabase'
import netflix_spinner from './../../assets/netflix_spinner.gif'
const Login = () => {

  const [signState,setSignState]=useState("Sign In")
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setpassword]=useState("");
  const [loading,setLoading]=useState(false)


   const user_auth=async(event)=>{
    event.preventDefault();
    setLoading(true)
     if(signState==="Sign In"){
       await login(email,password)
     }else{
       await signUp(name,email,password)
     }
     setLoading(false)
   } 

  return (
     
    loading?<div className='login-spinner w-[100%] h-[100vh] flex items-center justify-center'>
      <img src={netflix_spinner} alt="" className='w-[60px]'/>
    </div>:
     
    <div className="login max-[500px]:py-[15px] max-[500px]:px-[5%]" >
      <img src={logo} alt=""className='login-logo w-[150px]' />
      <div className="login-form max-[500px]:p-[20px] max-[500px]:mt-[30px] w-[100%] max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded-[4px] p-[60px] m-auto">
        <h1 className='text-[32px] font-[500] mb-[28px]'>{signState}</h1>
        <form >
          {signState==="Sign Up"?   <input type="text" placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)} className='w-[100%] h-[50px] bg-[#333] text-white my-[12px]  rounded-[4px] py-[16px] px-[20px] text-[16px] font-[500] placeholder-text-[16px] placeholder:font-[500]'/>:<></>}
       
          <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-[100%] h-[50px] bg-[#333] text-white my-[12px]  rounded-[4px] py-[16px] px-[20px] text-[16px] font-[500] placeholder-text-[16px] placeholder:font-[500]'/>
          <input type="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} className='w-[100%] h-[50px] bg-[#333] text-white my-[12px]  rounded-[4px] py-[16px] px-[20px] text-[16px] font-[500] placeholder-text-[16px] placeholder:font-[500]'/>
    
          <button className='w-[100%] bg-[#e50914] text-white rounded-[4px] text-[16px] font-[500] mt-[20px] cursor-pointer p-[16px]' type='submit' onClick={user_auth}>{signState}</button>
          <div className="form-help mt-2 flex items-center justify-between text-[#b3b3b3] text-[13px]">
            <div className="remember flex items-center gap-[5px] ">
              <input type="checkbox" className='w-[18px] h-[18px]' />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch mt-[40px] text-[#737373]">
          {signState==="Sign In"?<p>New to netflix? <span className='ml-[6px] text-[#fff] font-[500] cursor-pointer' onClick={()=>setSignState("Sign Up")}>Sign Up Now</span></p>
          :<p>Already have account? <span className='ml-[6px] text-[#fff] font-[500] cursor-pointer' onClick={()=>setSignState("Sign In")}>Sign In Now</span></p>}
          
          
        </div>
      </div>
    </div>
  )
}

export default Login
