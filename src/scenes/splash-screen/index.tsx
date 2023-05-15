import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import useStoreSelector from '../../store/hooks/useStoreSelector';
import { useStoreDispatch } from '../../store/hooks';
import useTheme from '../../hooks/useTheme';
import { ApplicationScreenProps } from 'types/navigation';
import Logo from '../../theme/assets/svg/Logo';
import LinearGradient from 'react-native-linear-gradient';
import { setCart } from "../../store/reducers/cart";
import { v4 as uuidv4 } from "uuid";

const SplashScreen = ({ navigation }: ApplicationScreenProps): JSX.Element => {
  const dispatch = useStoreDispatch();
  const { Layout, Fonts, Images, Colors } = useTheme();

  const { isOnboarding } = useStoreSelector(state => state.onBoardingReducer);

  useEffect(() => {
    //установка пустой коризины на данную сессию приложения
    dispatch(setCart([]));
    setTimeout(() => {
      //проверка если пользователь уже просмотрел слайдер
      if (!isOnboarding) {
        navigation.navigate('LoginScreen');
      } else {
        navigation.navigate('OnBoardingScreen');
      }
    }, 2000);
  }, []);

  return (
    <LinearGradient
      colors={[Colors.human, Colors.pink]}
      style={[Layout.fullSize, Layout.center]}
    >
      <Image source={Images.Logo} />
      <Logo />
    </LinearGradient>
  );
};

export default SplashScreen;
