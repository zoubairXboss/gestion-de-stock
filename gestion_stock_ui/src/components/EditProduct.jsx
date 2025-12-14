import { useState } from "react";

export default function EditProduct({ product, updateProduct, cancelEdit }) {
  const [name, setName] = useState(product.name);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct({ ...product, name, quantity });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 mb-6 bg-yellow-50 p-4 rounded-lg"
    >
      <input
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        className="w-full sm:w-32 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />

      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
      >
        Enregistrer
      </button>

      <button
        type="button"
        onClick={cancelEdit}
        className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
      >
        Annuler
      </button>
    </form>
  );
}
