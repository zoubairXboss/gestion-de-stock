import { useState } from "react";

export default function ProductForm({ addProduct }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ id: Date.now(), name, quantity });
    setName("");
    setQuantity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 mb-6"
    >
      <input
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Nom du produit"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        className="w-full sm:w-32 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Qté"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />

      <button className="bg-green-500 hover:bg-green-600 transition rounded px-4 py-2 text-white">
        Ajouter
      </button>
    </form>
  );
}
