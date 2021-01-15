import axios from 'axios';

const API_URL = 'https://php-delivery.herokuapp.com';

export function fetchOrders() {
  return axios(`${API_URL}/orders`);
}

export function confirmDelivery(id: number) {
  return axios.put(`${API_URL}/orders/${id}/delivered`);
}
