import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../store/productSlice";
import { useNavigate } from "react-router";

export default function SearchSuggestions({
  showSuggestion,
  setShowSuggestion,
  searchText,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProduct = useSelector((state) => state.allProduct.allProduct);
  const viewProductHandler = (product) => {
    dispatch(setProduct(product));
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/productCard");
  };
  const [filteredProduct , setFilteredProduct] = useState([]);
  useEffect(() => {
    let filterproduct =searchText && allProduct.filter((product) => {
      return product.description
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilteredProduct(filterproduct)
  }, [searchText]);

  if (!filteredProduct.length)
    return (
      <p
        className={`bg-black/90 text-white font-medium text-[14px] px-2.5 py-1.5 h-28 overflow-y-auto hide-scrollbar absolute right-0 left-0 text-center ${
          showSuggestion ? "" : "hidden"
        }`}
        onClick={() => setShowSuggestion(false)}
      >
        No matching products.
      </p>
    );

  return (
    <>
      <ul
        className={`bg-black/90 text-white font-medium text-[14px] px-2.5 py-1.5 h-72 overflow-y-auto hide-scrollbar absolute right-0 left-0 ${
          showSuggestion ? "" : "hidden"
        }`}
      >
        {filteredProduct &&
          filteredProduct.map((product, index) => (
            <li
              key={index}
              className="py-3 border-b-[1px] border-b-white cursor-pointer"
              onClick={(e) => `
                      ${viewProductHandler(product)}
                      ${e.preventDefault()}
                      ${setShowSuggestion(false)}
                    `}
            >
              {product.description}
            </li>
          ))}
      </ul>
    </>
  );
}
