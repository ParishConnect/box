import { BoxProps } from './box-types'
import * as cache from './cache'
import { propEnhancers } from './enhancers'
import expandAliases from './expand-aliases'
import * as styles from './styles'

interface EnhancedPropsResult {
  mqCSS: Partial<BoxProps>
  className: string
  enhancedProps: Partial<BoxProps>
}
/**
 * Converts the CSS props to class names and inserts the styles.
 */
export default function enhanceProps(
  rawProps: Partial<BoxProps>
): EnhancedPropsResult {
  const propsMap = expandAliases(rawProps)
  const enhancedProps = {}
  const mqCSS = {}
  let className = rawProps.className || ''

  for (const [propName, propValue] of propsMap) {
    if (Array.isArray(propValue)) {
      mqCSS[propName] = propValue
      continue
    }

    const cachedClassName = cache.get(propName, propValue)
    if (cachedClassName) {
      className = `${className} ${cachedClassName}`
      continue
    }

    const enhancer = propEnhancers[propName]
    // Skip false boolean enhancers. e.g: `clearfix={false}`
    // Also allows omitting props via overriding with `null` (i.e: neutralising props)
    if (
      enhancer &&
      (propValue === null || propValue === undefined || propValue === false)
    ) {
      continue
    }

    if (!enhancer) {
      // Pass through native props. e.g: disabled, value, type
      enhancedProps[propName] = propValue
      continue
    }

    const newCss = enhancer(propValue)
    // Allow enhancers to return null for invalid values
    if (newCss) {
      styles.add(newCss.styles)
      cache.set(propName, propValue, newCss.className)
      className = `${className} ${newCss.className}`
    }
  }

  className = className.trim()

  return { className, enhancedProps, mqCSS }
}
