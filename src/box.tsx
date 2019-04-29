import { css as ecss } from '@emotion/core';
import * as React from 'react';
import { BoxProps } from './box-types';
import enhanceProps from './enhance-props';

class Box extends React.Component<BoxProps, {}> {
  static defaultProps = {
    css: null,
    innerRef: null,
    is: 'div',
    boxSizing: 'border-box'
  };

  ref = React.createRef();

  render() {
    const { is = 'div', css, innerRef, children, ...props } = this.props;
    // Convert the CSS props to class names (and inject the styles)
    const { className, enhancedProps: parsedProps } = enhanceProps(props);

    // Add glamor class
    if (css) {
      parsedProps.className = `${className} ${ecss(css).toString()}`;
    } else {
      parsedProps.className = className;
    }

    if (innerRef) {
      parsedProps.ref = (node: React.ReactNode) => {
        innerRef(node);
      };

      parsedProps.ref = this.ref;
    }

    return React.createElement(is, parsedProps, children);
  }
}

export default Box;
