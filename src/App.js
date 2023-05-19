import "bootstrap/dist/css/bootstrap.min.css";

import Profile from "./Pages/Profile"
import GlobalNavbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/LogIn";
import RegisterUser from "./Pages/RegisterUser";
import Cart from "./Pages/ShoppingCart";
import CreatePost from "./Pages/CreatePost"
import ManagePost from "./Pages/ManagePost"
import ManagePurshcase from "./Pages/ManagePurchase"
import Favorites from "./Pages/Favorites";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./Context/Provider";
import ProductDetails from "./Pages/ProductDetails";


function App() {
  return (
    <div>
      <Provider>
      <BrowserRouter>
        <GlobalNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerUser" element={<RegisterUser />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={ <ProductDetails />} />
          <Route path="/favorites" element={ <Favorites />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create_post" element={<CreatePost />}/>
          <Route path="/manage_post"  element={<ManagePost />}/>
          <Route path="/manage_purchase"  element={<ManagePurshcase />}/>

        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
