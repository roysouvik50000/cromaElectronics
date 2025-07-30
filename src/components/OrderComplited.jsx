import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { clearCart } from "../store/cartSlice";

export default function OrderComplited({ showComplited , setShowComplited }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  return (
    <>
      <div className={`min-h-screen min-w-screen flex flex-col justify-center items-center fixed z-5 top-16 bg-black/70 ${showComplited ? '' : 'hidden'}`}>
        <div className="bg-black px-6 py-3.5 rounded-2xl flex flex-col items-center justify-around text-white gap-7 text-[18px]">
          <h1 className="text-2xl font-black">Order Complited</h1>
          <button
            type="submit"
            className="bg-white/10 px-8 py-2 rounded-2xl cursor-pointer"
            onClick={()=>{
                navigate('/')
                dispatch(clearCart())
                setShowComplited(false)
                localStorage.setItem(`cart,${user.uid}`,JSON.stringify([]))
            }}
          >
            Go to Home
          </button>
          <p className="text-red-600 text-center">
            {/* pleese enter gjhgjh jghghjghj */}
          </p>
        </div>
      </div>
    </>
  );
}
