import React, { useEffect, useRef, useState } from 'react';
import { ApplicationScreenProps } from 'types/navigation';
import useTheme from '../../hooks/useTheme';
import { Text, TouchableOpacity, View } from 'react-native';
import Back from '../../theme/assets/svg/Back';
import QRCode from 'react-native-qrcode-svg';
import Metrics from '../../theme/Metrics';
import Share from 'react-native-share';
import { useStoreSelector } from '../../store/hooks';
const Index = ({ navigation, route }: ApplicationScreenProps) => {
  const { Layout, Gutters, Fonts, Images, Colors } = useTheme();
  const ref = useRef<QRCode>();
  const { user }: any = useStoreSelector(state => state.userReducer);
  const [qr, setQR] = useState('');
  useEffect(() => {
    // @ts-ignore
    ref.current.toDataURL(data => setQR(data));
  }, [ref.current]);
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
          <Text style={[Fonts.textCenter, Fonts.title1_semibold]}>QR code</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
      <View style={[Layout.fullSize, Layout.center]}>
        <TouchableOpacity
          onPress={() => {
            Share.open({ url: `data:image/png;base64,${qr}` }).then(err =>
              console.log(err),
            );
          }}
        >
          <QRCode
            size={Metrics.getWidth(260)}
            getRef={c => (ref.current = c)}
            value={`${JSON.parse(user).phoneNumebr}\n${JSON.stringify(
              route.params.cart,
            )}`}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
