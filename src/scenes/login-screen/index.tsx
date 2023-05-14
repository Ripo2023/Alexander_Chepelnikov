import React, { useState } from 'react';
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

const Index = ({ navigation }: ApplicationScreenProps): JSX.Element => {
  const { Images, Layout, Gutters, Fonts, Colors, Common } = useTheme();
  const { t } = useTranslation('login_screen');
  const [checked, setChecked] = useState(false);
  const [isCode, setIsCode] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[Layout.fullSize]}
    >
      <View style={{ backgroundColor: Colors.white }}>
        {isCode ? (
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
                  setIsCode(false);
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
        {isCode ? (
          <>
            <View style={[Gutters.x24BMargin, Gutters.x16HMargin]}>
              <Text style={[Fonts.caption2_regular, Gutters.x8BMargin]}>
                Code
              </Text>
              <TextInputPaper
                style={[Common.textInput]}
                activeUnderlineColor={Colors.transparent}
                underlineColor={Colors.transparent}
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
              onPress={() => navigation.navigate('MainListScreen')}
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
                activeUnderlineColor={Colors.transparent}
                underlineColor={Colors.transparent}
                selectionColor={'#fff'}
                placeholderTextColor={Colors.grey}
                mode={'outlined'}
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
            <PrimaryButton title={'Continue'} onPress={() => setIsCode(true)} />
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Index;
