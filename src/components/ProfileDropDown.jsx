import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logOutUser } from "../store/userSlice";

export default function ProfileDropDown({ showProfile, setShowProfile }) {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sellerId = 'hZwG4jL9rbTkYLKXZKkoKTLnmVR2';
  return (
    <>
      <div
        className={`bg-gray-400 w-44 h-72 absolute right-[-40px] top-6 rounded-2xl text-black
            px-1.5 py-2.5 font-black   
            ${showProfile ? "" : "hidden"}
                `}
      >
        {user ? (
          <div className="flex flex-col gap-5.5">
            <h1
              className="border-b-2 border-b-black cursor-pointer"
              onClick={() => {
                navigate("/myProfile");
                setShowProfile(false);
              }}
            >
              My Profile
            </h1>
            <h1
              className="border-b-2 border-b-black cursor-pointer"
              onClick={() => {
                navigate("/myOrders");
                setShowProfile(false);
              }}
            >
              My Orders
            </h1>
            <h1 className="border-b-2 border-b-black cursor-pointer"
            onClick={()=>{
              dispatch(logOutUser());
              navigate('/')
              setShowProfile(false);
            }}
            >
              Log Out
            </h1>
            {(sellerId === user.uid)?(<h1
              className="border-b-2 border-b-black cursor-pointer"
              onClick={() => {
                navigate("/sellerDashboard");
                setShowProfile(false);
              }}
            >
              Seller Dashboard
            </h1>):(
              <h1></h1>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-5.5">
            <h1
              className="border-b-2 border-b-black cursor-pointer"
              onClick={() => {
                navigate("/login");
                setShowProfile(false);
              }}
            >
              Log In
            </h1>
            <h1
              className="border-b-2 border-b-black cursor-pointer"
              onClick={() => {
                navigate("/signUp");
                setShowProfile(false);
              }}
            >
              Sign Up
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
