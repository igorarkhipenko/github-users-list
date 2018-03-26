// @flow

import { StyleSheet, Dimensions } from 'react-native';
import metrics from '../config/metrics.config';

export const fontSizes = {
  small: metrics.em(1),
  medium: metrics.em(1.3),
  large: metrics.em(2),
};

export const colors = {
  grey: '#9f9f9f',
  lightGrey: '#e9e8ea',
  white: '#ffffff',
  black: '#000000',
};

export const styles = StyleSheet.create({
  fullFlex: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userRowContainer: {
    paddingLeft: 15,
    marginLeft: 0,
    backgroundColor: colors.white,
  },
  userRowHeader: {
    fontSize: fontSizes.small,
  },
});
