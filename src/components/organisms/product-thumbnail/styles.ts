import { percentageToDP } from './../../../helpers/responsive';
import { ViewStyle, TextStyle, StyleSheet } from 'react-native';

interface Props {
  catalogMode: boolean;
  productAddedToShoppingCart?: boolean;
  showProductVariants?: boolean;
  active?: boolean;
}

export const styledProductThumbnail = ({
  active,
  catalogMode,
  showProductVariants,
}: Props) => {
  const styles: Record<string, ViewStyle | TextStyle> = {
    productThumbnailContainer: {
      backgroundColor: '#f4f4f4',
      position: 'relative',
      paddingBottom: 5,
      paddingLeft: 0,
      paddingRight: 5,
      marginVertical: 15,
      paddingTop: 0,
      borderRadius: 7,
      height: percentageToDP(30, true),
      elevation: 4,
      width: percentageToDP(40),
      margin: 7,
      shadowColor: 'black',
      shadowOffset: {
        height: 1,
        width: 3,
      },
      shadowOpacity: 0.1,
      zIndex: 1,
    },
    productAdded: {
      opacity: 1,
    },
    productImageContainer: {
      alignSelf: 'stretch',
      alignItems: 'center',
      paddingVertical: 0,
      paddingHorizontal: 10,
      display: 'flex',
      justifyContent: 'space-around',
      height: '100%',
      alignContent: 'center',
    },
    productContent: {
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    text: {
      fontSize: 19,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  };
  if (active) {
    styles.productAdded.opacity = 0.5;
  }
  if (catalogMode) {
    styles.productContent.flexDirection = 'row';
    styles.productThumbnailContainer.paddingBottom = 35;
    styles.productThumbnailContainer.paddingTop = 0;
    styles.productThumbnailContainer.paddingLeft = 0;
    styles.productThumbnailContainer.paddingRight = 0;
    styles.productThumbnailContainer.width = percentageToDP(93);
  }
  if (catalogMode && !showProductVariants) {
    styles.productThumbnailContainer.height = percentageToDP(42);
  }
  return StyleSheet.create(styles);
};
