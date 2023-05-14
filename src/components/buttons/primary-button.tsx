import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import useTheme from '../../hooks/useTheme';
interface Props {
  title: string;
  onPress: () => void;
}

const PrimaryButton = ({ title, onPress }: Props) => {
  const { Images, Layout, Gutters, Fonts, Colors, Common } = useTheme();
  return (
    <TouchableOpacity
      style={[
        Gutters.x16VPadding,
        Gutters.x16HMargin,
        { backgroundColor: Colors.midGrey, borderRadius: 12 },
      ]}
      onPress={onPress}
    >
      <Text
        style={[Fonts.textCenter, Fonts.title1_semibold, { color: 'white' }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
