import * as PropTypes from 'prop-types';
import getCss, { GetCSS } from '../get-css';
import { PropEncharValueType as ValueType } from './types';

export const propTypes = {
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  position: PropTypes.string,
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export const propAliases = {};
export const propValidators = {};

const position = {
  className: 'pst',
  cssName: 'position',
  jsName: 'position',
  safeValue: true,
  isPrefixed: true
};
const top = {
  className: 'top',
  cssName: 'top',
  jsName: 'top'
};
const right = {
  className: 'rgt',
  cssName: 'right',
  jsName: 'right'
};
const bottom = {
  className: 'btm',
  cssName: 'bottom',
  jsName: 'bottom'
};
const left = {
  className: 'lft',
  cssName: 'left',
  jsName: 'left'
};

export const propEnhancers = {
  bottom: (value: ValueType): GetCSS => getCss(bottom, value),
  left: (value: ValueType): GetCSS => getCss(left, value),
  position: (value: ValueType): GetCSS => getCss(position, value),
  right: (value: ValueType): GetCSS => getCss(right, value),
  top: (value: ValueType): GetCSS => getCss(top, value)
};
