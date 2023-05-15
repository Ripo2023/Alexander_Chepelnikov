import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import OrdersScreen from "../src/scenes/orders-screen";
import QrCodeScreen from "../src/scenes/qr-code-screen";

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
  OrdersScreen: undefined;
  OrderScreen: undefined;
  QrCodeScreen: undefined;
  MapScreen: undefined;
  // AuthenticationScreen: NavigatorScreenParams<MainParamsList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
