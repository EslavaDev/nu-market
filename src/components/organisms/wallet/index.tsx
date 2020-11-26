import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getCustomerData } from '../../../store/customer/selectors';
import { stylesWallet } from './styles';

export const Wallet = () => {
  const customer = useSelector(getCustomerData);

  return (
    <View style={[stylesWallet.amount]}>
      <Text style={[stylesWallet.textAmountName]}>
        {' '}
        Hello {customer.name} your cash!{' '}
      </Text>
      <Text style={[stylesWallet.textAmount]}>$ {customer.balance}</Text>
    </View>
  );
};
