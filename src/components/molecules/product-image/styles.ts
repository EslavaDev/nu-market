import { StyleSheet } from 'react-native';
import { percentageToDP } from '../../../helpers/responsive';

export const stylesImageProduct = StyleSheet.create({
  imageProduct: {
    width: percentageToDP(30),
    height: percentageToDP(30),
  },
  imageBig: {
    width: percentageToDP(50),
    height: percentageToDP(50),
  },
});
