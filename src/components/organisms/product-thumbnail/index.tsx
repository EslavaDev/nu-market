import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styledProductThumbnail } from './styles';
import { ProductImage } from '../../molecules/product-image';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { buyProduct } from '../../../store/products/actions';

interface Props extends Catalog {
  catalogMode?: boolean;
  presentation?: string[];
  productInShoppingCart: boolean;
}

export const ProductThumbnail = (props: Props) => {
  const {
    catalogMode,
    presentation,
    productInShoppingCart,
    price,
    id,
    product: { image, name },
  } = props;
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const [showProductVariants, setShowProductVariants] = useState(false);
  const [hideProductActions, setHideProductActions] = useState(false);

  const handleRedirectProductPreviewView = useCallback(() => {
    navigate({
      name: 'productPreviewView',
      params: {
        id: id,
      },
    });
  }, [navigate]);
  const handleRedirectProductDetail = useCallback(() => {
    navigate({
      name: 'productDetail',
      params: {
        id: id,
      },
    });
  }, [navigate]);

  let styles = styledProductThumbnail({
    catalogMode: !!catalogMode,
    showProductVariants,
    active: productInShoppingCart && !showProductVariants,
  });

  return (
    <TouchableOpacity
      style={[styles.productThumbnailContainer]}
      onLongPress={handleRedirectProductPreviewView}
      onPress={handleRedirectProductDetail}>
      <View style={[styles.productAdded]}>
        <View style={[styles.productContent]}>
          <TouchableOpacity
            onLongPress={handleRedirectProductPreviewView}
            onPress={handleRedirectProductDetail}
            style={[styles.productImageContainer]}>
            <ProductImage photoUrl={image} />
            <View>
              <Text style={[styles.text]}>{name}</Text>
              <Text style={[styles.text]}>{price}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
