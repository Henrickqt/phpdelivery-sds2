import { Product } from '../../types/productType';
import formatPrice from '../../utils/formatPrice';
import './styles.css';

type Props = {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <div className="order-card-container">
      <h3 className="order-card-title">
        {product.name}
      </h3>
      <img src={product.imageUri} alt={product.name} className="order-card-image" />
      <h3 className="order-card-price">
        {formatPrice(product.price)}
      </h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
