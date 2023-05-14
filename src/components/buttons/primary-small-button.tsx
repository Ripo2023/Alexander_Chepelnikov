import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import useTheme from '../../hooks/useTheme';

interface Props {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  onPress: (...args: any[]) => void;
}

const PrimarySmallButton = ({
  backgroundColor,
  textColor,
  borderColor,
  onPress,
}: Props) => {
  const { Images, Layout, Gutters, Fonts, Colors, Common } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Gutters.x8VPadding,
        {
          backgroundColor: backgroundColor,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: borderColor,
        },
      ]}
    >
      <Text
        style={[Fonts.text_semibold, { color: textColor }, Fonts.textCenter]}
      >
        Select
      </Text>
    </TouchableOpacity>
  );
};

export default PrimarySmallButton;
