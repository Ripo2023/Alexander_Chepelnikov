import React, { useRef, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import useTheme from '../../hooks/useTheme';
import CupCoffee from '../../theme/assets/svg/CupCoffee';
import MapLocation from '../../theme/assets/svg/MapLocation';
import Carousel from 'react-native-reanimated-carousel';
import Metrics from '../../theme/Metrics';
import PrimarySmallButton from '../../components/buttons/primary-small-button';
import { ApplicationScreenProps } from 'types/navigation';
import Banner from '../../theme/assets/svg/Banner';
import { Modalize } from 'react-native-modalize';
import ProductScreen from '../product-screen';
import { useStoreSelector } from '../../store/hooks';

const Index = ({ navigation }: ApplicationScreenProps) => {
  const { Images, Layout, Gutters, Fonts, Colors, Common } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { cart } = useStoreSelector(state => state.cartReducer);
  const categories = [
    { id: 0, name: 'Coffee' },
    { id: 1, name: 'Tea' },
    { id: 2, name: 'Drinks' },
    { id: 3, name: 'Desserts' },
  ];
  const items = {
    Coffee: [
      { image: Images.Coffee, name: 'Cappuccino', price: 120 },
      { image: Images.Coffee, name: 'Cappuccino', price: 120 },
      { image: Images.Coffee, name: 'Cappuccino', price: 120 },
      { image: Images.Coffee, name: 'Cappuccino', price: 120 },
      { image: Images.Coffee, name: 'Cappuccino', price: 120 },
    ],
    Tea: [],
    Drinks: [],
    Desserts: [],
  };

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <>
      <ScrollView
        style={[
          { backgroundColor: Colors.white },
          Gutters.x32TPadding,
          Gutters.x16HPadding,
        ]}
        stickyHeaderIndices={[2]}
      >
        <View style={[Layout.row, Layout.alignItemsCenter]}>
          <TouchableOpacity
            style={
              cart.length === 0
                ? {}
                : { borderWidth: 2, borderRadius: 20, borderColor: Colors.blue }
            }
            onPress={() => navigation.navigate('OrdersScreen')}
          >
            <CupCoffee />
          </TouchableOpacity>
          <View style={[Gutters.x20LMargin]}>
            <Text style={[Fonts.caption1_regular]}>Coffee shop address</Text>
            <TouchableOpacity
              style={[Layout.row, Layout.center]}
              onPress={() => navigation.navigate('MapScreen')}
            >
              <MapLocation />
              <Text style={[Fonts.text_semibold]}>
                Минск, просп. Победителей, 20
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Carousel
          loop={false}
          width={Metrics.screenWidth - Metrics.getWidth(32)}
          height={Metrics.screenWidth / 2}
          data={[1, 2, 3]}
          style={{ width: Metrics.screenWidth }}
          pagingEnabled={false}
          snapEnabled={false}
          renderItem={({ item, index }: any) => (
            <View
              style={[
                Gutters.x12TMargin,
                {
                  borderRadius: 20,
                  width: Metrics.getWidth(328),
                  height: Metrics.getWidth(168),
                },
              ]}
            >
              <Banner />
            </View>
          )}
        />
        <ScrollView horizontal={true}>
          <View
            style={[
              Layout.row,
              Gutters.x24Gap,
              { backgroundColor: Colors.white },
            ]}
          >
            {categories.map((item, index) => (
              <>
                {item.id === selectedCategory ? (
                  <TouchableOpacity
                    style={[
                      Gutters.x4VPadding,
                      Gutters.x16HPadding,
                      { backgroundColor: Colors.black, borderRadius: 8 },
                    ]}
                    key={index}
                  >
                    <Text style={[Fonts.text_semibold, { color: 'white' }]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[Gutters.x4VPadding, Gutters.x8HPadding]}
                    onPress={() => setSelectedCategory(item.id)}
                  >
                    <Text
                      style={[Fonts.text_regular, { color: Colors.midGrey }]}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              </>
            ))}
          </View>
        </ScrollView>
        <View
          style={[
            Layout.row,
            { flexWrap: 'wrap' },
            Gutters.x16Gap,
            Gutters.x24TMargin,
          ]}
        >
          {items[
            categories.filter(item => item.id === selectedCategory)[0].name
          ].map((item, index) => (
            <View
              key={index}
              style={{ shadowColor: 'rgba(0,0,0,0.22)', elevation: 4 }}
            >
              <View
                style={[
                  {
                    width: Metrics.getWidth(160),
                    borderRadius: 12,
                  },
                  Gutters.x24HPadding,
                ]}
              >
                <Image
                  source={Images.Coffee}
                  style={{
                    alignSelf: 'center',
                    width: Metrics.getWidth(116),
                    height: Metrics.getHeight(104),
                  }}
                />
                <Text style={[Fonts.title2_semibold, Fonts.textCenter]}>
                  Cappuccino
                </Text>
                <Text
                  style={[
                    Fonts.text_regular,
                    Fonts.textCenter,
                    { color: Colors.darkGrey },
                    Gutters.x12BMargin,
                  ]}
                >
                  from 180 ₽
                </Text>
                <PrimarySmallButton
                  onPress={() => {
                    onOpen();
                  }}
                  backgroundColor={Colors.transparent}
                  textColor={Colors.orange}
                  borderColor={Colors.orange}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <ProductScreen modalRef={modalizeRef} />
    </>
  );
};

export default Index;
