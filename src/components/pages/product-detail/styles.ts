import { StyleSheet } from 'react-native';
import { percentageToDP } from '../../../helpers/responsive';

export const stylesProductDetail = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    width: percentageToDP(100),
  },
  containerBody: {
    flex: 1,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'relative',
    alignItems: 'center',
    width: percentageToDP(90),
  },
  productDetailFooter: {
    display: 'flex',
    position: 'absolute',
    width: percentageToDP(90),
    bottom: 30,
  },
  textTitle: {
    color: '#797979',
    marginVertical: 15,
    fontWeight: 'bold',
    fontSize: 35,
  },
  textDescription: {
    color: '#797979',
    marginVertical: 5,
    fontSize: 20,
    textAlign: 'center',
  },
  textPrice: {
    color: '#000000',
    fontWeight: 'bold',
    marginVertical: 20,
    fontSize: 20,
  },
});
