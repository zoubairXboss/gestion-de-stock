import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <h1>Gestion de Stock</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
