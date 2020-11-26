import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { CatalogScreen } from '../components/pages/catalog';
import { ProductDetail } from '../components/pages/product-detail';

const Stack = createStackNavigator();

type ScreenRouteProp = RouteProp<RootStackParams, 'Main'>;

type Props = {
  route: ScreenRouteProp;
};

export const PrivateStackNavigation = ({ route: { params } }: Props) => (
  <Stack.Navigator
    initialRouteName={params.initialRoute}
    screenOptions={() => ({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    })}>
    <Stack.Screen
      name="main"
      component={CatalogScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="productDetail"
      component={ProductDetail}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
