import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useTheme from '../../hooks/useTheme';
import { ApplicationScreenProps } from 'types/navigation';
import Back from '../../theme/assets/svg/Back';
import { useStoreSelector } from "../../store/hooks";

const Index = ({ navigation }: ApplicationScreenProps) => {
  const { Layout, Fonts, Colors, Images, Gutters } = useTheme();
  const { cart, id } = useStoreSelector(state => state.cartReducer);
  const { orders } = useStoreSelector(state => state.ordersReducer);
  console.log(orders);
  return (
    <View>
      <View
        style={[
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
              Orders list
            </Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>
      </View>
      <ScrollView
        style={[
          Layout.fullSize,
          Gutters.x24Padding,
          { backgroundColor: Colors.white },
        ]}
      >
        { cart.length !== 0 ? <>
          <Text style={[Fonts.title1_semibold]}>Waiting</Text>
          <TouchableOpacity
            style={[
              Gutters.x4VPadding,
              Gutters.x8HPadding,
              { backgroundColor: Colors.pink, borderRadius: 8 },
              Layout.scrollSpaceBetween,
              Layout.row,
              Gutters.x4VMargin
            ]}
            onPress={() => {
              navigation.navigate("OrderScreen", { type: "waiting", cart: cart, id: id });
            }}
          >
            <View style={[Layout.row, Gutters.x4Gap]}>
              {cart.map((item, index) =>
                <Image
                  key={index}
                  source={Images.Coffee}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "cover",
                    backgroundColor: Colors.white,
                    borderRadius: 100
                  }}
                />)}
            </View>
            <Text style={[{ color: Colors.white }, Fonts.caption1_semibold]}>
              {id}
            </Text>
          </TouchableOpacity>
        </> : <></>}
        <Text style={[Fonts.title1_semibold]}>Ready</Text>
        <FlatList
          data={orders}
          renderItem={({item, index}: any) => (
            <TouchableOpacity
              key={index}
              style={[
                Gutters.x4VPadding,
                Gutters.x8HPadding,
                { backgroundColor: Colors.orange, borderRadius: 8 },
                Layout.scrollSpaceBetween,
                Layout.row,
                Gutters.x4VMargin,
              ]}
              onPress={() => {
                navigation.navigate('OrderScreen', {cart: item.cart});
              }}
            >
              <View style={[Layout.row, Gutters.x4Gap]}>
                {item.cart.map((item: any, index: number) =>
                  <Image
                    key={index}
                    source={Images.Coffee}
                    style={{
                      width: 20,
                      height: 20,
                      resizeMode: "cover",
                      backgroundColor: Colors.white,
                      borderRadius: 100
                    }}
                  />)}
              </View>
              <Text style={[{ color: Colors.white }, Fonts.caption1_semibold]}>
                {item.id}
              </Text>
            </TouchableOpacity>
          )}
        />
        <Text style={[Fonts.title1_semibold]}>In progress</Text>
        <FlatList
          data={orders}
          renderItem={({ item, index }: any) => (
            <TouchableOpacity
              style={[
                Gutters.x4VPadding,
                Gutters.x8HPadding,
                { backgroundColor: Colors.black, borderRadius: 8 },
                Layout.scrollSpaceBetween,
                Layout.row,
                Gutters.x4VMargin,
              ]}
              onPress={() => {
                navigation.navigate('OrderScreen', {cart: item.cart});
              }}
            >
              <View style={[Layout.row, Gutters.x4Gap]}>
                {item.cart.map((item: any, index: number) =>
                  <Image
                    key={index}
                    source={Images.Coffee}
                    style={{
                      width: 20,
                      height: 20,
                      resizeMode: "cover",
                      backgroundColor: Colors.white,
                      borderRadius: 100
                    }}
                  />)}
              </View>
              <Text style={[{ color: Colors.white }, Fonts.caption1_semibold]}>
                {item.id}
              </Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Index;
