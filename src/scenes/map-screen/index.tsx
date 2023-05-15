import React from 'react';
import { ApplicationScreenProps } from 'types/navigation';
import useTheme from '../../hooks/useTheme';
import { Text, TouchableOpacity, View } from 'react-native';
import Back from '../../theme/assets/svg/Back';
import YaMap, { Marker } from 'react-native-yamap';

const Index = ({ navigation }: ApplicationScreenProps) => {
  const { Layout, Gutters, Fonts, Images, Colors } = useTheme();
  return (
    <View
      style={[
        Layout.fullSize,
        { backgroundColor: 'white' },
        Gutters.x12HPadding,
      ]}
    >
      <View
        style={[
          Gutters.x20BMargin,
          Gutters.x24TMargin,
          Layout.row,
          Layout.center,
        ]}
      >
        <View style={[{ flex: 1 }]}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Back />
          </TouchableOpacity>
        </View>
        <View style={[Layout.center, { flex: 1 }]}>
          <Text style={[Fonts.textCenter, Fonts.title1_semibold]}>Map</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
      <YaMap
        userLocationIcon={{
          uri: 'https://www.clipartmax.com/png/middle/180-1801760_pin-png.png',
        }}
        initialRegion={{
          lat: 53.932654,
          lon: 27.511167,
          zoom: 17,
        }}
        style={[Layout.fill]}
      >
        <Marker point={{ lat: 53.932654, lon: 27.511167 }} />
      </YaMap>
    </View>
  );
};

export default Index;
