import { useState } from "react";
import { useNavigate } from "react-router";

export default function SellerLogin() {
  // const navigate = useNavigate()
  // const [email , setEmail] = useState('');
  // const [password , setPassword] = useState('');
  // const [alart , setAlart ] = useState('');
  // const sellerLoginHandler = ()=>{
  //   if(myEmail === email && myPassword === password){
  //     navigate('/sellerDashboard')
  //     setAlart('')
  //   }else{
  //     setAlart('invalid Password or email');
  //   }
  // }
  // const myEmail = 'dev@web.ai';
  // const myPassword = 'a1b2';
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center fixed z-5 top-16 bg-black/70">
      {/* <form className="bg-black px-6 py-3.5 rounded-2xl flex flex-col items-center justify-around text-white gap-7 text-[18px]">
        <h1 className="text-2xl font-black">Seller Login</h1>
        <div>
          <label htmlFor="email">Email - </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            className="bg-white/15 px-1.5 py-2.5 rounded-2xl"
            onChange={(e)=> {
              setEmail(e.target.value)
              setAlart('')
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password  - </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="bg-white/15 px-1.5 py-2.5 rounded-2xl"
            onChange={(e)=> {
              setPassword(e.target.value)
              setAlart('')
            }}
            required
          />
        </div>
        <button type="button" className="bg-white/10 px-8 py-2 rounded-2xl cursor-pointer"
        onClick={sellerLoginHandler}
        >
          Log In
        </button>
        <p className="text-red-600 text-center">{alart}</p>
      </form> */}
    </div>
  );
}