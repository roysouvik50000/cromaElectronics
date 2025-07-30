import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseProductQuantity,
  removeCartProduct,
} from "../store/cartSlice";

export default function ProductCartCard({ product }) {
  const dispatch = useDispatch();
  const removeCartProductHandler = (id) => {
    dispatch(removeCartProduct(id));
  };
  const [quantity, setQuantity] = useState(0);

  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    let productQuantity = 0;
    cart.forEach((v) => {
      if (v === product) {
        productQuantity++;
      }
    });
    setQuantity(productQuantity);
  }, [cart]);

  const increaseQuantityHandler = (product) => {
    dispatch(addToCart(product));
  };
  const decreaseQuantityHandler = (product) => {
    dispatch(decreaseProductQuantity(product));
  };

  return (
    <>
      <div className=" h-36 w-2/3 border-2 border-black rounded-2xl px-2.5 py-1 my-5">
        <div className="flex gap-5 justify-between">
          <div>
            <img
              src={product.image[0]}
              alt="product img"
              className="h-32"
              height={100}
            />
          </div>
          <div className="w-2/3 text-[16px] flex flex-col justify-between">
            <h1>{product.description}</h1>
            <div className="flex justify-around w-18 px-1.5 py-1 border-2 border-black rounded-2xl">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();

                  decreaseQuantityHandler(product);
                }}
                className="cursor-pointer"
              >
                -
              </button>
              <h2> {quantity}</h2>
              <button
                type="button"
                onClick={() => {
                  increaseQuantityHandler(product);
                }}
                className="cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1>₹{product.price}</h1>
              <p className="text-[8px]">(Incl. all Taxes)</p>
            </div>
            <button
              type="button"
              className="px-3 py-1 rounded-2xl bg-orange-600 cursor-pointer"
              onClick={() => {
                removeCartProductHandler(product.id);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
