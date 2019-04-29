import { BoxSizingProperty, Properties } from 'csstype'
import { Component, ReactNode } from 'react'

type UIBoxProp = string | number | boolean | null | undefined
export type Falsey<T> = { [P in keyof T]?: T[P] | T[P][] | false | null }
interface BoxPropsAugmented
  extends Falsey<
    Properties<string | number | boolean | string[] | number[] | boolean[]>
  > {}

interface BoxPropsBase extends BoxPropsAugmented {
  is?: string | React.ComponentClass | React.FunctionComponent

  className?: string

  breakpoints?: string[]

  marginX?: UIBoxProp

  marginY?: UIBoxProp

  paddingX?: UIBoxProp

  paddingY?: UIBoxProp

  clearfix?: boolean

  key?: string
  /**
   * Callback that gets passed a ref to inner DOM node (or component if the is prop is set to a
   * React component type).
   */
  innerRef?(node: ReactNode): any
  [key: string]: any
}

export type BoxProps = BoxPropsBase & {
  boxSizing?: BoxSizingProperty | UIBoxProp
}

export type Box = Component<BoxProps>
