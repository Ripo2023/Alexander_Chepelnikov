import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

// export type MainParamsList = {
//   LoginScreen: undefined;
//   RegistrationScreen: undefined;
// };

export type ApplicationStackParamList = {
  SplashScreen: undefined;
  OnBoardingScreen: undefined;
  LoginScreen: undefined;
  MainListScreen: undefined;
  ProductScreen: undefined;
  // AuthenticationScreen: NavigatorScreenParams<MainParamsList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
