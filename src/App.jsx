import "./App.css";
import ProductCard from "./pages/ProductCard";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  HashRouter,
} from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SellerLogin from "./pages/SellerLogin";
import CompleteOrder from "./pages/CompleteOrder";
import MyOrders from "./pages/MyOrders";
import { useDispatch } from "react-redux";
import { updateCartFromLocalStorage } from "./store/cartSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import MyProfile from "./pages/MyProfile";
import SellerDashboard from "./pages/SellerDashboard";
import { observeAuth } from "./store/userSlice";
import { getUsersOrders } from "./store/allUsersOrders";
import { getAllProduct } from "./store/allProductSlice";

function App() {
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.allProduct.allProduct);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(observeAuth());
    dispatch(getUsersOrders());
    dispatch(getAllProduct());
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(updateCartFromLocalStorage(user.uid));
    }
  }, [user]);
  // useEffect(() => {
  //     console.log(allProduct);
  // }, [allProduct]);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="sellerLogin" element={<SellerLogin />} />
            <Route path="productCard" element={<ProductCard />} />
            <Route path="cart" element={<Cart />} />
            <Route path="completeOrder" element={<CompleteOrder />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="myProfile" element={<MyProfile />} />
          </Route>
          <Route path="/sellerDashboard" element={<SellerDashboard />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
