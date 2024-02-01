import type { Properties as CSSProperties } from 'csstype'

export interface Theme {
  window?: Pick<CSSProperties, 'background' | 'padding' | 'border' | 'borderRadius' | 'width' | 'marginTop' | 'marginLeft' | 'marginRight' | 'marginBottom'>

  title?: Pick<CSSProperties, 'fontSize' | 'fontWeight' | 'padding'> & {
    textColor?: CSSProperties['color']
  }

  message?: Pick<CSSProperties, 'padding' | 'lineHeight' | 'fontSize' | 'fontWeight'> & {
    textColor?: CSSProperties['color']
    linkColor?: CSSProperties['color']
    linkDecoration?: CSSProperties['textDecoration']
    linkFontWeight?: CSSProperties['fontWeight']
  }

  settings?: Pick<CSSProperties, 'marginTop' | 'marginBottom' | 'fontSize'> & {
    separatorColor?: CSSProperties['color']
    titleSize?: CSSProperties['fontSize']
    titleWeight?: CSSProperties['fontWeight']
  }

  buttons?: Pick<CSSProperties, 'padding'> & {
    align?: CSSProperties['textAlign']
  }

  btn?: Pick<CSSProperties, 'fontSize' | 'fontWeight' | 'margin' | 'padding'> & {
    radius?: CSSProperties['borderRadius']
  }

  btnAccept?: Pick<CSSProperties, 'background' | 'border'> & {
    textColor?: CSSProperties['color']
    backgroundHover?: CSSProperties['background']
  }

  btnReject?: Pick<CSSProperties, 'background' | 'border'> & {
    textColor?: CSSProperties['color']
    backgroundHover?: CSSProperties['background']
  }

  btnInfo?: Pick<CSSProperties, 'background' | 'border'> & {
    textColor?: CSSProperties['color']
    backgroundHover?: CSSProperties['background']
  }

  btnSettings?: Pick<CSSProperties, 'background' | 'border'> & {
    textColor?: CSSProperties['color']
    backgroundHover?: CSSProperties['background']
  }

  btnSettingsSelect?: Pick<CSSProperties, 'background' | 'border'> & {
    textColor?: CSSProperties['color']
    backgroundHover?: CSSProperties['background']
  }

  btnSettingsAccept?: Pick<CSSProperties, 'background' | 'border'> & {
    textColor?: CSSProperties['color']
    backgroundHover?: CSSProperties['background']
  }

  btnDismiss?: Pick<CSSProperties, 'background' | 'border' | 'fontSize' | 'fontWeight' | 'padding'> & {
    textColor?: CSSProperties['color']
    radius?: CSSProperties['borderRadius']
  }

  btnClose?: Pick<CSSProperties, 'color'> & {
    colorHover?: CSSProperties['color']
  }

  popup?: Pick<CSSProperties, 'background' | 'width'> & {
    textColor?: CSSProperties['color']
    radius?: CSSProperties['borderRadius']
  }

  animation?: {
    duration?: CSSProperties['animationDuration']
    delay?: CSSProperties['animationDelay']
  }
}
