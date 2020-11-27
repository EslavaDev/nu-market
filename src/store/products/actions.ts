import { updateBalance } from '../customer/actions';
import { mapperCatalog, mapperCatalogRecord } from './mapper';

export const fetchProducts: AsyncAction = () => {
  return async (dispatch, _getState, { ProductService }) => {
    dispatch({
      type: '@@PRODUCT/LOAD_PRODUCT',
    });
    try {
      const { data } = await ProductService.getProductCatalog();

      const catalog = mapperCatalog(data);
      const mapCatalog = mapperCatalogRecord(data);
      dispatch({
        type: '@@PRODUCT/LOAD_PRODUCT_DONE',
        payload: { catalog, mapCatalog },
      });
    } catch (error) {
      dispatch({
        type: '@@PRODUCT/LOAD_PRODUCT_FAILED',
        error: 'Error al consultar los dproductos',
      });
    }
  };
};
export const buyProduct: AsyncAction = (id: string) => {
  return async (dispatch, _getState, { ProductService }) => {
    try {
      const { data, errors } = await ProductService.buyProduct(id);

      if (errors) {
        throw errors;
      }
      if (data.purchase?.errorMessage) {
        throw data.purchase?.errorMessage;
      }

      dispatch(updateBalance(data.purchase?.customer?.balance || 0));
    } catch (error) {
      dispatch({
        type: '@@PRODUCT/LOAD_PRODUCT_FAILED',
        error,
      });
    }
  };
};
