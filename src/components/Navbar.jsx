import search from "../assets/search.png";
import cartIcon from "../assets/cart.png";
import userIcon from "../assets/user.png";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import SearchSuggestions from "./SearchSuggestions";
import { useState } from "react";
import ProfileDropDown from "./ProfileDropDown";
export default function Navbar() {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  return (
    <>
      <div className="bg-black/90 md:px-20 flex flex-row items-center justify-between text-white py-2.5 fixed z-50 w-[100%]">
        <Link to={"/"}>
          <h1 className="text-5xl relative font-mono">
            croma
            <span className="bg-emerald-500 h-1 w-5 block absolute top-2 right-1"></span>
          </h1>
        </Link>
        <div
          className="relative"
          onFocus={() => {
            setShowSuggestion(true);
          }}
        >
          <div className="flex flex-row items-center ">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="What are you looking for ?"
              className="bg-white font-medium text-black px-1.5 py-1 rounded-l-[8px] placeholder:text-gray-500 h-8.5 md:w-[420px]"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              type="button"
              className="bg-emerald-500 h-[34px] w-6 rounded-r-[8px] cursor-pointer"
            >
              {showSuggestion ? (
                <div
                  className="text-[20px]"
                  onClick={() => {
                    setShowSuggestion(false);
                  }}
                >
                  {" "}
                  &times;
                </div>
              ) : (
                <img src={search} alt="search" width={28} />
              )}
            </button>
          </div>
          <SearchSuggestions
            showSuggestion={showSuggestion}
            setShowSuggestion={setShowSuggestion}
            searchText={searchText}
          />
        </div>
        <div className="flex gap-5 items-center">
          <div className="w-32 text-[12px]">
            {user ? (
              <h1>
                Welcome, {user.displayName && user.displayName.trim().split(" ")[0].toUpperCase()}
              </h1>
            ): <h1></h1>}
          </div>
          <div className="relative">
            <img
              src={userIcon}
              width={22}
              alt="user"
              onClick={() => {
                setShowProfile((curr) => !curr);
              }}
              className="cursor-pointer"
            />
            <ProfileDropDown showProfile={showProfile} setShowProfile={setShowProfile}/>
          </div>
          <Link to={"/cart"}>
            <div className="relative px-2">
              <img src={cartIcon} width={36} alt="cart" />
              <h1 className="absolute top-0 right-0 bg-emerald-500 px-2 text-[12px] font-black rounded-full">
                {cart && cart.length}
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
