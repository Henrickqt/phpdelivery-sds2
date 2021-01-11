import axios from "axios";

const API_URL = 'https://php-delivery.herokuapp.com';

export function fetchProducts() {
  return axios(`${API_URL}/products`);
}
