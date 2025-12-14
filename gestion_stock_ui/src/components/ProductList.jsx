export default function ProductList({ products, deleteProduct, startEdit }) {
  return (
    <ul className="space-y-3 overflow-auto max-h-[400px]">
      {products.map((p) => (
        <li
          key={p.id}
          className="flex justify-between items-center border rounded-lg px-4 py-3 bg-gray-50 hover:bg-gray-100 transition"
        >
          <div>
            <p className="font-semibold">{p.name}</p>
            <p className="text-sm text-gray-600">Quantité: {p.quantity}</p>
            {p.quantity < 5 && (
              <span className="text-red-500 text-sm font-medium">
                ⚠ Stock faible
              </span>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => startEdit(p)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            >
              ✏️
            </button>
            <button
              onClick={() => deleteProduct(p.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              ❌
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
