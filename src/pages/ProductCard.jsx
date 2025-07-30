import { useEffect, useRef, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import AllProductSlider from "../components/AllProductSlider";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, saveCartToLocalStorage } from "../store/cartSlice";
import { useNavigate } from "react-router";

export default function ProductCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  const addToCartHandler = (myProduct) => {
    dispatch(addToCart(myProduct));
  };

  const buyNowHandler = (myProduct) => {
    addToCartHandler(myProduct);
    navigate("/cart");
  };

  useEffect(() => {
    if (user){
      dispatch(saveCartToLocalStorage({
        uid:user.uid,
        cart:cart
      }));
    }
  }, [cart]);

  return (
    <div className="relative pt-20 pb-10 bg-black/85 text-white">
      <div className="flex md:flex-row flex-col gap-20 justify-center items-center w-[100%] px-16">
        <div className="md:w-1/3 w-[100%]">
          <ImageSlider images={product.image} />
        </div>
        <div className="h-[680px] overflow-y-auto flex flex-col gap-14 hide-scrollbar pt-4.5 pb-16">
          <h1 className="text-xl md:text-3xl">{product.description}</h1>
          <div>
            <h1 className="text-5xl">₹{product.price}</h1>
            <p>(Incl. all Taxes)</p>
          </div>
          <div>
            {product.brandColor ? (
              <div className="flex flex-col gap-2.5">
                <h1>Brand Color :- </h1>
                <h1 className="w-36 text-center border-2 border-emerald-500 rounded-[12px] px-2.5 py-1.5 bg-black/95">
                  {product.brandColor}
                </h1>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {product.ram ? (
              <div className="flex flex-col gap-2.5">
                <h1> RAM :- </h1>
                <h1 className="w-36 text-center border-2 border-emerald-500 rounded-[12px] px-2.5 py-1.5 bg-black/95">
                  {product.ram}
                </h1>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {product.internalStorage ? (
              <div className="flex flex-col gap-2.5">
                <h1> Internal Storage :- </h1>
                <h1 className="w-36 text-center border-2 border-emerald-500 rounded-[12px] px-2.5 py-1.5 bg-black/95">
                  {" "}
                  {product.internalStorage}
                </h1>
              </div>
            ) : (
              <></>
            )}
          </div>
          <ul className="list-disc p-5 border-[1px] border-emerald-500 rounded-2xl shadow-sm shadow-white/15">
            <h1 className="my-2.5 text-2xl font-medium">Key Features</h1>
            {product.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h1 className="text-2xl">Bank Offers - </h1>
          <div className="flex justify-around" id="cc-offer">
            <div className="w-[200px] border-2 border-amber-950 px-1.5 py-2 rounded-2xl">
              <img
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1680331889/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/IDFC_u3umdd.png"
                width={32}
                alt=""
              />
              <p className="text-[8px] h-12 overflow-y-scroll hide-scrollbar">
                Instant discount upto Rs.2000 on IDFC Bank credit card.
                Discounted price inclusive of cashback will be applied on Bank
                payment/OTP page, post clicking” Proceed to pay”. Select offer
                under view all offer segment on payment page to avail the
                benefit. T&C Apply.IMPORTANT! To Avail this offer, please ensure
                this is the only product in your cart. T&C Apply.
              </p>
            </div>
            <div className="w-[200px] border-2 border-amber-950 px-1.5 py-2 rounded-2xl">
              <img
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721031378/Croma%20Assets/CMS/Brand%20Logos/2024/Logo_SBI_120x120px_15July22024.png_White_mpsflk.jpg"
                width={32}
                alt=""
              />
              <p className="text-[8px] h-12 overflow-y-scroll hide-scrollbar">
                Instant discount upto Rs.2000 on SBI Bank credit card.
                Discounted price inclusive of cashback will be applied on Bank
                payment/OTP page, post clicking” Proceed to pay”. Select offer
                under view all offer segment on payment page to avail the
                benefit. T&C Apply.IMPORTANT! To Avail this offer, please ensure
                this is the only product in your cart. T&C Apply.
              </p>
            </div>
            <div className="w-[200px] border-2 border-amber-950 px-1.5 py-2 rounded-2xl">
              <img
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1643688357/Croma%20Assets/CMS/Bank%20Offer%20Logo/Offers_logo_Pink_cdfhgx.png"
                width={32}
                alt=""
              />
              <p className="text-[8px] h-12 overflow-y-scroll hide-scrollbar">
                Instant discount 10% upto Rs.3000 for 3 months no-cost EMI on
                IDFC, SBI, BOB Bank Credit Card.Discounted price inclusive of
                cashback & no-cost EMI benefit will be applied on Bank
                payment/OTP page. Select offer under “view all offers” segment
                on payment page to avail the benefit.IMPORTANT! To Avail this
                offer, please ensure this is the only product in your cart. T&C
                Apply. " " " " " " " " " " " "
              </p>
            </div>
          </div>
          <div>
            <p className="text-[8px] my-4">** Term & condition Applied .</p>
          </div>
        </div>
      </div>
      <div className="fixed flex bottom-0 justify-center items-center w-[100%] bg-gray-900 py-4 z-50 px-24 h-20">
        <div className="text-white w-[60%]">
          <h1 className="text-[12px] font-bold">{product.description}</h1>
          <h1>₹{product.price}</h1>
        </div>
        <div className="flex justify-center gap-40 w-[40%] text-white font-light text-[12px]">
          <button
            type="button"
            className="bg-blue-800 py-0 px-3.5 rounded-2xl h-8 cursor-pointer"
            onClick={() => {
              buyNowHandler(product);
            }}
          >
            Buy Now
          </button>
          <button
            type="button"
            className="bg-green-600 py-0 px-3 rounded-2xl h-8 cursor-pointer"
            onClick={() => {
              addToCartHandler(product);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="px-16">
        <h1>Over View :-</h1>
        <p>{product.overView}</p>
      </div>
      <div className="my-28 px-16">
        <h1 className="text-2xl">Similar Products</h1>
        <AllProductSlider categoryToView={product.category} />
      </div>
    </div>
  );
}
