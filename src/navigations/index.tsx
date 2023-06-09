import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useFlipper } from '@react-navigation/devtools';
import SplashScreen from '../scenes/splash-screen';
// import LoginScreen from '../scenes/login-screen';
import useTheme from '../hooks/useTheme';
import { SafeAreaView, StatusBar } from 'react-native';
import { ApplicationStackParamList } from 'types/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OnBoardingScreen from '../scenes/onboarding-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginScreen from '../scenes/login-screen';
import MainListScreen from '../scenes/main-list-screen';
import ProductScreen from '../scenes/product-screen';
import OrderScreen from '../scenes/order-screen';
import OrdersScreen from '../scenes/orders-screen';
import QrCodeScreen from '../scenes/qr-code-screen';
import MapScreen from '../scenes/map-screen';
const Stack = createNativeStackNavigator<ApplicationStackParamList>();

const RootNavigation = () => {
  const { Layout, darkMode, Colors } = useTheme();
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: 'fff',
            },
          }}
          ref={navigationRef}
        >
          <StatusBar
            backgroundColor={Colors.white}
            animated
            barStyle={'dark-content'}
          />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: 'slide_from_bottom',
            }}
          >
            <Stack.Screen component={SplashScreen} name={'SplashScreen'} />
            <Stack.Screen
              component={OnBoardingScreen}
              name={'OnBoardingScreen'}
            />
            <Stack.Screen component={LoginScreen} name={'LoginScreen'} />
            <Stack.Screen component={MainListScreen} name={'MainListScreen'} />
            <Stack.Screen component={ProductScreen} name={'ProductScreen'} />
            <Stack.Screen component={OrderScreen} name={'OrderScreen'} />
            <Stack.Screen component={OrdersScreen} name={'OrdersScreen'} />
            <Stack.Screen component={QrCodeScreen} name={'QrCodeScreen'} />
            <Stack.Screen component={MapScreen} name={'MapScreen'} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default RootNavigation;
