import { useState, useEffect } from "react";
import Header from "./components/Header";
import Productlist from "./components/Productlist";
import Basket from "./components/Basket";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <Header />
      <Productlist products={products} />
      <Basket products={products} />
    </div>
  );
}

export default App;
