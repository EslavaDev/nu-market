import { Dimensions, PixelRatio } from 'react-native';

export const screenWidth = Dimensions.get('window').width;

export const screenHeight = Dimensions.get('window').height;

export const percentageToDP = (percent: number, height: boolean = false) => {
  const elem = typeof percent === 'number' ? percent : parseFloat(percent);
  const size = height ? screenHeight : screenWidth;
  return PixelRatio.roundToNearestPixel((size * elem) / 100);
};
