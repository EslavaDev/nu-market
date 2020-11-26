import React from 'react';
import { View } from 'react-native';
import { stylesRow } from './styles';

interface Props {
  children: React.ReactNode;
}

export const Row = ({ children }: Props) => {
  return <View style={[stylesRow.row]}>{children}</View>;
};
