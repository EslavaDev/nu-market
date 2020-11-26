interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface Catalog {
  id: number;
  price: int;
  product: Product;
}
/**
 * Catalog REDUCER ACTIONS
 */
type CatalogActions =
  | { type: '@@PRODUCT/LOAD_PRODUCT' }
  | { type: '@@PRODUCT/LOAD_PRODUCT_DONE'; payload: Catalog }
  | { type: '@@PRODUCT/LOAD_PRODUCT_FAILED' };

/**
 * Catalog REDUX STATE
 */
interface CatalogState {
  loading: boolean;
  catalog?: Array<Catalog>;
  mapCatalog: Record<string, Catalog>;
}
