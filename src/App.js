import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import ShopPage from "./pages/shop";
import CartPage from "./pages/cart";
import NewProductPage from "./pages/newproduct";
// import { useSelector } from "react-redux";

function App() {
  // const user = useSelector((state) => state.user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/new-product" element={<NewProductPage />} />
        {/* <Route path="/confirm" element={<ConfirmPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
