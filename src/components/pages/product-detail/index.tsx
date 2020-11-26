import React, { useCallback, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { stylesProductDetail } from './styles';
import { SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsFlatList } from '../../organisms/product-flatlist';
import { CategoryOptions } from '../../molecules/category-options';
import { getMapCatalogData } from '../../../store/products/selectors';
import { ProductImage } from '../../molecules/product-image';
import { ButtonDecoration } from '../../atoms/button';
import { Row } from '../../atoms/row';
import { buyProduct } from '../../../store/products/actions';

type ProductDetailScreenRouteProp = RouteProp<RootStackParams, 'productDetail'>;

type ProductDetailScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'productDetail'
>;

interface Props {
  navigation: ProductDetailScreenNavigationProp;
  route: ProductDetailScreenRouteProp;
}

export const ProductDetail = () => {
  const mapCatalog = useSelector(getMapCatalogData);
  const { params } = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { id }: any = params;
  const productSelected = mapCatalog[id];
  const handlePurchase = useCallback(() => {
    dispatch(buyProduct(id));
    navigation.goBack();
  }, []);
  return (
    <SafeAreaView style={[stylesProductDetail.container]}>
      <ProductImage flag photoUrl={productSelected.product.image} />
      <View style={[stylesProductDetail.containerBody]}>
        <Text style={[stylesProductDetail.textTitle]}>
          {productSelected.product.name}
        </Text>
        <Text style={[stylesProductDetail.textDescription]}>
          {productSelected.product.description}
        </Text>
        <Row>
          <Text style={[stylesProductDetail.textPrice]}>Price: </Text>
          <Text style={[stylesProductDetail.textPrice]}>
            $ {productSelected.price}
          </Text>
        </Row>
      </View>
      <View style={stylesProductDetail.productDetailFooter}>
        <ButtonDecoration title="BUY" onPress={handlePurchase} />
      </View>
    </SafeAreaView>
  );
};
