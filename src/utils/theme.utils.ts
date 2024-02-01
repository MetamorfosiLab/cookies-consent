import { kebabCase } from 'lodash-es'
import type { Theme } from '../types/theme.types'

export function convertThemeToCSS(theme: Theme): string {
  let cssString = ''

  function convertSectionToCSS(section: Record<string, any>, prefix: string = ''): void {
    Object.entries(section).forEach(([key, value]) => {
      if (typeof value === 'object') {
        convertSectionToCSS(value, `${prefix}${key}`)
      }
      else {
        const cssVariableName = `--cc-${kebabCase(prefix)}-${kebabCase(key)}`
        cssString += `${cssVariableName}: ${value};\n`
      }
    })
  }

  convertSectionToCSS(theme)

  return cssString
}
