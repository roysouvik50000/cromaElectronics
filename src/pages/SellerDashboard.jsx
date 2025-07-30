import { useDispatch, useSelector } from "react-redux";
import ProductCartCard from "../components/ProductCartCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  addProductToStore,
  removeProductFromStore,
} from "../store/allProductSlice";
export default function SellerDashboard() {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.allUsersOrders.ordersDetails);
  const allProduct = useSelector((state) => state.allProduct.allProduct);
  const [keyFeatures, setKeyFeatures] = useState([]);
  const [imageURL, setImageUrl] = useState([]);
  const [feature, setFeature] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCatagory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brandColor, setBrandColor] = useState("");
  const [ram, setRam] = useState("");
  const [internalStorage, setInternalStorage] = useState("");
  const [overView, setOverView] = useState("");
  const navigate = useNavigate();

  const addProductHandler = () => {
    const product = {
      category: category,
      description: description,
      price: price,
      brandColor: brandColor,
      ram: ram,
      internalStorage: internalStorage,
      keyFeatures: keyFeatures,
      image: imageURL,
      overView: overView,
    };
    if (
      category &&
      description &&
      price &&
      brandColor &&
      ram &&
      internalStorage &&
      keyFeatures &&
      imageURL &&
      overView
    ) {
      dispatch(addProductToStore(product));
      setCatagory('');
      setDescription('');
      setPrice('');
      setBrandColor('');
      setRam('');
      setInternalStorage('');
      setOverView('');
      setKeyFeatures([]);
      setImageUrl([]);
    } else {
      console.log("enter all details");
    }
  };

  const removeProductHandler = (id) => {
    dispatch(removeProductFromStore(id));
  };
  return (
    <>
      <div className="bg-white max-h-screen px-28 z-[500] absolute top-0  bottom-0 text-black">
        <h1 className="text-center text-5xl">Seller Dashboard</h1>
        <h1 className="text-3xl font-black my-8">All Placed Orders :~</h1>
        <button
          type="button"
          className="px-2.5 py-1.5 rounded-2xl float-right bg-blue-500 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Go To Home Page
        </button>
        <div className=" flex justify-between items-center">
          <div className="w-3/4">
            {allOrders.map((order, index) => {
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
                    <p className="text-[12px]">{order.usersName}</p>
                    <p className="text-[12px]">{order.address}</p>
                    <p className="text-[12px]">{order.phoneNo}</p>
                  </div>
                  <p className="text-[12px]">order placed</p>
                </div>
              );
            })}
          </div>
        </div>
        <h1 className="text-3xl font-black my-8">Add a new Product :~</h1>
        <form className="flex flex-col gap-16 items-center bg-black/20 py-7 rounded-2xl text-3xl text-center">
          <div>
          <label htmlFor="category">Category :-</label>
          <select
            name="category"
            id="category"
            onChange={(e) => {
              setCatagory(e.target.value);
            }}
            value={category}
            className="bg-white py-1 px-2.5 rounded-2xl w-2xl"
          >
            <option value="">select ..</option>
            <option value="mobilePhone">Mobile Phone</option>
            <option value="laptop">Laptop</option>
            <option value="tablet">Tablet</option>
          </select>
          </div>
          <div>
          <label htmlFor="description">Description :-</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="bg-white py-1 px-2.5 rounded-2xl w-2xl"
          />
          </div>
          <div>
          <label htmlFor="price">price</label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Enter price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="bg-white py-1 px-2.5 rounded-2xl w-2xl"
          />
          </div>
          <div>
          <label htmlFor="brandColor">brand Color</label>
          <input
            type="text"
            name="brandColor"
            id="brandColor"
            onChange={(e) => setBrandColor(e.target.value)}
            placeholder="Enter brandColor"
            value={brandColor}
            className="bg-white py-1 px-2.5 rounded-2xl w-2xl"
          />
          </div>
          <div>
          <label htmlFor="ram">ram</label>
          <input
            type="text"
            name="ram"
            id="ram"
            placeholder="Enter ram"
            onChange={(e) => setRam(e.target.value)}
            value={ram}
            className="bg-white py-1 px-2.5 rounded-2xl w-2xl"
          />
          </div>
          <div>
          <label htmlFor="internalStorage">internalStorage</label>
          <input
            type="text"
            name="internalStorage"
            id="internalStorage"
            onChange={(e) => setInternalStorage(e.target.value)}
            placeholder="Enter internalStorage"
            value={internalStorage}
            className="bg-white py-1 px-2.5 rounded-2xl w-2xl"
          />
          </div>
          <div>
          <label htmlFor="overView">overView</label>
          <textarea
            name="overView"
            id="overView"
            cols={50}
            placeholder="enter overView"
            onChange={(e) => setOverView(e.target.value)}
            value={overView}
            className="bg-white py-1 px-2.5 rounded-2xl w-2xl"
          ></textarea>
          </div>
          <div>
          <label htmlFor="description">keyFeatures</label>
          <br />
          <div>
            {keyFeatures &&
              keyFeatures.map((v, index) => <p key={index}>{v}</p>)}
          </div>
          <br />
          <input
            type="text"
            name="keyFeatures"
            id="keyFeatures"
            placeholder="Enter keyFeatures"
            value={feature}
            onChange={(e) => setFeature(e.target.value)}
            className="bg-white py-1 px-2.5 rounded-2xl w-2xl"
          />
          <button
            type="button"
            className="bg-blue-600 cursor-pointer rounded-2xl py-1.5 px-3"
            onClick={() => {
              setKeyFeatures([...keyFeatures, feature]);
              setFeature("");
            }}
          >
            Add
          </button>
          </div>
          <div>
          <label htmlFor="imageURL">image url</label>
          <br />
          <div>
            {imageURL && imageURL.map((v, index) => <p key={index}>{v}</p>)}
          </div>
          <br />
          <input
            type="text"
            name="imageURL"
            id="imageURL"
            placeholder="Enter imageURL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-white py-1 px-2.5 rounded-2xl w-2xl"
          />
          <button
            type="button"
            className="bg-blue-600 cursor-pointer rounded-2xl py-1.5 px-3"
            onClick={() => {
              setImageUrl([...imageURL, url]);
              setUrl("");
            }}
          >
            Add
          </button>
          </div>
          <button
            type="button"
            className="bg-amber-500 px-1.5 py-3 rounded-2xl cursor-pointer"
            onClick={addProductHandler}
          >
            Add Product
          </button>
        </form>
        <h1 className="text-3xl font-black my-8">All Products</h1>
        <div className="text-black">
          {allProduct.map((product, index) => {
            return (
              <div
                key={index}
                className="my-4 py-1.5 px-5 rounded-2xl border-2 border-black"
              >
                <h1>{product.description}</h1>
                <h1>{product.price}</h1>
                <button
                  type="button"
                  className="bg-amber-500 px-1.5 py-3 rounded-lg text-[12px] cursor-pointer"
                  onClick={() => {
                    removeProductHandler(product.id);
                  }}
                >
                  Remove Product
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
