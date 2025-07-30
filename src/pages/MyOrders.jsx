import { useSelector } from "react-redux";
import ProductCartCard from "../components/ProductCartCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
export default function MyOrders() {
  const user = useSelector((state) => state.user.user);
  const allOrders = useSelector((state) => state.allUsersOrders.ordersDetails);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white min-h-screen px-28 py-16 text-black">
        <h1 className="text-5xl font-black my-8">Your orders :~</h1>
        <div className=" flex justify-between items-center">
          <div className="w-3/4">
            {allOrders &&
              allOrders.map((order, index) => {
                if (!user) return null;
                if (order.uid && order.uid !== user.uid) return null;
                return (
                  <div
                    key={index}
                    className=" flex items-center justify-between my-2.5 px-1.5 py-2.5 border-2 border-black rounded-2xl"
                  >
                    <ul className="w-1/2">
                      {order.orderdCart &&
                        order.orderdCart.map((product, index) => (
                          <li key={index}>{product.description}</li>
                        ))}
                    </ul>
                    <div>
                      <p className="text-[12px]">{order.address}</p>
                      <p className="text-[12px]">{order.phoneNo}</p>
                    </div>
                    <p className="text-[12px]">Order on the way</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
