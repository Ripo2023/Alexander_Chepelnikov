import React from 'react';
import type { WidgetTaskHandlerProps } from 'react-native-android-widget';
import RNWidget from './RNWidget';

const nameToWidget = {
  // Hello will be the **name** with which we will reference our widget.
  RNWidget: RNWidget,
};

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
  const widgetInfo = props.widgetInfo;
  console.log(widgetInfo.widgetName);
  console.log(props.widgetAction);
  console.log(props.widgetAction);
  switch (props.widgetAction) {
    case 'WIDGET_ADDED':
      props.renderWidget(<RNWidget />);
      break;
    case 'WIDGET_RESIZED':
      props.renderWidget(<RNWidget />);
      break;

    case 'WIDGET_CLICK':
      // Not needed for now\
      break;

    default:
      break;
  }
}
