import { useState } from "react";

export default function EditProduct({ product, updateProduct, cancelEdit }) {
  const [name, setName] = useState(product.name);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct({ ...product, name, quantity });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button>Enregistrer</button>
      <button type="button" onClick={cancelEdit}>Annuler</button>
    </form>
  );
}