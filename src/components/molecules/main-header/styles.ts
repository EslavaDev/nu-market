import { Platform, StyleSheet } from 'react-native';

export const stylesMainHeader = StyleSheet.create({
  mainHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 10,
    paddingTop: Platform.select({
      android: 10,
      ios: 0,
    }),
  },
  mainHeaderInputcontainer: {
    flexGrow: 1,
    marginVertical: 0,
    marginRight: 40,
  },
});
