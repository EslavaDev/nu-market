import { TextStyle, ViewStyle, StyleSheet } from 'react-native';

export const styledButtonDecoration = ({
  width,
  background,
  error,
  height,
}: ButtonModifier) => {
  const styles: Record<string, ViewStyle | TextStyle> = {
    text: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
    },
    container: {
      elevation: 8,
      backgroundColor: '#009688',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
  };
  if (width) {
    styles.container.width = width;
  }
  if (background) {
    styles.container.backgroundColor = background;
  }
  if (error) {
    styles.container.backgroundColor = 'red';
    styles.container.borderColor = 'red';
    styles.container.borderWidth = 1;
  }
  if (height) {
    styles.container.height = height;
  }
  return StyleSheet.create(styles);
};
