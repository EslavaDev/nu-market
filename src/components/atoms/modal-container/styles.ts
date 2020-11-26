import { StyleSheet } from 'react-native';
import { percentageToDP } from '../../../helpers/responsive';

export const stylesModalContainer = StyleSheet.create({
  modalContainerWrapper: {
    position: 'absolute',
    bottom: 0,
    width: percentageToDP(100),
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalHeaderIndicatorWrapper: {
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 10,
  },
  modalHeaderIndicator: {
    width: 20,
    height: 3,
  },
  modalCloseContainer: {
    paddingVertical: 0,
    paddingHorizontal: 15,
    alignItems: 'flex-end',
  },
  modalContainer: {
    width: percentageToDP(100),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalSubContainer: {
    width: percentageToDP(90),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
