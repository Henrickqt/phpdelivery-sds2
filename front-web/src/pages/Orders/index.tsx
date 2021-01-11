import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api';
import { Product } from '../../types/productType';
import ProductsList from '../../components/ProductsList';
import StepsHeader from '../../components/StepsHeader';
import './styles.css';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
    </div>
  );
}

export default Orders;
