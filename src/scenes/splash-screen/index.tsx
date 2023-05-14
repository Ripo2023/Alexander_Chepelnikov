import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import useStoreSelector from '../../store/hooks/useStoreSelector';
import { getBundleId } from 'react-native-device-info';
import { useStoreDispatch } from '../../store/hooks';
import { setMessage } from '../../store/reducers/user';
import useTheme from '../../hooks/useTheme';
import { ApplicationScreenProps } from 'types/navigation';
import Logo from '../../theme/assets/svg/Logo';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }: ApplicationScreenProps): JSX.Element => {
  const dispatch = useStoreDispatch();
  const { Layout, Fonts, Images, Colors } = useTheme();
  const { message } = useStoreSelector(state => state.userReducer);
  console.log(getBundleId());
  const handlePress = () => {
    dispatch(setMessage('Message from Component HAHAHAHHA'));
  };
  const { isOnboarding } = useStoreSelector(state => state.onBoardingReducer);
  console.log(getBundleId());
  useEffect(() => {
    setTimeout(() => {
      if (isOnboarding) {
        navigation.navigate('OnBoardingScreen');
      } else {
        navigation.navigate('LoginScreen');
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
