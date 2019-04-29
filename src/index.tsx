import * as cache from './cache'
import * as styles from './styles'

export { css } from '@emotion/core'
export { default } from './box'
export { Box as BoxType, BoxProps } from './box-types'
export {
  background,
  borderRadius,
  borders,
  boxShadow,
  dimensions,
  flex,
  interaction,
  layout,
  list,
  opacity,
  overflow,
  position,
  propAliases,
  propEnhancers,
  propNames,
  propTypes,
  spacing,
  text,
  transform
} from './enhancers/index'
export { MediaQueryProvider } from './media-query-context'
export { default as splitBoxProps } from './utils/split-box-props'
export { default as splitProps } from './utils/split-props'

export function hydrate(entries) {
  cache.hydrate(entries)
}

export function extractStyles() {
  const output = {
    cache: cache.entries(),
    styles: styles.getAll()
  }
  clearStyles()
  return output
}

export function clearStyles() {
  cache.clear()
  styles.clear()
}
