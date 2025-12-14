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
    alert("Produit ajouté avec succès ✅");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    alert("Produit supprimé ❌");
  };

  const startEdit = (product) => {
    setEditingProduct(product);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditingProduct(null);
    alert("Produit modifié ✏️");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-600">
          Gestion de Stock
        </h1>

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
    </div>
  );
}

export default App;
