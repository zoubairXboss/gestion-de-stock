export default function ProductList({ products, deleteProduct }) {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.name} - {p.quantity}
          <button onClick={() => deleteProduct(p.id)}>❌
</button>
        </li>
      ))}
    </ul>
  );
}