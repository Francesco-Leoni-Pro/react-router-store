import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Prodotti</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price} $</p>
            <img src={product.image} alt={product.title} width={100} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Products;