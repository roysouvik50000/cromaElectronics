import { useDispatch, useSelector } from "react-redux";
import ProductCartCard from "../components/ProductCartCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { saveCartToLocalStorage } from "../store/cartSlice";

export default function Cart() {
  const cartProducts = useSelector((state) => state.cart.cart);
  const user = useSelector(state => state.user.user);
  const [totalPrice , setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    const totalSum = cartProducts.reduce((acc , product) => {
      return acc + Number(product.price);
    }, 0)
    setTotalPrice (totalSum);
  },[cartProducts])

  const chackOutHandler = ()=>{
    if(totalPrice>0){
      navigate('/completeOrder')
    }else{
      alert('please add product to your cart')
    }
  }

  return (
    <div className="bg-white min-h-screen px-28 py-16 text-black">
      <h1 className="text-5xl font-black my-8">Your Cart :~</h1>
      {user ? (<div className=" flex flex-col md:flex-row justify-between items-center">
        <div className="w-3/4">
          {cartProducts.map((product, index) => {
            if(cartProducts.indexOf(product) === index ){
            return <ProductCartCard key={index} product={product} />
            }}
          )}
        </div>
        <div className="bg-black/10 px-2.5 py-1.5 rounded-2xl w-[400px] h-56">
          <h1 className="font-black text-xl">Order Summary ( {cartProducts.length} items )</h1>
          <div className="flex justify-between py-10 font-medium text-[18px]">
            <p>Total :-</p>
            <div>
            <p>₹{totalPrice}</p>
            <p className="text-[8px]">(Incl. all Taxes)</p>
            </div>
          </div>
          <button type="button" 
          className="bg-emerald-500 rounded-2xl px-28 py-2.5 font-bold mx-auto w-full mt-2.5 cursor-pointer"
          onClick={chackOutHandler}
          >Checkout</button>
        </div>
      </div>):(<div>
        <h1 className="text-center text-2xl underline cursor-pointer"
        onClick={()=>{
          navigate('/login')
        }}
        >Log In First to continue to Order</h1>
      </div>)}
    </div>
  );
}
