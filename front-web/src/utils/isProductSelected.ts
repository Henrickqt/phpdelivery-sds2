import { Product } from './../types/productType';

function isProductSelected(selectedProducts: Product[], product: Product) {
  return selectedProducts.some(item => item.id === product.id);
}

export default isProductSelected;
