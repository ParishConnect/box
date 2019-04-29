import { propNames } from '../enhancers/index';
import splitProps from './split-props';

/**
 * Convenience method to split the Box props.
 *
 * Useful for when you want to pass all of the Box props to the root Box and
 * pass the remaining props to a child element (e.g: disabled, readOnly, required, etc).
 */
export default function splitBoxProps(props: object): any {
  return splitProps(props, propNames);
}
