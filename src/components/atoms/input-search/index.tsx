import React, { useCallback } from 'react';
import { TextInput, TouchableWithoutFeedback, View } from 'react-native';
import SearchLogo from '../../../assets/svg/search.svg';
import CloseLogo from '../../../assets/svg/close.svg';
import { searchStyledSheet } from './styles';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const InputSearch = ({ value, onChange }: Props) => {
  const handleClear = useCallback(() => {
    onChange('');
  }, [onChange]);

  return (
    <View style={searchStyledSheet.container}>
      <View style={searchStyledSheet.containerInput}>
        <View style={searchStyledSheet.containerLeft}>
          <SearchLogo color="#000" />
        </View>
        <TextInput
          placeholder="Buscar"
          value={value}
          onChangeText={onChange}
          style={searchStyledSheet.inputText}
        />
        {value.length > 0 && (
          <TouchableWithoutFeedback onPress={handleClear}>
            <View>
              <CloseLogo
                color="#ffffff"
                style={searchStyledSheet.containerRight}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
};
