import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, ActivityIndicator, View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { stylesProfuctFlatList } from './styles';
import { fetchProducts } from '../../../store/products/actions';
import {
  getCatalogData,
  getLoaderCatalog,
} from '../../../store/products/selectors';
import { ButtonDecoration } from '../../atoms/button';
import { ProductThumbnail } from '../product-thumbnail';
import { screenWidth } from '../../../helpers/responsive';
import { animatedStyles, scrollInterpolator } from '../../../helpers/animation';

export const ProductsFlatList = () => {
  const [catalogMode, setCatalogMode] = useState(false);
  let carousel;
  const dispatch = useDispatch();
  const products = useSelector(getCatalogData);
  const loadingProducts = useSelector(getLoaderCatalog);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleRefresh = useCallback(async () => {
    await dispatch(fetchProducts());
  }, [dispatch]);

  let footer = null;

  if (loadingProducts && products && products.length > 0) {
    footer = (
      <View style={[stylesProfuctFlatList.indicatorContainerLoading]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={[stylesProfuctFlatList.productListContainer]}>
      <View>
        <Text style={[stylesProfuctFlatList.title]}> Destacados </Text>
        <Carousel
          ref={(c) => {
            carousel = c;
          }}
          data={products as Catalog[]}
          renderItem={(data: any) => (
            <ProductThumbnail
              productInShoppingCart={false}
              catalogMode={catalogMode}
              {...data.item}
            />
          )}
          sliderWidth={screenWidth}
          itemWidth={Math.round(screenWidth * 0.5)}
          containerCustomStyle={stylesProfuctFlatList.carouselContainer}
          inactiveSlideShift={2}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          layoutCardOffset={18}
          useScrollView={true}
        />
      </View>
      <Text style={[stylesProfuctFlatList.title]}> Products </Text>
      <View style={[stylesProfuctFlatList.productListContainer2]}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductThumbnail
              productInShoppingCart={false}
              catalogMode={catalogMode}
              {...item}
            />
          )}
          numColumns={catalogMode ? 1 : 2}
          key={catalogMode ? 'H' : 'V'}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            !loadingProducts ? (
              <View style={[stylesProfuctFlatList.productFooterError]}>
                <Text>
                  No hemos podido cargar productos, intenta de nuevo…,
                </Text>
                <ButtonDecoration
                  onPress={handleRefresh}
                  title="Volver a cargar"
                />
              </View>
            ) : null
          }
          ListHeaderComponent={
            loadingProducts ? (
              <View style={[stylesProfuctFlatList.indicatorContainer]}>
                <ActivityIndicator size="large" />
              </View>
            ) : null
          }
          ListFooterComponent={footer}
        />
      </View>
    </View>
  );
};
