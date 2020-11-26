import React, { useEffect } from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import { styledButtonDecoration } from './styles';

interface ButtonProps extends ButtonModifier {
  onPress: any;
  title: string;
}

export const ButtonDecoration = ({ onPress, title, ...rest }: ButtonProps) => {
  const styles = styledButtonDecoration(rest);
  return (
    <TouchableOpacity onPress={() => onPress()} style={[styles.container]}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};
