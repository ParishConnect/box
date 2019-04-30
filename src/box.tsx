import { css as ecss } from 'emotion'
import facepaint from 'facepaint'
import * as React from 'react'
import { BoxProps } from './box-types'
import enhanceProps from './enhance-props'
import { MediaQueryConsumer } from './media-query-context'

class Box extends React.Component<BoxProps, {}> {
  static defaultProps = {
    css: null,
    innerRef: null,
    is: 'div',
    boxSizing: 'border-box'
  }

  ref = React.createRef()

  render() {
    const { is = 'div', css, innerRef, children, ...props } = this.props
    // Convert the CSS props to class names (and inject the styles)
    const { className, enhancedProps: parsedProps, mqCSS } = enhanceProps(props)

    console.log(className)

    if (innerRef) {
      parsedProps.ref = (node: React.ReactNode) => {
        innerRef(node)
      }

      parsedProps.ref = this.ref
    }

    if (css || Object.getOwnPropertyNames(mqCSS).length > 0) {
      // Add emotion class
      return React.createElement(
        MediaQueryConsumer,
        null,
        (breakpoints: string[]) => {
          const mq = facepaint(breakpoints)
          parsedProps.className = `${className} ${ecss(
            css,
            mq(mqCSS)
          ).toString()}`

          return React.createElement(is, parsedProps, children)
        }
      )
    }

    parsedProps.className = className
    return React.createElement(is, parsedProps, children)
  }
}

export default Box
