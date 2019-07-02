import { BoxProps } from "./box";

export default function splitCSSProps(props: BoxProps) {
  const matched: any = {};
  const remaining: any = {};
  Object.keys(props).forEach(p => {
    const valueType = typeof props[p];
    if (valueType !== "boolean" && valueType !== "number" && valueType !== "string" && !Array.isArray(props[p])) {
      remaining[p] = props[p];
    } else {
      matched[p] = props[p];
    }
  });

  return { matched, remaining };
}
