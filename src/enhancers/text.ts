import * as PropTypes from 'prop-types';
import getCss, { GetCSS } from '../get-css';
import { PropEncharValueType as ValueType } from './types';

export const propTypes = {
  color: PropTypes.string,
  font: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontStyle: PropTypes.string,
  fontVariant: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  textOverflow: PropTypes.string,
  textShadow: PropTypes.string,
  textTransform: PropTypes.string,
  whiteSpace: PropTypes.string,
  wordBreak: PropTypes.string,
  wordWrap: PropTypes.string
};

export const propAliases = {};
export const propValidators = {};

const textAlign = {
  className: 'txt-algn',
  safeValue: true,
  cssName: 'text-align',
  jsName: 'textAlign'
};
const textDecoration = {
  className: 'txt-deco',
  cssName: 'text-decoration',
  jsName: 'textDecoration'
};
const textTransform = {
  className: 'txt-trns',
  cssName: 'text-transform',
  jsName: 'textTransform',
  safeValue: true
};
const textShadow = {
  className: 'txt-shdw',
  cssName: 'text-shadow',
  jsName: 'textShadow',
  complexValue: true
};
const textOverflow = {
  className: 'txt-ovrf',
  cssName: 'text-overflow',
  jsName: 'textOverflow',
  safeValue: true
};
const color = {
  className: 'color',
  cssName: 'color',
  jsName: 'color'
};
const font = {
  className: 'fnt',
  cssName: 'font',
  jsName: 'font',
  complexValue: true
};
const fontFamily = {
  className: 'fnt-fam',
  cssName: 'font-family',
  jsName: 'fontFamily',
  complexValue: true
};
const fontSize = {
  className: 'fnt-sze',
  cssName: 'font-size',
  jsName: 'fontSize'
};
const fontStyle = {
  className: 'fnt-stl',
  cssName: 'font-style',
  jsName: 'fontStyle',
  safeValue: true
};
const fontVariant = {
  className: 'f-vari',
  cssName: 'font-variant',
  jsName: 'fontVariant'
};
const fontWeight = {
  className: 'f-wght',
  cssName: 'font-weight',
  jsName: 'fontWeight',
  safeValue: true,
  defaultUnit: ''
};
const lineHeight = {
  className: 'ln-ht',
  cssName: 'line-height',
  jsName: 'lineHeight',
  defaultUnit: ''
};
const wordBreak = {
  className: 'wrd-brk',
  cssName: 'word-break',
  jsName: 'wordBreak',
  safeValue: true
};
const wordWrap = {
  className: 'wrd-wrp',
  cssName: 'word-wrap',
  jsName: 'wordWrap',
  safeValue: true
};
const whiteSpace = {
  className: 'wht-spc',
  cssName: 'white-space',
  jsName: 'whiteSpace',
  safeValue: true
};
const letterSpacing = {
  className: 'ltr-spc',
  cssName: 'letter-spacing',
  jsName: 'letterSpacing'
};

export const propEnhancers = {
  color: (value: ValueType): GetCSS => getCss(color, value),
  font: (value: ValueType): GetCSS => getCss(font, value),
  fontFamily: (value: ValueType): GetCSS => getCss(fontFamily, value),
  fontSize: (value: ValueType): GetCSS => getCss(fontSize, value),
  fontStyle: (value: ValueType): GetCSS => getCss(fontStyle, value),
  fontVariant: (value: ValueType): GetCSS => getCss(fontVariant, value),
  fontWeight: (value: ValueType): GetCSS => getCss(fontWeight, value),
  letterSpacing: (value: ValueType): GetCSS => getCss(letterSpacing, value),
  lineHeight: (value: ValueType): GetCSS => getCss(lineHeight, value),
  textAlign: (value: ValueType): GetCSS => getCss(textAlign, value),
  textDecoration: (value: ValueType): GetCSS => getCss(textDecoration, value),
  textOverflow: (value: ValueType): GetCSS => getCss(textOverflow, value),
  textShadow: (value: ValueType): GetCSS => getCss(textShadow, value),
  textTransform: (value: ValueType): GetCSS => getCss(textTransform, value),
  whiteSpace: (value: ValueType): GetCSS => getCss(whiteSpace, value),
  wordBreak: (value: ValueType): GetCSS => getCss(wordBreak, value),
  wordWrap: (value: ValueType): GetCSS => getCss(wordWrap, value)
};
