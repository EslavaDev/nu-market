import React, { useEffect, useRef } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { styles } from './styles';
import {
  ActivityIndicator,
  SafeAreaView,
  SafeAreaViewBase,
  Text,
  View,
} from 'react-native';
import { MainHeader } from '../../molecules/main-header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomer } from '../../../store/customer/actions';
import { fetchProducts } from '../../../store/products/actions';
import { ProductsFlatList } from '../../organisms/product-flatlist';
import SearchLogo from '../../../assets/svg/search.svg';
import { CategoryOptions } from '../../molecules/category-options';
import { Wallet } from '../../organisms/wallet';
import { getLoaderCustomer } from '../../../store/customer/selectors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type CatalogScreenRouteProp = RouteProp<RootStackParams, 'catalog'>;

type CatalogScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'catalog'
>;

interface Props {
  navigation: CatalogScreenNavigationProp;
  route: CatalogScreenRouteProp;
}

export const CatalogScreen = () => {
  const dispatch = useDispatch();
  const loadingCustomer = useSelector(getLoaderCustomer);
  useEffect(() => {
    dispatch(fetchCustomer());
  }, []);

  if (loadingCustomer) {
    return (
      <View style={[styles.loader]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <SafeAreaView style={[styles.catalogContainer]}>
      <MainHeader handleSearch={() => {}} />
      <CategoryOptions />
      <KeyboardAwareScrollView>
        <Wallet />

        <ProductsFlatList />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
