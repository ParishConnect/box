import {clearStyles} from '../../lib/src'
import allPropertiesComponent from '../all-properties-componentJS'

export default function benchmark() {
  clearStyles()
  return allPropertiesComponent()
}
