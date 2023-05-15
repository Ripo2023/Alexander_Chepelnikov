import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  VirtualizedList,
} from 'react-native';
import Back from '../../theme/assets/svg/Back';
import useTheme from '../../hooks/useTheme';
import { ApplicationScreenProps } from 'types/navigation';
import Metrics from '../../theme/Metrics';
import PrimarySmallButton from '../../components/buttons/primary-small-button';
import PrimaryButton from '../../components/buttons/primary-button';
import { useStoreDispatch } from "../../store/hooks";
import { addToCart, setCart } from "../../store/reducers/cart";
import { addOrder } from "../../store/reducers/orders";

//
const calcSum = (arr: any)=> {
  let sum = 0;
  arr.map((item: any) => sum+=item);
  return sum;
}

const Index = ({ navigation, route }: ApplicationScreenProps) => {
  const { cart, id } = route.params
  const { Layout, Gutters, Fonts, Images, Colors } = useTheme();
  const dispatch = useStoreDispatch();
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
          <Text style={[Fonts.textCenter, Fonts.title1_semibold]}>
            Product list
          </Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
      <VirtualizedList
        style={[Gutters.x68BMargin]}
        getItem={(data, index) => {
          return cart[index];
        }}
        getItemCount={() => cart.length}
        renderItem={({item} :any) => (
          <View style={[Layout.row, Layout.scrollSpaceBetween]}>
              <Image
                source={Images.Coffee}
                style={{
                  flex: 1,
                  alignSelf: 'center',
                  width: Metrics.getWidth(90),
                  height: Metrics.getHeight(70),
                }}
              />
              <View style={{flex: 2}}>
                <Text style={[Fonts.title2_semibold]}>
                  {item.name}
                </Text>
                <Text
                  style={[, Fonts.text_regular,
                    { color: Colors.darkGrey },
                    Gutters.x4BMargin,
                  ]}
                >
                  {item.volume}ml
                </Text>
                <Text
                  style={[, Fonts.caption1_regular,
                    { color: Colors.orange },
                    Gutters.x12BMargin,
                  ]}
                >
                  + {item.component.map((item: any) => item.name).join(', ')}
                </Text>
              </View>
                <Text
                  style={[
                    Fonts.text_semibold,
                    { color: Colors.black, flex: 1, textAlign: 'right'  },
                    Gutters.x12BMargin,
                  ]}
                >
                  {item.price} ₽
                </Text>
          </View>
        )}
      />
      <View
        style={[
          Gutters.x12VPadding,
          {
            backgroundColor: Colors.lightGrey,
            position: 'absolute',
            bottom: 0,
            width: Metrics.screenWidth,
          },
        ]}
      >
        {route.params.type === 'waiting' ?
          <PrimaryButton
          backgroundColor={Colors.orange}
          textColor={Colors.white}
          title={`Buy for ${calcSum(cart.map((item: any)=>item.price))} ₽`}
          onPress={() => {
            dispatch(addOrder({id: route.params.id, cart: route.params.cart}))
            dispatch(setCart([]))
            navigation.goBack();
          }}
        />  : <PrimaryButton
            backgroundColor={Colors.orange}
            textColor={Colors.white}
          title={'QR code'}
          onPress={() => {
            navigation.navigate('QrCodeScreen');
          }}
        />}

      </View>
    </View>
  );
};

export default Index;
