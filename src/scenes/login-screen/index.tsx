import React, { useCallback, useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Metrics from '../../theme/Metrics';
import useTheme from '../../hooks/useTheme';
import { TextInput as TextInputPaper } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import LoginImage from '../../theme/assets/svg/LoginImage';
import CheckBox from '@react-native-community/checkbox';
import PrimaryButton from '../../components/buttons/primary-button';
import Back from '../../theme/assets/svg/Back';
import { ApplicationScreenProps } from 'types/navigation';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useStoreDispatch } from '../../store/hooks';
import { setUser } from '../../store/reducers/user';
import { CommonActions } from '@react-navigation/native';
import { alert } from '../App';

const Index = ({ navigation }: ApplicationScreenProps): JSX.Element => {
  const { Images, Layout, Gutters, Fonts, Colors, Common } = useTheme();
  const { t } = useTranslation('login_screen');
  const [checked, setChecked] = useState(false);
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');

  // @ts-ignore
  const [confirm, setConfirm] = useState<any>(null);

  const dispatch = useStoreDispatch();
  const onAuthStateChanged = useCallback((user: any) => {
    if (user) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: 'MainListScreen',
            },
          ],
        }),
      );
      dispatch(setUser(JSON.stringify(user)));
    }
  }, []);
  //авторизация по телефону
  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phone);
      setConfirm(confirmation);
    } catch (e) {
      alert('error', 'Internet error', 'check your connection');
    }
  };
  //подтверждение кода
  async function confirmCode() {
    try {
      alert('success', 'Welcome!', 'We glad to see you');
      await confirm.confirm(code);
    } catch (error) {
      alert('error', 'Invalid code.', 'please try again');
    }
  }
  useEffect(() => {
    //установка слушателя на изменение автоизации
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[Layout.fullSize]}
    >
      <View style={{ backgroundColor: Colors.white }}>
        {confirm ? (
          <View
            style={[
              Gutters.x20BMargin,
              Layout.row,
              Layout.center,
              Gutters.x24HMargin,
            ]}
          >
            <View style={[{ flex: 1 }]}>
              <TouchableOpacity
                onPress={() => {
                  setConfirm(null);
                }}
              >
                <Back />
              </TouchableOpacity>
            </View>
            <View style={[Layout.center, { flex: 1 }]}>
              <Text style={[Fonts.textCenter, Fonts.h1_2]}>Sign In</Text>
            </View>
            <View style={{ flex: 1 }} />
          </View>
        ) : (
          <Text style={[Fonts.textCenter, Fonts.h1_2, Gutters.x20BMargin]}>
            Sign In
          </Text>
        )}
        <LoginImage style={[Gutters.x24BMargin]} />
        {confirm ? (
          <>
            <View style={[Gutters.x24BMargin, Gutters.x16HMargin]}>
              <Text style={[Fonts.caption2_regular, Gutters.x8BMargin]}>
                Code
              </Text>
              <TextInputPaper
                style={[Common.textInput]}
                onChangeText={t => setCode(t)}
                activeUnderlineColor={Colors.transparent}
                underlineColor={Colors.transparent}
                value={code}
                selectionColor={'#fff'}
                placeholderTextColor={Colors.grey}
                mode={'outlined'}
                dense
                activeOutlineColor={'000'}
                outlineColor={Colors.midGrey}
              />
            </View>
            <PrimaryButton
              title={'Sign In'}
              backgroundColor={!code ? Colors.midGrey : Colors.orange}
              onPress={() => confirmCode()}
            />
          </>
        ) : (
          <>
            <View style={[Gutters.x24BMargin, Gutters.x16HMargin]}>
              <Text style={[Fonts.caption2_regular, Gutters.x8BMargin]}>
                Phone
              </Text>
              <TextInputPaper
                style={[Common.textInput]}
                onChangeText={t => setPhone(t)}
                activeUnderlineColor={Colors.transparent}
                underlineColor={Colors.transparent}
                selectionColor={'#fff'}
                placeholderTextColor={Colors.grey}
                mode={'outlined'}
                value={phone}
                dense
                activeOutlineColor={'000'}
                outlineColor={Colors.midGrey}
              />
            </View>
            <View
              style={[
                Gutters.x24BMargin,
                Gutters.x16HMargin,
                Layout.row,
                Layout.alignItemsCenter,
              ]}
            >
              <CheckBox
                value={checked}
                onValueChange={check => setChecked(check)}
              />
              <Text style={[Fonts.caption1_regular]}>
                i’m agree with privacy policy and user agreement
              </Text>
            </View>
            <PrimaryButton
              title={'Continue'}
              backgroundColor={!phone ? Colors.midGrey : Colors.orange}
              onPress={() => signInWithPhoneNumber()}
            />
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Index;
