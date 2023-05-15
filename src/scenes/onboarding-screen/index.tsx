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
    { id: 0, see: false },
    { id: 1, see: false },
    { id: 2, see: false },
    { id: 3, see: false },
    { id: 4, see: false },
    { id: 5, see: false },
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
      <TouchableOpacity>
        <Text
          style={[
            Fonts.text_regular,
            { color: Colors.orange, textAlign: 'right' },
          ]}
        >
          Skip
        </Text>
      </TouchableOpacity>
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
            <View style={[Layout.fullSize, Layout.center]}>
              <View
                style={[Gutters.x92Padding, { backgroundColor: Colors.pink }]}
              />
              <Text style={[Fonts.h1_1, Fonts.textCenter]}>{index}</Text>
              <Text style={[Fonts.h2_1, Fonts.textCenter]}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
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
