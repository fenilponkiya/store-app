import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Default } from "./components/Default";
import { Details } from "./components/Details";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";
import { Modal } from "./components/Modal";
import { Cart } from "./components/cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/page-not-found" element={<Default />} />
      </Routes>
      <Modal />
    </>
  );
}

export default App;
