import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logInUser } from "../store/userSlice";

export default function Login() {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alart, setAlart] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logInHandler = () => {
    if (email.includes("@") && password.length > 5) {
      dispatch(logInUser({ email, password }));
    } else {
      setAlart("Entered wrong inputs!!");
    }
  };

  useEffect(()=>{
    if (user.user){

      navigate('/')
    }
  },[user.user])

  useEffect(()=>{
    console.log(user.error);
    setAlart(user.error);
  },[user.error])
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center fixed z-5 top-16 bg-black/80">
      <form
        className="bg-black px-6 py-3.5 rounded-2xl flex flex-col items-center justify-around text-white gap-16 text-[18px] shadow-lg shadow-emerald-500"
        onSubmit={(e) => {
          e.preventDefault();
          logInHandler();
        }}
      >
        <h1 className="text-2xl font-black">Login</h1>
        <div>
          <label htmlFor="email">Email - </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            className="bg-white/15 px-1.5 py-2.5 rounded-2xl"
            onChange={(e) => {
              setEmail(e.target.value.trim());
              setAlart("");
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password - </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="bg-white/15 px-1.5 py-2.5 rounded-2xl"
            onChange={(e) => {
              setPassword(e.target.value);
              setAlart("");
            }}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-white/10 px-8 py-2 rounded-2xl cursor-pointer"
        >
          Log In
        </button>
        <div className="flex justify-between w-[100%]">
          <p
          className="text-sm text-red-500"
          >
            Don't have a account?
          </p>
          <p
          onClick={()=>{
            navigate('/signUp')
          }}
          className="text-sm text-blue-600 underline"
          >
            Sign Up
          </p>
        </div>
        <p className="text-red-600 text-center w-[100%] h-12">{alart}</p>
      </form>
    </div>
  );
}
