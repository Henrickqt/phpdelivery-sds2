import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api';
import { Location } from '../../types/locationType';
import { Product } from '../../types/productType';
import OrderLocation from '../../components/OrderLocation';
import ProductsList from '../../components/ProductsList';
import StepsHeader from '../../components/StepsHeader';
import './styles.css';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<Location>();

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
    </div>
  );
}

export default Orders;
