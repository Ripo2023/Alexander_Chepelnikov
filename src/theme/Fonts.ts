import { StyleSheet } from 'react-native';
import { ThemeVariables } from 'types/theme';

export default function ({ FontSize, Colors }: ThemeVariables) {
  return StyleSheet.create({
    h1_1: {
      color: Colors.black,
      fontSize: FontSize.x16,
      lineHeight: FontSize.x24,
      fontWeight: '900',
    },
    h1_2: {
      color: Colors.black,
      fontSize: FontSize.x32,
      fontWeight: '600',
    },
    h2_1: {
      color: Colors.grey,
      fontSize: FontSize.x18,
      lineHeight: 20,
    },
    title1_regular: {
      fontSize: FontSize.x22,
      lineHeight: FontSize.x24,
    },
    title1_semibold: {
      fontWeight: '600',
      fontSize: FontSize.x22,
      lineHeight: FontSize.x24,
    },
    title1_heavy: {
      fontWeight: '900',
      fontSize: FontSize.x22,
      lineHeight: FontSize.x24,
    },
    title2_regular: {
      fontSize: FontSize.x20,
      lineHeight: FontSize.x24,
    },
    title2_semibold: {
      fontWeight: '600',
      fontSize: FontSize.x20,
      lineHeight: FontSize.x24,
    },
    title2_bold: {
      fontWeight: '900',
      fontSize: FontSize.x20,
      lineHeight: FontSize.x24,
    },
    text_regular: {
      fontSize: FontSize.x16,
      lineHeight: FontSize.x24,
    },
    text_semibold: {
      fontWeight: '600',
      fontSize: FontSize.x16,
      lineHeight: FontSize.x24,
    },
    caption1_regular: {
      fontSize: FontSize.x13,
      lineHeight: FontSize.x16,
    },
    caption1_semibold: {
      fontWeight: '600',
      fontSize: FontSize.x13,
      lineHeight: FontSize.x16,
    },
    caption2_regular: {
      fontSize: FontSize.x11,
      lineHeight: FontSize.x12,
    },
    caption2_semibold: {
      fontSize: FontSize.x11,
      fontWeight: '600',
      lineHeight: FontSize.x12,
    },
    textCenter: {
      textAlign: 'center',
    },
    textError: {},
    textSuccess: {},
    textPrimary: {},
  });
}
