import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  catalogContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
  },
  loader: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  options: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
