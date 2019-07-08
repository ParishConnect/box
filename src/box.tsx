import { ClassNames } from "@emotion/core";
import facepaint from "facepaint";
import * as CSS from "csstype";
import React, { ReactNode, useContext } from "react";
import expandAliases from "./expandAliases";
import splitCSSProps from "./splitCSSProps";
import { MediaQueryContext } from "./mqcontext";

export interface BoxProps extends CSS.StandardPropertiesFallback<number | string | number[] | string[] | null> {
  is?: any;
  className?: string;
  css?: CSS.StandardPropertiesFallback<number | string | number[] | string[] | null>;
  props?: React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement> | null | undefined;
  style?: object;
  children?: ReactNode | ReactNode[];
  [key: string]: any;
}

const Box = ({ is = "div", className, innerRef, css, props = {}, style, children, ...rest }: BoxProps) => {
  const mqContext = useContext(MediaQueryContext);
  const mq = facepaint(mqContext);

  [rest, css] = expandAliases(rest, css);
  const { matched, remaining } = splitCSSProps(rest);

  if (innerRef) {
    props!.ref = innerRef;
  }

  return (
    <ClassNames>
      {({ css: ecss, cx }) =>
        React.createElement(
          is,
          {
            className: cx([ecss(mq([css, matched])), className]),
            style,
            ...remaining,
            ...props
          },
          children
        )
      }
    </ClassNames>
  );
};

Box.defaultProps = {
  boxSizing: "border-box"
};

export default Box;
