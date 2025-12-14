import { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <h1>Gestion de Stock</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
}

export default App;
