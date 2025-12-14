export default function ProductList({ products, deleteProduct, startEdit }) {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.name} - {p.quantity}

          {p.quantity < 5 && (
            <span style={{ color: "red", marginLeft: 10 }}>
              ⚠ Stock faible
            </span>
          )}

          <button onClick={() => startEdit(p)}>✏️
</button>
          <button onClick={() => deleteProduct(p.id)}>❌
</button>
        </li>
      ))}
    </ul>
  );
}