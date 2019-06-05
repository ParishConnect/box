import * as cache from "./cache";
import { propEnhancers, propValueTypes } from "./enhancers";
import expandAliases from "./expand-aliases";
import * as styles from "./styles";
import { Without } from "./types/box-types";
import { EnhancerProps } from "./types/enhancers";
import facepaint from "facepaint";
import valueToString from "./value-to-string";
import { useContext } from "react";
import MediaQueryContext from "./utils/media-query-context";

type PreservedProps = Without<React.ComponentProps<any>, keyof EnhancerProps>;

interface EnhancedPropsResult {
  className: string;
  enhancedProps: PreservedProps;
}

/**
 * Converts the CSS props to class names and inserts the styles.
 */
export default function enhanceProps(rawProps: EnhancerProps & React.ComponentPropsWithoutRef<any>): EnhancedPropsResult {
  const propsMap = expandAliases(rawProps);
  const mqContext = useContext(MediaQueryContext);

  const mq = facepaint(mqContext);

  const preservedProps: PreservedProps = {};
  let className = rawProps.className || "";

  for (const [propName, propValue] of propsMap) {
    const cachedClassName = cache.get(propName, propValue);
    if (cachedClassName) {
      className = `${className} ${cachedClassName}`;
      continue;
    }

    if (Array.isArray(propValue)) {
      const mqProps = mq({ [propName]: propValue })[0];
      const propertyInfo = propValueTypes[propName];
      const sharedClassName = "♱" + propertyInfo.className + "_" + propValue.join("-");
      let addedClassName = false;

      Object.keys(mqProps).forEach(key => {
        if (typeof mqProps[key] !== "object") {
          const cachedClassName = cache.get(propName, mqProps[key]);
          if (cachedClassName) {
            className = `${className} ${cachedClassName}`;
            return;
          }
          const enhancer = propEnhancers[propName];
          if (enhancer && (propValue === null || propValue === undefined || propValue === false)) {
            return;
          } else if (!enhancer) {
            // Pass through native props. e.g: disabled, value, type
            preservedProps[propName] = propValue;
            return;
          }
          const newCss = enhancer(mqProps[key]);
          // Allow enhancers to return null for invalid values
          if (newCss) {
            styles.add(newCss.styles);
            cache.set(propName, mqProps[key], newCss.className);
            cache.set(propName, propValue, `${newCss.className} ${sharedClassName}`);
            className = `${className} ${sharedClassName} ${newCss.className}`;
            addedClassName = true;
          }
        } else {
          const ruleString = `${propertyInfo.cssName}:${valueToString(Object.values(mqProps[key])[0])}`;
          const newCss = {
            className: sharedClassName,
            styles: `
          ${key} {
            .${sharedClassName} { ${ruleString} }
          }
          `
          };

          if (!addedClassName) {
            className = `${className} ${sharedClassName}`;
          }

          styles.add(newCss.styles);
        }
      });

      continue;
    }

    const enhancer = propEnhancers[propName];
    // Skip false boolean enhancers. e.g: `clearfix={false}`
    // Also allows omitting props via overriding with `null` (i.e: neutralising props)
    if (enhancer && (propValue === null || propValue === undefined || propValue === false)) {
      continue;
    } else if (!enhancer) {
      // Pass through native props. e.g: disabled, value, type
      preservedProps[propName] = propValue;
      continue;
    }

    const newCss = enhancer(propValue);
    // Allow enhancers to return null for invalid values
    if (newCss) {
      styles.add(newCss.styles);
      cache.set(propName, propValue, newCss.className);
      className = `${className} ${newCss.className}`;
    }
  }

  className = className.trim();

  return { className, enhancedProps: preservedProps };
}
