import * as PropTypes from 'prop-types';
import getCss, { GetCSS } from '../get-css';
import { PropEncharValueType as ValueType } from './types';

export const propTypes = {
  transform: PropTypes.string,
  transformOrigin: PropTypes.string
};

export const propAliases = {};

export const propValidators = {};

const transform = {
  className: 'tfrm',
  cssName: 'transform',
  jsName: 'transform',
  complexValue: true
};
const transformOrigin = {
  className: 'tfrm-orgn',
  cssName: 'transform-origin',
  jsName: 'transformOrigin',
  complexValue: true
};

export const propEnhancers = {
  transform: (value: ValueType): GetCSS => getCss(transform, value),
  transformOrigin: (value: ValueType): GetCSS => getCss(transformOrigin, value)
};
