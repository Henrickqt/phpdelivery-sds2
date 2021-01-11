import axios from "axios";
import { OrderPayload } from './types/orderPayloadType';

const API_URL = process.env.REACT_APP_API_URL_PROD;
const TOKEN_MAPBOX = process.env.REACT_APP_ACCESS_TOKEN_MAPBOX;

export function fetchProducts() {
  return axios(`${API_URL}/products`);
}

export function fetchLocalMapBox(local: string) {
  return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${TOKEN_MAPBOX}`);
}

export function saveOrder(payload: OrderPayload) {
  return axios.post(`${API_URL}/orders`, payload);
}
