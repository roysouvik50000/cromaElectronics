import { useEffect } from "react";
import AllProductSlider from "../components/AllProductSlider";
import HeroAdSection from "../components/HeroAdSection";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../store/allProductSlice";

export default function Home() {
  // const user = useSelector(state => state.user.user);
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getAllProduct());
  // },[dispatch , user])
  return (
    <div className="pt-16 pb-10 bg-black/85">
      <div>
        <HeroAdSection />
      </div>
      <div className="pt-20 px-16">
        <div className="my-20">
          <h1 className="text-white font-bold text-2xl"> Mobiles </h1>
          <AllProductSlider categoryToView={"mobilePhone"} />
        </div>
        <div className="my-20">
          <h1 className="text-white font-bold text-2xl"> Laptops </h1>
          <AllProductSlider categoryToView={"laptop"} />
        </div>
        <div className="my-20">
          <h1 className="text-white font-bold text-2xl"> Tablets </h1>
          <AllProductSlider categoryToView={"tablet"} />
        </div>
      </div>
    </div>
  );
}
