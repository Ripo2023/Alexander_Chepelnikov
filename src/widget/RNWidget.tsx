import React from 'react';
import { FlexWidget, TextWidget } from 'react-native-android-widget';
import useTheme from '../hooks/useTheme';

const Widget = () => {
  return (
    <FlexWidget
      style={{
        height: 'match_parent',
        width: 'match_parent',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FF5712',
        borderRadius: 16,padding: 12,
      }}
    >
      <TextWidget
        text="В вашем последнем заказе было 5 товаров на сумму 200"
        style={{
          fontSize: 24,
          color: '#fff',
          textAlign: 'center',
        }}
      />
      <TextWidget
        text="Обновлён в 11:23:22"
        style={{
          fontSize: 24,
          color: '#fff',
        }}
      />
    </FlexWidget>
  );
};

export default Widget;
