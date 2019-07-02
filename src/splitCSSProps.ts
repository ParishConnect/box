import { BoxProps } from "./box";
import whitelist from "./propWhitelist";

export default function splitCSSProps(props: BoxProps) {
  const matched: any = {};
  const remaining: any = {};

  Object.keys(props).forEach(propName => {
    const isValidCSSProp = whitelist.includes(propName);
    const propValue = props[propName];

    if (isValidCSSProp && (propValue === null || propValue === undefined || propValue === false)) {
      return;
    } else if (!isValidCSSProp) {
      remaining[propName] = propValue;
      return;
    }
    matched[propName] = props[propName];
    return;
  });

  return { matched, remaining };
}
