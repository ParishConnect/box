import { ClassNames } from "@emotion/core";
import facepaint from "facepaint";
import cc from "classcat";
import * as CSS from "csstype";
import React, { ReactNode } from "react";

export interface BoxProps extends CSS.PropertiesFallback<number | string | number[] | string[] | null> {
  is?: any;
  className?: string;
  css?: any;
  props?: React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement> | null | undefined;
  style?: object;
  children?: ReactNode | ReactNode[];
  [key: string]: any;
}

const Box = ({ is = "div", className, css, props, style, children, ...rest }: BoxProps) => {
  const mq = facepaint(["@media(min-width: 420px)", "@media(min-width: 920px)", "@media(min-width: 1120px)"]);

  return (
    <ClassNames>
      {({ css: ecss }) =>
        React.createElement(
          is,
          {
            className: cc([ecss(mq([css, rest])), className]),
            style,
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
