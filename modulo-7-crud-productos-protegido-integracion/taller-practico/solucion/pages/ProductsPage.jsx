import { useState } from 'react';
import { useProducts } from '../ejercicios/03-hooks-crud';
import { ProductForm } from '../components/ProductForm';
import { ProductList } from '../components/ProductList';

export const ProductsPage = () => {
  const { products, loading, error, addProduct, editProduct, removeProduct } = useProducts();
  const [editingProduct, setEditingProduct] = useState(null);

  const handleFormSubmit = async (data) => {
    if (editingProduct) {
      await editProduct(editingProduct.id, data);
      setEditingProduct(null);
    } else {
      await addProduct(data);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  return (
    <div className="page-container">
      <h1>Módulo CRUD de Productos Protegido</h1>

      {error && <div className="alert-error">{error}</div>}

      <ProductForm
        onSubmit={handleFormSubmit}
        initialData={editingProduct}
        onCancel={handleCancelEdit}
      />

      {loading ? (
        <p>Cargando lista de productos...</p>
      ) : (
        <ProductList
          products={products}
          onEdit={handleEditClick}
          onDelete={removeProduct}
        />
      )}
    </div>
  );
};
