export const mapperCatalog = (values: Record<string, any>): Array<Catalog> => {
  const { viewer } = values;
  return viewer.offers?.map((item: Catalog) => {
    return {
      id: item.id,
      price: item.price,
      product: item.product,
    };
  });
};
export const mapperCatalogRecord = (
  values: Record<string, any>,
): Record<string, Catalog> => {
  const { viewer } = values;
  const catalog: Record<string, Catalog> = {};
  viewer.offers?.forEach((item: Catalog) => {
    catalog[item.id] = {
      id: item.id,
      price: item.price,
      product: item.product,
    };
  });
  return catalog;
};
