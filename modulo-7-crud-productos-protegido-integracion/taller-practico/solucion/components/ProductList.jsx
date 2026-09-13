export const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="crud-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5">No hay productos registrados.</td>
            </tr>
          ) : (
            products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>${p.price}</td>
                <td>{p.category}</td>
                <td>
                  <button onClick={() => onEdit(p)} className="btn-edit">Editar</button>
                  <button onClick={() => onDelete(p.id)} className="btn-delete">Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
