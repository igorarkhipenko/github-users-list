import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window');
const baseUnit = 16;
const ratioX = width < 375 ? (width < 320 ? 0.75 : 0.875) : 1;

const unit = baseUnit * ratioX;
const em = value => unit * value;

const metrics = { em };

export default metrics
