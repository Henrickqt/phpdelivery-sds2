import { Product } from '../../types/productType';
import ProductCard from '../ProductCard';
import isProductSelected from '../../utils/isProductSelected';
import './styles.css';

type Props = {
  products: Product[];
  selectedProducts: Product[];
  onSelectProduct: (product: Product) => void;
}

function ProductsList({ products, selectedProducts, onSelectProduct }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map(product => 
          <ProductCard 
            key={product.id} 
            product={product} 
            isSelected={isProductSelected(selectedProducts, product)}
            onSelectProduct={onSelectProduct} 
          />
        )}
      </div>
    </div>
  );
}

export default ProductsList;
