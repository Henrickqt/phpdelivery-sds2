import axios from "axios";
import { OrderPayload } from './types/orderPayloadType';

const API_URL = 'https://php-delivery.herokuapp.com';

export function fetchProducts() {
  return axios(`${API_URL}/products`);
}

export function fetchLocalMapBox(local: string) {
  return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAPBOX}`);
}

export function saveOrder(payload: OrderPayload) {
  return axios.post(`${API_URL}/orders`, payload);
}
