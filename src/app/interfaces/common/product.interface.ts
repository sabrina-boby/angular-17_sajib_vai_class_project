export interface Product {
  _id: string;
  name?: string;
  slug?: string;
  costPrice?: number;
  salePrice?: number;
  discountType?: number;
  discountAmount?: number;
  images?: string[];
}
