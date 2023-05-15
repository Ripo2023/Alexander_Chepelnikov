//файл метрик
import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenWidth = width > height ? height : width;
const screenHeight = width > height ? width : height;
const density = PixelRatio.get();

const ratio = {
  x: screenWidth / 375.0,
  y: Math.min(screenHeight, screenWidth / 0.5622) / 667.0,
};

export default {
  getWidth: (value: number) => value * ratio.x,
  getHeight: (value: number) => value * ratio.y,
  ratio,
  screenWidth,
  screenHeight,
  density,
};
