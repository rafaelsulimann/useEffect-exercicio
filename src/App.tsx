import { useEffect, useState } from 'react';
import * as productService from './data';

export default function App() {

  const [productId, setProductId] = useState(1);
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    setProduct(productService.findById(productId));
  }, [productId]);

  function handleClick() {
    setProductId(productId + 1);
  }

  return (
    <main className="app">
      <section className="product-infos">
        <h1>{product?.name}</h1>
        <p>{product?.price}</p>
      </section>
      <section className="button-increment-id">
        <button onClick={handleClick}>Increment ID</button>
      </section>
    </main>
  );
}

