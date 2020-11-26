import React, { useCallback, ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import IconClose from '../../../assets/svg/icon-close.svg';
import { stylesModalContainer } from './styles';

interface Props {
  children: ReactNode;
  onClose?: () => void;
}

export const ModalContainer = ({ children, onClose }: Props) => {
  const navigation = useNavigation();
  const handleClose = useCallback(() => {
    navigation.goBack();
    if (onClose) {
      onClose();
    }
  }, [navigation, onClose]);
  return (
    <SafeAreaView style={[stylesModalContainer.modalContainerWrapper]}>
      <View style={[stylesModalContainer.modalHeaderIndicatorWrapper]}>
        <View style={[stylesModalContainer.modalHeaderIndicator]} />
      </View>
      <View style={[stylesModalContainer.modalCloseContainer]}>
        <TouchableOpacity onPress={handleClose}>
          <IconClose color="#797979" width={16} height={16} />
        </TouchableOpacity>
      </View>
      <View style={[stylesModalContainer.modalContainer]}>
        <View style={[stylesModalContainer.modalSubContainer]}>{children}</View>
      </View>
    </SafeAreaView>
  );
};
