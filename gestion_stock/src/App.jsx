import { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import EditProduct from "./components/EditProduct";

function App() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const startEdit = (product) => {
    setEditingProduct(product);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map(p => p.id === updatedProduct.id ? updatedProduct : p)
    );
    setEditingProduct(null);
  };

  return (
    <div>
      <h1>Gestion de Stock</h1>

      {editingProduct ? (
        <EditProduct
          product={editingProduct}
          updateProduct={updateProduct}
          cancelEdit={() => setEditingProduct(null)}
        />
      ) : (
        <ProductForm addProduct={addProduct} />
      )}

      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        startEdit={startEdit}
      />
    </div>
  );
}

export default App;
