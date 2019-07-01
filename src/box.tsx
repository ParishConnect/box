import React, { useContext } from "react";
import { Is, BoxProps, BoxComponent } from "./types/box-types";
import enhanceProps from "./enhance-props";
import { MediaQueryContext } from "./index";

type Options<T extends Is> = {
  is: T;
};

function createComponent<T extends Is>({ is: defaultIs }: Options<T>) {
  const Component: BoxComponent<T> = ({ is = defaultIs, innerRef, children, ...props }: BoxProps<T>) => {
    // Convert the CSS props to class names (and inject the styles)
    const mqContext = useContext(MediaQueryContext);
    const { className, enhancedProps: parsedProps } = enhanceProps(props, mqContext);

    parsedProps.className = className;

    if (innerRef) {
      parsedProps.ref = innerRef;
    }

    return React.createElement(is, parsedProps, children);
  };
  (Component as any).displayName = "Box";
  (Component as any).defaultProps = {
    innerRef: null,
    is: "div",
    boxSizing: "border-box"
  };

  return Component;
}

const Box = createComponent({ is: "div" });

export default Box;
