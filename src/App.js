import Store from "./components/Store";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./shared/Navbar";
import ShopCart from "./components/ShopCart";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Store />} />
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </Provider>
  );
}

export default App;
