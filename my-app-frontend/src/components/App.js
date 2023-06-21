// import "./App.css";
import "@picocss/pico";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home.js";
import About from "./About";
import Shop from "../container/Shop";
import Cart from "../container/Cart";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    try {
      fetch("http://localhost:9090/categories")
        .then((r) => r.json())
        .then((data) => setItems(data));
    } catch (error) {
      alert(error);
    }
  }, []);
  return (
    <div className="App">
      <Navigation />
      <aside>
        <Cart />
      </aside>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/shop" element={<Shop items={items} />} />
      </Routes>
    </div>
  );
}

export default App;