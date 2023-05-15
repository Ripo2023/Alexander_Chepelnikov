import { Image, Text, TouchableOpacity, View } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { ApplicationScreenProps } from 'types/navigation';
import Metrics from '../../theme/Metrics';
import React, { useEffect, useRef, useState } from 'react';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { useStoreDispatch } from '../../store/hooks';
import { setOnboarding } from '../../store/reducers/onboarding';

const OnBoardingScreen = ({
  navigation,
}: ApplicationScreenProps): JSX.Element => {
  const { Layout, Fonts, Images, Colors, Gutters } = useTheme();
  const dispatch = useStoreDispatch();
  const [carousel, setCarousel] = useState([
    {
      id: 0,
      image: Images.onboard1,
      title: 'Hello!',
      text:
        'Coffee to Go is an application in which you can order' +
        ' coffee online and pick it up at the coffee shop closest to y' +
        'ou. Now lets tel' +
        'l you how it works',
      see: false,
    },
    {
      id: 1,
      image: Images.onboard2,
      title: 'Search for a coffee shop',
      text: 'The map shows the nearest coffee shops to you, choose the most convenient one for you. The app will tell you how long to go to it.',
      see: false,
    },
    {
      id: 2,
      image: Images.onboard3,
      title: 'Making an order',
      text: 'Choose your favorite drinks and desserts. You can change their composition and choose the time when it will be convenient for you to pick them up.',
      see: false,
    },
    {
      id: 3,
      image: Images.onboard4,
      title: 'Receiving an order',
      text: 'At the specified time, come to the coffee shop and enjoy the taste of coffee, without queuing and waiting.',
      see: false,
    },
    { id: -1, see: false },
  ]);
  // @ts-ignore
  const ref = useRef<ICarouselInstance>({});
  useEffect(() => {
    ref.current.prev({ count: 1, animated: false });
    console.log(ref.current.getCurrentIndex());
  }, [carousel]);
  const onPressNext = () => {
    if (carousel.filter(item => !item.see).length > 2) {
      ref.current.next({ count: 1, animated: true });
    } else {
      dispatch(setOnboarding(true));
      navigation.navigate('LoginScreen');
    }
  };
  console.log(carousel.filter(item => !item.see).length);
  return (
    <View
      style={[
        Layout.fullSize,
        Gutters.x48TPadding,
        { backgroundColor: Colors.white },
      ]}
    >
      {carousel.filter(item => !item.see).length === 2 ? (
        <TouchableOpacity
          onPress={() => {
            ref.current.scrollTo({ index: 0, animated: true });
            setCarousel(
              carousel.map(item =>
                item.id === 3 ? item : { ...item, see: true },
              ),
            );
          }}
        >
          <Text
            style={[
              Gutters.x12HMargin,
              Fonts.text_regular,
              { color: Colors.orange, textAlign: 'right' },
            ]}
          >
            Skip
          </Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
      <Carousel
        loop={false}
        ref={ref}
        width={Metrics.screenWidth}
        data={carousel.filter(item => !item.see)}
        scrollAnimationDuration={0}
        enabled={carousel.filter(item => !item.see).length !== 2}
        onScrollEnd={index => {
          if (index !== 0 || ref.current.getCurrentIndex() === 1) {
            setCarousel([
              ...carousel.filter(item => item.see),
              ...carousel
                .filter(item => !item.see)
                .map((item, ind) =>
                  ind === 0 && item.id !== -1 ? { ...item, see: true } : item,
                ),
            ]);
          }
          console.log('current index:', index);
        }}
        renderItem={({ item, index }) =>
          item.id !== -1 ? (
            <View style={[Layout.fill, Layout.center, Gutters.x20HPadding]}>
              <Image
                source={item.image}
                style={{
                  width: Metrics.getWidth(300),
                  height: Metrics.getWidth(300),
                  paddingBottom: 20,
                }}
              />
              <Text
                style={[
                  Fonts.title1_semibold,
                  Fonts.textCenter,
                  Gutters.x12TMargin,
                ]}
              >
                {item.title}
              </Text>
              <Text
                style={[
                  Fonts.text_regular,
                  { color: Colors.darkGrey },
                  Fonts.textCenter,
                ]}
              >
                {item.text}
              </Text>
              <View
                style={[
                  Layout.row,
                  Gutters.x8Gap,
                  Layout.center,
                  Gutters.x12TMargin,
                ]}
              >
                {carousel
                  .filter(item => item.id !== -1)
                  .map((item2, ind) => (
                    <View
                      key={ind}
                      style={[
                        item2.id === item.id
                          ? Gutters.x8Padding
                          : Gutters.x4Padding,
                        {
                          backgroundColor:
                            item2.id === item.id ? Colors.orange : Colors.grey,
                          borderRadius: 100,
                        },
                      ]}
                    />
                  ))}
              </View>
              <TouchableOpacity
                style={[
                  Gutters.x48TMargin,
                  Gutters.x56HPadding,
                  Gutters.x8VPadding,
                  { backgroundColor: Colors.orange, borderRadius: 8 },
                ]}
                onPress={onPressNext}
              >
                <Text style={{ color: Colors.white }}>Next</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View />
          )
        }
      />
    </View>
  );
};

export default OnBoardingScreen;
