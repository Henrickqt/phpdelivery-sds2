import axios from "axios";

const API_URL = 'https://php-delivery.herokuapp.com';

export function fetchProducts() {
  return axios(`${API_URL}/products`);
}

export function fetchLocalMapBox(local: string) {
  return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAPBOX}`);
}
