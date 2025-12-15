import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) {
    return <p>Caricamento prodotto...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px", marginBottom: "20px" }}
      />

      <p>{product.description}</p>
      <p><strong>Prezzo:</strong> {product.price} €</p>
      <p><strong>Categoria:</strong> {product.category}</p>
    </div>
  );
}

export default ProductDetail;