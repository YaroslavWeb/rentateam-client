import { IProduct } from './product';

export interface ICategory {
  id: string;
  name: string;
  products: IProduct[];
}
