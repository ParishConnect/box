import {clearStyles} from '../../lib/src'
import allPropertiesComponent from '../all-properties-component-js'

export default function benchmark() {
  clearStyles()
  return allPropertiesComponent()
}
