import { Dimensions, Platform, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window');
const baseUnit = 16;
const ratioX = width < 375 ? (width < 320 ? 0.75 : 0.875) : 1;

const unit = baseUnit * ratioX;
const em = value => unit * value;

const metrics = {
  em,
  width,
  height,
  marginHorizontal: em(1),
  marginVertical: em(1),
  section: 25,
  baseMargin: em(1),
  doubleBaseMargin: 32,
  smallMargin: 5,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 56,
  h1: 32,
};

export default metrics
