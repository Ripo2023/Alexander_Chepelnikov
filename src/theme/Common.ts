/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { CommonParams } from 'types/theme';
import { StyleSheet } from 'react-native';
import button from './components/button';

export default function <C>({ Colors, Fonts, ...args }: CommonParams<C>) {
  return {
    button: button({ Colors, Fonts, ...args }),
    ...StyleSheet.create({
      textInput: {
        width: '100%',
        borderRadius: 8,
        alignSelf: 'center',
        lineHeight: undefined,
      },
    }),
  };
}
