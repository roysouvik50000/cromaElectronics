import { useDispatch, useSelector } from "react-redux";
import ProductCartCard from "../components/ProductCartCard";
import { useEffect, useState } from "react";
import { completeOrderSubmit } from "../store/allUsersOrders";
import OrderComplited from "../components/OrderComplited";
import { addUsersOrders } from "../store/allUsersOrders";
import AddDeliveryDetails from "../components/AddDeliveryDetails";

export default function CompleteOrder() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cart);
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [showDelivary, setShowDelivary] = useState(true);

  const [totalPrice, setTotalPrice] = useState(0);
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const allUsersOrders = useSelector(
    (state) => state.allUsersOrders.ordersDetails
  );
  useEffect(() => {
    const totalSum = cartProducts.reduce((acc, product) => {
      return acc + Number(product.price);
    }, 0);
    setTotalPrice(totalSum);
  }, [cartProducts]);

  const completeOrderHandler = () => {
    const order = {
      uid: user.uid,
      usersName: user.displayName,
      phoneNo: phoneNo,
      address: address,
      orderdCart: cart,
      payment: "cash on delivary",
    };
    dispatch(addUsersOrders(order));
  };

  const [showComplited, setShowComplited] = useState(false);

  return (
    <>
      <OrderComplited
        showComplited={showComplited}
        setShowComplited={setShowComplited}
      />
      <AddDeliveryDetails
        setPhoneNo={setPhoneNo}
        setAddress={setAddress}
        showDelivary={showDelivary}
        setShowDelivary={setShowDelivary}
        phoneNo={phoneNo}
        address={address}
      />
      <div className="bg-white h-min-screen px-28 py-16 text-black">
        <h1 className="text-5xl font-black my-8">Complete your Order :~</h1>
        <div className=" flex flex-col">
          <div className="w-[100%] mx-auto">
            {cartProducts.map((product, index, arr) => {
              const arrCart = arr.map((v) => JSON.stringify(v));
              console.log(arrCart.indexOf(JSON.stringify(product)) == index);
              if (arrCart.indexOf(JSON.stringify(product)) == index) {
                return <ProductCartCard key={index} product={product} />;
              }
            })}
          </div>
          <div className="flex gap-4 items-center justify-around">
            <div>
              <h1 className="text-3xl font-black my-5">Delivery Address :~</h1>
              <p>{address}</p>
              <p>phone no :- {phoneNo}</p>
            </div>
            <div className="bg-black/10 px-2.5 py-1.5 rounded-2xl w-[500px] h-56">
              <h1 className="font-black text-xl">
                Order Summary ( {cartProducts.length} items )
              </h1>
              <div className="flex justify-between py-10 font-medium text-[18px]">
                <p>Total :-</p>
                <div>
                  <p>₹{totalPrice}</p>
                  <p className="text-[8px]">(Incl. all Taxes)</p>
                </div>
              </div>
              <button
                type="button"
                className="bg-emerald-500 rounded-2xl px-28 py-2.5 font-bold mx-auto w-full mt-2.5 cursor-pointer"
                onClick={() => {
                  completeOrderHandler();
                  setShowComplited(true);
                }}
              >
                Complite Your Order
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              className="bg-emerald-500 text-emerald-500"
              name="paymentDetails"
              id="paymentDetails"
              defaultChecked
            />
            <p>Cash On Deilevary</p>
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              className="bg-emerald-500 text-emerald-500"
              name="paymentDetails"
              id="paymentDetails"
              readOnly
              disabled
            />
            <p>Pay Online</p>
          </div>
        </div>
      </div>
    </>
  );
}
