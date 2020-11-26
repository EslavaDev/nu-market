import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ModalContainer } from '../../atoms/modal-container';
import { Text, View } from 'react-native';
import { ProductImage } from '../../molecules/product-image';
import { getMapCatalogData } from '../../../store/products/selectors';
import { ButtonDecoration } from '../../atoms/button';
import { useDebounce } from '../../../hooks/use-debounce';
import { Row } from '../../atoms/row';
export const ProductPreviewView = () => {
  const dispatch = useDispatch();
  const mapCatalog = useSelector(getMapCatalogData);
  const { params } = useRoute();
  const navigation = useNavigation();
  const { id }: any = params;
  const debouncedValue = useDebounce(false, 3000);

  useEffect(() => {
    if (!id) {
      navigation.goBack();
    }
  }, [id]);
  useEffect(() => {
    if (debouncedValue) {
      navigation.goBack();
    }
  }, [debouncedValue]);

  const productSelected = mapCatalog[id];

  return (
    <ModalContainer>
      {productSelected && (
        <>
          <ProductImage flag photoUrl={productSelected.product.image} />
          <Row>
            <Text>Nombre: </Text>
            <Text>{productSelected.product.name}</Text>
          </Row>
          <Text>{productSelected.product.description}</Text>

          <Row>
            <Text>Precio: </Text>
            {}
            <Text>$ {productSelected.price}</Text>
          </Row>
        </>
      )}
    </ModalContainer>
  );
};
