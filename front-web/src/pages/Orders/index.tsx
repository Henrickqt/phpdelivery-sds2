import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchProducts, saveOrder } from '../../api';
import { Location } from '../../types/locationType';
import { Product } from '../../types/productType';
import OrderLocation from '../../components/OrderLocation';
import OrderSummary from '../../components/OrderSummary';
import ProductsList from '../../components/ProductsList';
import StepsHeader from '../../components/StepsHeader';
import isProductSelected from '../../utils/isProductSelected';
import './styles.css';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<Location>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(() => toast.warning('Erro ao listar produtos'));
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = isProductSelected(selectedProducts, product);
  
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }
  
    saveOrder(payload)
      .then((response) => {
        toast.error(`Pedido nº ${response.data.id} realizado com sucesso!`);
        setSelectedProducts([]);
      })
      .catch(() => toast.warning('Erro ao enviar pedido'));
  }

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList 
        products={products} 
        selectedProducts={selectedProducts} 
        onSelectProduct={handleSelectProduct} 
      />
      <OrderLocation 
        onChangeLocation={location => setOrderLocation(location)} 
      />
      <OrderSummary 
        amount={selectedProducts.length} 
        totalPrice={totalPrice} 
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Orders;
