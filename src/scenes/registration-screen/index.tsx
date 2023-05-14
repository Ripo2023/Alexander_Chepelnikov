// import React from 'react';
// import useTheme from '../../hooks/useTheme';
// import { Image, Text, TouchableOpacity, View } from 'react-native';
// import Metrics from '../../theme/Metrics';
// import BackArrow from '../../theme/assets/svg/BackArrow';
// import Logo from '../../theme/assets/svg/Logo';
// import { TextInput as TextInputPaper } from 'react-native-paper';
// import Lock from '../../theme/assets/svg/Lock';
// import { useTranslation } from 'react-i18next';
// import FacebookLogo from '../../theme/assets/svg/FacebookLogo';
// import Email from '../../theme/assets/svg/Email';
// import GoogleLogo from '../../theme/assets/svg/GoogleLogo';
// import AppleLogo from '../../theme/assets/svg/AppleLogo';
// import SignUpButton, {
//   SignUpButtonProps,
// } from '../../components/buttons/sign-up-button';
// import SecondaryButton from '../../components/buttons/secondary-button';

// const Index = (): JSX.Element => {
//   const { Images, Fonts, Gutters, Colors, Common, Layout } = useTheme();
//   const { t } = useTranslation('login_screen');

//   const onAppleLogin = () => {};
//   const onFaceBookLogin = () => {};
//   const onGoogleLogin = () => {};
//   const onEmailLogin = () => {};

//   const signUpMethods: SignUpButtonProps[] = [
//     {
//       icon: <AppleLogo />,
//       title: 'Continue with Apple',
//       onPress: onAppleLogin,
//     },
//     {
//       icon: <FacebookLogo />,
//       title: 'Continue with Facebook',
//       onPress: onFaceBookLogin,
//     },
//     {
//       icon: <GoogleLogo />,
//       title: 'Continue with Google',
//       onPress: onGoogleLogin,
//     },
//     {
//       icon: <Email />,
//       title: 'Continue with Email',
//       onPress: onEmailLogin,
//     },
//   ];
//   return (
//     <View>
//       <Image
//         source={Images.backgroundImageAuth}
//         resizeMode={'stretch'}
//         style={[
//           Layout.fullWidth,
//           {
//             height: Metrics.getHeight(240),
//           },
//         ]}
//       />
//       <View
//         style={[
//           Layout.fullSize,
//           {
//             backgroundColor: Colors.white,
//             top: Metrics.getHeight(-80),
//             borderRadius: Metrics.getWidth(24),
//           },
//         ]}
//       >
//         <View
//           style={[
//             Gutters.x48TMargin,
//             Gutters.x24HMargin,
//             Gutters.x32BMargin,
//             Layout.row,
//             Layout.alignItemsCenter,
//           ]}
//         >
//           <View style={[Layout.fill, Layout.center]}>
//             <Logo />
//           </View>
//         </View>
//         <View style={[Gutters.x24HMargin]}>
//           <Text style={[Fonts.h2, Fonts.textCenter]}>
//             Welcome to McDonald’s
//           </Text>
//           <Text
//             style={[
//               Fonts.LGBod1,
//               Fonts.textCenter,
//               { color: Colors.darkGrey },
//               Gutters.x32BMargin,
//               Gutters.x20HMargin,
//             ]}
//           >
//             Select an option to access or create your McDonald's Express account
//           </Text>
//           <View style={[Gutters.x16Gap]}>
//             {signUpMethods.map((item, key) => (
//               <SignUpButton
//                 key={key}
//                 icon={item.icon}
//                 title={item.title}
//                 onPress={item.onPress}
//               />
//             ))}
//           </View>
//           <Text style={[Fonts.XLBod2, Fonts.textCenter, Gutters.x16VMargin]}>
//             Or
//           </Text>
//           <SecondaryButton
//             onPress={() => {}}
//             title={'Just see the menu'}
//             hasArrow
//           />
//           <View style={[Gutters.x32TMargin, Layout.rowCenter]}>
//             <Text
//               style={[Fonts.SMBod2, { color: Colors.black }, Fonts.textCenter]}
//             >
//               By accessing or registering you agree to all our{' '}
//               <Text style={[Fonts.SMBod1, { color: Colors.black }]}>
//                 Terms and Conditions, Privacy Policy
//               </Text>{' '}
//               and{' '}
//               <Text style={[Fonts.SMBod1, { color: Colors.black }]}>GDPR</Text>
//             </Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Index;
