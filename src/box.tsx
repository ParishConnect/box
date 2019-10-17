import { ClassNames } from '@emotion/core'
import { CSSInterpolation } from '@emotion/serialize'
import * as CSS from 'csstype'
import facepaint from 'facepaint'
import React, { forwardRef, ReactNode, Ref, useContext } from 'react'
import expandAliases from './expandAliases'
import { MediaQueryContext } from './mqcontext'
import splitCSSProps from './splitCSSProps'

export interface BoxProps extends CSS.StandardPropertiesFallback<number | string | number[] | string[] | null> {
  is?: any
  className?: string
  css?: CSSInterpolation | CSSInterpolation[]
  props?: React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement> | null | undefined
  style?: object
  children?: ReactNode | ReactNode[]
  [key: string]: any
}

const Box = forwardRef(({ is = 'div', className, innerRef, css, props = {}, style, children, ...rest }: BoxProps, ref: Ref<any>) => {
  const mqContext = useContext(MediaQueryContext)
  const mq = facepaint(mqContext)
  ;[rest, css] = expandAliases(rest, css)
  const { matched, remaining } = splitCSSProps(rest)

  if (innerRef) {
    props!.ref = innerRef
  }

  return (
    <ClassNames>
      {({ css: ecss, cx }) =>
        React.createElement(
          is,
          {
            className: cx([ecss(mq([css, matched])), className]),
            style,
            ref,
            ...remaining,
            ...props,
          },
          children,
        )
      }
    </ClassNames>
  )
})

Box.defaultProps = {
  boxSizing: 'border-box',
}

export default Box
