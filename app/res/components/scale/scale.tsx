
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;
const scale = (size: number): number =>
  width > 600
    ? (width / guidelineBaseWidth) * size * 0.61
    : (width / guidelineBaseWidth) * size;
const scaleVertical = (size: number): number =>
  (height / guidelineBaseHeight) * size;
const scaleModerate = (size: number, factor = 0.5): number =>
  size + (scale(size) - size) * factor;

export { scale, scaleVertical, scaleModerate };
