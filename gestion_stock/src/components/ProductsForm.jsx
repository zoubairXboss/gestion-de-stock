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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nom du produit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantité"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button>Ajouter</button>
    </form>
  );
}