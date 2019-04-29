import * as PropTypes from 'prop-types';
import getCss, { GetCSS } from '../get-css';
import { PropEncharValueType as ValueType } from './types';

export const propTypes = {
  boxSizing: PropTypes.string,
  clear: PropTypes.string,
  clearfix: PropTypes.bool,
  display: PropTypes.string,
  float: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export const propAliases = {};
export const propValidators = {};

const display = {
  className: 'dspl',
  cssName: 'display',
  jsName: 'display',
  safeValue: true,
  isPrefixed: true
};
const float = {
  className: 'flt',
  cssName: 'float',
  jsName: 'float',
  safeValue: true
};
const clear = {
  className: 'clr',
  cssName: 'clear',
  jsName: 'clear',
  safeValue: true
};
const zIndex = {
  className: 'z-idx',
  cssName: 'z-index',
  jsName: 'zIndex',
  safeValue: true,
  defaultUnit: ''
};
const boxSizing = {
  className: 'box-szg',
  cssName: 'box-sizing',
  jsName: 'boxSizing',
  safeValue: true
};

export const propEnhancers = {
  boxSizing: (value: ValueType): GetCSS => getCss(boxSizing, value),
  clear: (value: ValueType): GetCSS => getCss(clear, value),
  clearfix: (): GetCSS => ({
    className: 'al-clearfix',
    styles: `
.al-clearfix:before, .al-clearfix:after {
  display: table;
  clear: both;
  content: "";
}`
  }),
  display: (value: ValueType): GetCSS => getCss(display, value),
  float: (value: ValueType): GetCSS => getCss(float, value),
  zIndex: (value: ValueType): GetCSS => getCss(zIndex, value)
};
