import React from 'react';
import { stylesCategoryOptions } from './styles';
import { View } from 'react-native';
import SearchLogo from '../../../assets/svg/search.svg';

export const CategoryOptions = () => {
  return (
    <View style={[stylesCategoryOptions.wrapper]}>
      {new Array(3).fill(1).map((item) => (
        <View style={[stylesCategoryOptions.options]}>
          <SearchLogo color="#000" />
        </View>
      ))}
    </View>
  );
};
