//файл стилевых значений
import Metrics from './Metrics';

const ratio = Metrics.ratio.y;
export const Colors = {
  transparent: '#0000',

  black: '#2A2A2B',
  white: '#ffffff',
  human: '#FFD2BE',
  orange: '#FF5712',
  pink: '#FAC7FF',
  darkGrey: '#636466',
  midGrey: '#B7B7B7',
  grey: '#EEEEEE',
  lightGrey: '#F4F4F4',
  green: '#3ABB37',
  blue: '#3478F0',
  error: '#CB1313'
};

export const NavigationColors = {
  primary: Colors.white,
};

const FontSize = {
  x12: 12 * ratio,
  x11: 11 * ratio,
  x13: 13 * ratio,
  x14: 14 * ratio,
  x16: 16 * ratio,
  x18: 18 * ratio,
  x20: 20 * ratio,
  x22: 22 * ratio,
  x24: 24 * ratio,
  x32: 32 * ratio,
  x40: 40 * ratio,
};

export const MetricsSizes = {
  x4: ratio * 4,
  x8: ratio * 8,
  x12: ratio * 12,
  x16: ratio * 16,
  x20: ratio * 20,
  x24: ratio * 24,
  x28: ratio * 28,
  x32: ratio * 32,
  x48: ratio * 48,
  x56: ratio * 48,
  x68: ratio * 68,
  x92: ratio * 92,
};

export default {
  NavigationColors,
  Colors,
  FontSize,
  MetricsSizes,
};
