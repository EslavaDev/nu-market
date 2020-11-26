import { Dimensions, StyleSheet, ViewStyle } from 'react-native';
// import SearchLogo from '../../../assets/svg/search.svg';
// import CloseLogo from '../../../assets/svg/close.svg';

const commonsContainer: ViewStyle = {
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  width: 36,
  height: 36,
  zIndex: 3,
  top: 0,
};
export const searchStyledSheet = StyleSheet.create({
  inputText: {
    width: '100%',
    paddingHorizontal: 40,
    height: 40,
    borderColor: 'transparent',
    marginBottom: -4,
    backgroundColor: '#ffffff',
    borderRadius: 8
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  containerInput: {
    display: 'flex',
    width: Dimensions.get('window').width / 1.3,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLeft: {
    ...commonsContainer,
    left: 0,
  },
  containerRight: {
    ...commonsContainer,
    right: 0,
  },
});
