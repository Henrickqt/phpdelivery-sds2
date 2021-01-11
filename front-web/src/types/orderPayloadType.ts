import { Location } from './locationType';

type ProductId = {
  id: number;
}

export type OrderPayload = {
  products: ProductId[];
} & Location;
