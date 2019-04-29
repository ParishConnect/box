import * as PropTypes from 'prop-types';
import getCss, { GetCSS } from '../get-css';
import { PropEncharValueType as ValueType } from './types';

export const propTypes = {
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export const propAliases = {};

export const propValidators = {};

const opacity = {
  className: 'opct',
  cssName: 'opacity',
  jsName: 'opacity',
  defaultUnit: ''
};

export const propEnhancers = {
  opacity: (value: ValueType): GetCSS => getCss(opacity, value)
};
