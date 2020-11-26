import React from 'react';
import { Image } from 'react-native';
import { stylesImageProduct } from './styles';

interface Props {
  photoUrl: string;
  flag?: boolean;
}

export const ProductImage = ({ photoUrl, flag }: Props) => {
  let style = stylesImageProduct.imageProduct;
  if (flag) {
    style = stylesImageProduct.imageBig;
  }
  return (
    <Image source={{ uri: photoUrl }} resizeMode="contain" style={[style]} />
  );
};
