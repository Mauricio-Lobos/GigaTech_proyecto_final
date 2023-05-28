import { useContext } from "react";
import { Context, Provider } from "./Context/Provider";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";

import GlobalNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Login from "./Pages/LogIn";
import RegisterUser from "./Pages/RegisterUser";
import Cart from "./Pages/ShoppingCart";
import PostAndUpdateProducts from "./Pages/PostAndUpdateProducts";
import ManagePost from "./Pages/ManagePost";
import ManagePurshcase from "./Pages/ManagePurchase";
import Favorites from "./Pages/Favorites";
import ProductDetails from "./Pages/ProductDetails";


function App() {
  const { user, users } = useContext(Context);

  return (
    <div>
      <GlobalNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/registerUser" element={!user ? <RegisterUser /> : <Navigate to="/" />} />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/favorites" element={user ? <Favorites /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/post_form" element={user ? <PostAndUpdateProducts /> : <Navigate to="/login" />} />
        <Route path="/post_form/:id" element={user ? <PostAndUpdateProducts /> : <Navigate to="/login" />} />
        <Route path="/manage_post" element={user ? <ManagePost /> : <Navigate to="/login" />} />
        <Route path="/manage_purchase" element={user ? <ManagePurshcase /> : <Navigate to="/login" />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
