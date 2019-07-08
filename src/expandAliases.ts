import { BoxProps } from "./box";
import { CSSObject } from "@emotion/css";

export default function expandAliases(props: BoxProps, css: any = {}): [BoxProps, CSSObject] {
  if (props.marginX) {
    props.marginLeft = props.marginLeft || props.marginX;
    props.marginRight = props.marginRight || props.marginX;
    delete props.marginX;
  }
  if (props.marginY) {
    props.marginTop = props.marginTop || props.marginY;
    props.marginBottom = props.marginBottom || props.marginY;
    delete props.marginY;
  }
  if (props.paddingX) {
    props.paddingLeft = props.paddingLeft || props.paddingX;
    props.paddingRight = props.paddingRight || props.paddingX;
    delete props.paddingX;
  }
  if (props.paddingY) {
    props.paddingTop = props.paddingTop || props.paddingY;
    props.paddingBottom = props.paddingBottom || props.paddingY;
    delete props.paddingY;
  }
  if (props.clearfix) {
    css["::before, ::after"] = {
      display: "table",
      clear: "both",
      content: ""
    };
    delete props.clearfix;
  }

  return [props, css];
}
