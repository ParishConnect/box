import * as PropTypes from 'prop-types';
import getCss, { GetCSS } from '../get-css';
import { PropEncharValueType as ValueType } from './types';

export const propTypes = {
  cursor: PropTypes.string,
  pointerEvents: PropTypes.string,
  userSelect: PropTypes.string,
  visibility: PropTypes.string
};

export const propAliases = {};

export const propValidators = {};

const cursor = {
  className: 'crsr',
  cssName: 'cursor',
  jsName: 'cursor'
};
const userSelect = {
  className: 'usr-slct',
  cssName: 'user-select',
  jsName: 'userSelect',
  safeValue: true,
  isPrefixed: true
};
const visibility = {
  className: 'vsblt',
  cssName: 'visibility',
  jsName: 'visibility',
  safeValue: true
};
const pointerEvents = {
  className: 'ptr-evts',
  cssName: 'pointer-events',
  jsName: 'pointerEvents',
  safeValue: true
};

export const propEnhancers = {
  cursor: (value: ValueType): GetCSS => getCss(cursor, value),
  pointerEvents: (value: ValueType): GetCSS => getCss(pointerEvents, value),
  userSelect: (value: ValueType): GetCSS => getCss(userSelect, value),
  visibility: (value: ValueType): GetCSS => getCss(visibility, value)
};
