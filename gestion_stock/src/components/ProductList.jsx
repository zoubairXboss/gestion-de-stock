export default function ProductList({ products }) {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.name} - {p.quantity}
        </li>
      ))}
    </ul>
  );
}