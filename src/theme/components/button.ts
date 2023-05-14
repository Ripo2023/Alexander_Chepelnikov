import { CommonParams } from 'types/theme';
import { StyleSheet } from 'react-native';

export default function <C>({ Colors }: CommonParams<C>) {
  const base = {
    width: '100%',
    borderRadius: 8,
  };

  return StyleSheet.create({
    base,
    loginSocial: {
      ...base,
    },
    second: {
      borderRadius: 4,
      alignSelf: 'center',
    },
  });
}
