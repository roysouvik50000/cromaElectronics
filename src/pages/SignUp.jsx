import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signUpUser } from "../store/userSlice";

export default function SignUp() {
  const user = useSelector(state => state.user)
  const [name , setName ] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [alart , setAlart] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUpHandler = ()=>{
    if(name && email.includes('@') && password.length > 5){
      dispatch(signUpUser({name , email , password}))
      navigate('/')
    }else{
      setAlart('Entered wrong inputs!!');
    }
  }
  useEffect(()=>{
    setAlart(user.error);
  },[user.error])

  // useEffect(()=>{
  //   console.log(user);
  // },[user])

  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center fixed z-5 top-16 bg-black/70">
      <form className="bg-black px-9 py-6 rounded-2xl flex flex-col items-center justify-around text-white gap-7 text-[18px] shadow-lg shadow-emerald-500"
      onSubmit={(e)=>{
        e.preventDefault();
        signUpHandler();
      }}
      >
        <h1 className="text-2xl font-black">Sign Up</h1>
        <div>
          <label htmlFor="name">Name - </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            className="bg-white/15 px-1.5 py-2.5 rounded-2xl"
            onChange={(e)=>{
              setName(e.target.value.trim().toUpperCase())
              setAlart('')
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email - </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            className="bg-white/15 px-1.5 py-2.5 rounded-2xl"
            onChange={(e)=>{
              setEmail(e.target.value.trim().toLowerCase())
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
            onChange={(e)=>{
              setPassword(e.target.value.trim())
              setAlart('')
            }}
            required
          />
        </div>
        <button type="submit" 
        className="bg-white/10 px-8 py-2 rounded-2xl cursor-pointer"
        >
          Sign Up
        </button>
        <p className="text-red-600 text-center text-wrap w-72">{alart}</p>
      </form>
    </div>
  );
}
