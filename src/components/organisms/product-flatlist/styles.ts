import {
  percentageToDP,
  screenWidth,
  screenHeight,
} from './../../../helpers/responsive';
import { StyleSheet } from 'react-native';

export const stylesProfuctFlatList = StyleSheet.create({
  indicatorContainerLoading: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    zIndex: 100,
    height: percentageToDP(10, true),
  },
  indicatorContainer: {
    flex: 1,
  },
  productListContainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  productListContainer2: {
    backgroundColor: '#ffffff',

    marginHorizontal: 10,
    borderRadius: 8,
    padding: 10,
  },
  productFooterError: {
    flex: 1,
    height: 200,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  productListHeader: {
    flexDirection: 'row',
    paddingLeft: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  amount: {
    backgroundColor: '#82E0AA',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    minHeight: 100,
    margin: 10,
  },
  title: {
    color: '#99A3A4',
    fontWeight: 'bold',
    fontSize: 18,
    margin: 10,
  },
  textAmountName: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 22,
  },
  textAmount: {
    color: '#ffffff',
    fontSize: 18,
  },
  carouselContainer: {
    marginTop: 0,
    marginLeft: -10,
  },
  itemContainer: {
    width: screenWidth,
    height: screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
