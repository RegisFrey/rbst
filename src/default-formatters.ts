import { registerFormat } from './format-tokens'

import { format as formatCssCustomPropeties } from './formatters/css-custom-properties'
import { format as formatScssCustomPropeties } from './formatters/scss-custom-properties'

export function registerDefaultFormatters () {
    registerFormat('css-custom-properties', formatCssCustomPropeties)
    registerFormat('scss-custom-properties', formatScssCustomPropeties)
}
