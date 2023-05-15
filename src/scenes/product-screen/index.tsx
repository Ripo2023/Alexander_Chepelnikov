import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Back from '../../theme/assets/svg/Back';
import useTheme from '../../hooks/useTheme';
import { ApplicationScreenProps } from 'types/navigation';
import Metrics from '../../theme/Metrics';
import Plus from '../../theme/assets/svg/Plus';
import PrimaryButton from '../../components/buttons/primary-button';
import { useStoreDispatch } from '../../store/hooks';
import { addToCart } from '../../store/reducers/cart';
import { alert } from '../App';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native';
import { IconButton, Tooltip } from 'react-native-paper';
import Info from '../../theme/assets/svg/Info';

const volumeVariants = [
  { id: 0, value: 200, multiple: 1 },
  { id: 1, value: 300, multiple: 1.5 },
  { id: 2, value: 400, multiple: 2 },
];

const sumComponents = (array: any[]) => {
  let sum = 0;
  array.map(item => (sum += item.price));
  return sum;
};

const Index = ({ modalRef }: any) => {
  const navigation = useNavigation();
  const { Images, Layout, Gutters, Fonts, Colors, Common } = useTheme();
  const [selectedValue, setSelectedValue] = useState(0);
  const dispatch = useStoreDispatch();
  const [componentsVariants, setComponents] = useState([
    {
      id: 0,
      choosed: true,
      price: 0,
      name: 'Espresso Arabica',
      image: Images.Coffee,
    },
    {
      id: 1,
      choosed: true,
      price: 0,
      name: 'Cow\'s milk',
      image: Images.Coffee,
    },
    { id: 2, choosed: false, price: 20, name: 'Syrup', image: Images.Coffee },
  ]);
  return (
    <Modalize ref={modalRef}>
      <View style={[Layout.fullSize, { backgroundColor: 'white' }]}>
        <View
          style={[
            Gutters.x20BMargin,
            Gutters.x24TMargin,
            Layout.row,
            Layout.center,
            Gutters.x24HMargin,
          ]}
        >
          <View style={[{ flex: 1 }]}>
            <TouchableOpacity
              onPress={() => {
                modalRef.current.close();
              }}
            >
              <Back />
            </TouchableOpacity>
          </View>
          <View style={[Layout.center]}>
            <Text style={[Fonts.textCenter, Fonts.title1_semibold]}>
              Cappuccino
            </Text>
          </View>
          <View style={[{ flex: 1 }]} />
        </View>
        <ScrollView style={[Gutters.x16HMargin]}>
          <Image
            source={Images.Coffee}
            style={{
              alignSelf: 'center',
              width: Metrics.getWidth(285),
              height: Metrics.getHeight(184),
            }}
          />
          <Text
            style={[
              Fonts.text_regular,
              Fonts.textCenter,
              { color: Colors.darkGrey },
            ]}
          >
            Espresso-based coffee with the addition of warmed foamed milk
          </Text>
          <Text
            style={[Gutters.x20TMargin, Fonts.title2_bold, Gutters.x12BMargin]}
          >
            Volume
          </Text>
          <View style={[Layout.row, Layout.scrollSpaceBetween]}>
            {volumeVariants.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  Gutters.x4VPadding,
                  Gutters.x24HPadding,
                  {
                    backgroundColor:
                      selectedValue === item.id
                        ? Colors.black
                        : Colors.lightGrey,
                    borderRadius: 10,
                  },
                ]}
                onPress={() => setSelectedValue(item.id)}
              >
                <Text
                  style={[
                    Fonts.text_semibold,
                    {
                      color:
                        selectedValue === item.id
                          ? Colors.white
                          : Colors.midGrey,
                    },
                  ]}
                >
                  {item.value} ml
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={[Gutters.x20TMargin, Fonts.title2_bold, Gutters.x12BMargin]}
          >
            Change Components
          </Text>
          <ScrollView horizontal={false}>
            <View style={[Layout.alignItemsCenter, Layout.row, Gutters.x16Gap]}>
              {componentsVariants.map((item, index) => (
                <View style={[Layout.column]}>
                  <TouchableOpacity
                    key={index}
                    style={[
                      {
                        backgroundColor: Colors.lightGrey,
                        borderRadius: 16,
                        width: Metrics.getWidth(96),
                        height: Metrics.getHeight(96),
                      },
                      Layout.center,
                    ]}
                    onPress={() =>
                      setComponents(
                        componentsVariants.map(comp =>
                          comp.id === item.id
                            ? { ...comp, choosed: !comp.choosed }
                            : comp,
                        ),
                      )
                    }
                  >
                    {item.choosed ? (
                      <Image
                        source={item.image}
                        style={{
                          width: Metrics.getWidth(96),
                          height: Metrics.getHeight(96),
                          resizeMode: 'cover',
                        }}
                      />
                    ) : (
                      <Plus />
                    )}
                  </TouchableOpacity>
                  <Text
                    style={[
                      Fonts.textCenter,
                      Fonts.caption1_regular,
                      Gutters.x8TMargin,
                    ]}
                  >
                    {item.name}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </ScrollView>
        <View
          style={[
            Gutters.x12VPadding,
            Gutters.x20TMargin,
            {
              backgroundColor: Colors.lightGrey,
            },
          ]}
        >
          <PrimaryButton
            backgroundColor={Colors.orange}
            textColor={Colors.white}
            title={`Add to cart ${
              sumComponents(componentsVariants.filter(item => item.choosed)) +
              120 *
                volumeVariants.filter(item => item.id === selectedValue)[0]
                  .multiple
            }`}
            onPress={async () => {
              //добалвение в корзину товара
              dispatch(
                addToCart({
                  name: 'Cappuccino',
                  component: componentsVariants.filter(item => item.choosed),
                  volume: volumeVariants.filter(
                    item => item.id === selectedValue,
                  )[0].value,
                  price:
                    sumComponents(
                      componentsVariants.filter(item => item.choosed),
                    ) +
                    120 *
                      volumeVariants.filter(
                        item => item.id === selectedValue,
                      )[0].multiple,
                }),
              );
              alert('success', '', 'your product added on cart');
              modalRef.current.close();
            }}
          />
          <Text style={[Fonts.textCenter]}>
            Разработал Алекасндр Чепельников
          </Text>
        </View>
      </View>
    </Modalize>
  );
};

export default Index;
